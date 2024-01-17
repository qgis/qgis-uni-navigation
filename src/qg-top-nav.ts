import { LitElement, TemplateResult, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { match } from 'path-to-regexp';
import type { LogoConfig, HeaderConfig, NavigationControl } from './NavConfig';

async function readConfig(src: string): Promise<HeaderConfig> {
  return fetch(src).then((r) => r.json());
}

@customElement('qg-top-nav')
export class QGTopNav extends LitElement {
  @property({ type: String })
  accessor src = `${import.meta.env.BASE_URL}nav-config.json`;

  @state()
  protected config: null | HeaderConfig = null;
  protected logo: null | LogoConfig = null;

  async connectedCallback() {
    super.connectedCallback();
    const config = await readConfig(this.src);
    this.config = config;

    // If the data-screen attribute is set by the user, we don't want to change it automatically
    if (this.getAttribute('data-screen') === 'mobile') return;
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleWindowResize.bind(this));
    super.disconnectedCallback();
  }

  handleWindowResize() {
    const { breakpoint } = this.config ?? {};
    if (!breakpoint) return;

    const width = window.innerWidth;

    if (width < breakpoint) {
      this.setAttribute('data-screen', 'mobile');
    } else {
      this.removeAttribute('data-screen');
      this._handleCloseMobileMenu();
      this._handleCloseMobileSubMenus();
    }
  }

  drawLogo() {
    const logo = this.config?.logo ?? null;
    const logoIcon = logo ? `${import.meta.env.BASE_URL}${logo.icon}` : '';
    return logo
      ? html`<a
          class="link logo"
          style="--logo-img: url('${logoIcon}')"
          href=${logo.link}
        >
          <div></div>
        </a>`
      : '';
  }

  checkActive(test?: string) {
    if (!test) return false;
    const matcher = match(test, { decode: decodeURIComponent });
    return matcher(window.location.pathname) ? true : false;
  }

  drawMenu(controls: NavigationControl[] = [], isTopLevel = true): TemplateResult<1> {
    if (!controls) return html``;

    return html` ${controls.map((ctrl) => {
      switch (ctrl.type) {
        case 'link':
          const isExternal = ctrl.settings.href.startsWith('https');
          const linkClasses = classMap({
            link: true,
            active: this.checkActive(ctrl.settings.activeTest),
            external: isExternal,
          });

          if (isExternal) {
            return html`<a
              href=${ctrl.settings.href}
              class=${linkClasses}
              target="_blank"
              noopener
              noreferrer
              >${ctrl.settings.name}</a
            >`;
          }

          return html`<a href=${ctrl.settings.href} class=${linkClasses}
            >${ctrl.settings.name}</a
          >`;
        case 'menu':
          const menuClasses = classMap({
            menu: true,
            'top-level': isTopLevel,
          });

          return html`<div class=${menuClasses} @click=${this._handleClickMobileSubMenu}>
            <a class="link">${ctrl.settings.name}</a>
            <div class="dropdown">${this.drawMenu(ctrl.settings.children, false)}</div>
          </div>`;

        case 'button':
          return html`<a href=${ctrl.settings.href} class="link button"
            >${ctrl.settings.name}</a
          >`;

        default:
          return '';
      }
    })}`;
  }

  _handleBurgerClick(e: Event) {
    const target = e.currentTarget as HTMLElement;
    const expanded = target.getAttribute('aria-expanded') === 'true';
    target.setAttribute('aria-expanded', (!expanded).toString());
    target.classList.toggle('active');

    const mobileMenu = this.shadowRoot?.querySelector('#mobile-menu');
    if (!mobileMenu) return;

    mobileMenu.classList.toggle('active');
  }

  _handleCloseMobileMenu() {
    const mobileMenu = this.shadowRoot?.querySelector('#mobile-menu');
    if (!mobileMenu) return;

    mobileMenu.classList.remove('active');
    const burger = this.shadowRoot?.querySelector('#burger');
    if (!burger) return;

    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  }

  _handleClickMobileSubMenu(e: Event) {
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement;
    const targetExpanded = target.getAttribute('aria-expanded') === 'true';
    target.setAttribute('aria-expanded', (!targetExpanded).toString());

    const dropdown = target.querySelector('.dropdown');
    if (!dropdown) return;

    const expanded = dropdown.getAttribute('data-expanded') === 'true';
    dropdown.setAttribute('data-expanded', (!expanded).toString());
  }

  _handleCloseMobileSubMenus() {
    const menus = this.shadowRoot?.querySelectorAll('.mobile .menu');
    menus?.forEach((menu) => menu.setAttribute('aria-expanded', 'false'));
    const dropdowns = this.shadowRoot?.querySelectorAll('.mobile .dropdown');
    dropdowns?.forEach((dropdown) => dropdown.setAttribute('data-expanded', 'false'));
  }

  drawBurger() {
    return html`<a
      id="burger"
      @click="${this._handleBurgerClick}"
      role="button"
      class="burger"
      aria-label="mobile burger menu"
      aria-expanded="false"
      data-target="mobile-menu"
      ><span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span
    ></a>`;
  }

  drawMobileMenu() {
    const navigation = this.config?.navigation;

    return html`<div id="mobile-menu" class="mobile">
      ${this.drawMenu(navigation, false)}
    </div>`;
  }

  drawHeader() {
    const navigation = this.config?.navigation;

    return navigation
      ? html`<nav class="navigation" role="navigation" aria-label="main navigation">
          ${this.drawLogo()}
          <div class="desktop">${this.drawMenu(navigation)}</div>
          ${this.drawBurger()}
        </nav>`
      : '';
  }

  render() {
    return html`<header class="header">
      ${this.drawHeader()} ${this.drawMobileMenu()}
    </header> `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      font-family: Trueno, sans-serif;
      user-select: none;
    }

    .header {
      padding: 0 0.5rem;
      background-color: #fff;
      color: #000;
      box-shadow: 5px 5px 5px 0 #00000020;
      position: relative;
    }

    .logo > div {
      height: 2rem;
      width: 6.25rem;
      display: inline-block;
      background-image: var(--logo-img);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      box-sizing: border-box;
    }

    .navigation {
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;

      width: 100%;
      margin: 0 auto;
      max-width: var(--qg-nav-max-width, auto);
      min-height: var(--qg-nav-min-height, 4rem);
      font-size: var(--qg-nav-font-size, 14px);
    }

    .desktop {
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      gap: 3rem;
    }

    .link:hover,
    .link:focus,
    .link.active {
      color: var(--qg-nav-active-color, #93b023);
    }

    /* pull the rest of the links to the right */
    .link.logo {
      margin-right: auto;
    }

    .link {
      color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    .desktop .link {
      font-weight: 700;
      padding: 0 1.75rem;
    }

    .link.button {
      background-color: var(--qg-nav-active-color, #93b023);
      color: #fff;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      align-self: center;

      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
      letter-spacing: 0.022px;
    }

    .link.external::after {
      content: '';
      mask: url('${unsafeCSS(import.meta.env.BASE_URL)}external.svg') no-repeat 50% 50%;
      mask-size: cover;
      width: 1rem;
      height: 1rem;
      background-color: #000;

      display: inline-block;
      margin-left: 0.625rem;
    }

    .link.external:hover::after,
    .link.external:focus::after {
      background-color: currentColor;
    }

    .menu > .link::after {
      content: '';
      mask: url('${unsafeCSS(import.meta.env.BASE_URL)}arrow.svg') no-repeat 50% 50%;
      mask-size: cover;
      width: 1rem;
      height: 1rem;
      background-color: #939393;
      display: inline-block;
    }

    .link::after {
      margin-left: 0.5rem;
      transition: 0.4s ease-in-out;
    }

    .menu.top-level > .link::after {
      margin-top: -0.1rem;
    }

    .desktop .menu:not(.top-level) > .link::after {
      margin-left: auto;
      transform: rotate(-90deg);
    }

    .mobile {
      display: flex;
      position: absolute;
      top: 100%;
      right: -100%;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      border-top: 0.25rem solid #000;
      padding: 1rem 2rem;
      flex-flow: column nowrap;
      gap: 2rem;
      transition: 0.4s ease-in-out;
    }

    .mobile.active {
      right: 0;
    }

    /* dropdown menu base styles */
    .menu {
      position: relative;
    }

    .menu:hover .link,
    .menu:focus .link {
      cursor: pointer;
    }

    .desktop .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      min-width: 100%;
      padding: 1rem 0;
    }

    .desktop .dropdown .link {
      padding: 0 2rem;
    }
    .desktop .dropdown .link:not(:last-child) {
      padding-bottom: 2rem;
    }

    .desktop .menu:hover .dropdown {
      display: block;
    }

    /* top-level dropdown */
    .menu.top-level {
      display: flex;
      align-items: stretch;
    }

    .menu.top-level > .dropdown {
      border-top: 0.25rem solid #000;
    }

    /* sub-level dropdown */
    .menu:not(.top-level) > .dropdown {
      left: 100%;
      top: -0.5rem;
    }

    /* prevent to show all nested dropdowns when top-level dropdown is hovered */
    .desktop .menu:hover .menu:not(:hover) .dropdown {
      display: none;
    }

    /* adaptive mobile styles */

    .burger {
      display: none;
      flex-flow: column nowrap;
      justify-content: space-between;
      width: 45px;
      height: 30px;
      cursor: pointer;
    }

    .burger span {
      display: block;
      width: 100%;
      height: 4px;
      background-color: #000;
      border-radius: 2px;
      transition: 0.4s;
      transform-origin: center;
    }

    .burger.active span:nth-child(1) {
      transform: translateY(13px) rotate(45deg);
    }
    .burger.active span:nth-child(2) {
      opacity: 0;
    }
    .burger.active span:nth-child(3) {
      transform: translateY(-13px) rotate(-45deg);
    }

    :host([data-screen='mobile']) .desktop {
      display: none;
    }
    :host([data-screen='mobile']) .header {
      padding: 0 1rem;
    }
    :host([data-screen='mobile']) .burger {
      display: flex;
    }
    :host([data-screen='mobile']) .navigation {
      align-items: center;
    }

    .mobile .menu,
    .mobile .dropdown {
      display: flex;
      flex-flow: column nowrap;
    }

    .mobile .dropdown {
      gap: 2rem;
    }

    .mobile .dropdown {
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.4s ease-in-out;
    }

    .mobile .dropdown > :first-child {
      margin-top: 2rem;
    }

    .mobile .link.button {
      align-self: flex-start;
    }

    .mobile .menu > .link,
    .mobile > .link {
      font-weight: 700;
    }

    .mobile .menu[aria-expanded='true'] > .link::after {
      transform: rotate(180deg);
    }

    .mobile .dropdown[data-expanded='true'] {
      max-height: 100vh;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'qg-top-nav': QGTopNav;
  }
}
