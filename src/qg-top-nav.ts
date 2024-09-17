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

  @property({ type: Number })
  accessor breakpoint = 1024;

  @property({ type: String, attribute: 'location-prefix' })
  accessor locationPrefix = '';

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
    if (!this.breakpoint) return;

    const width = window.innerWidth;

    if (width < this.breakpoint) {
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
    const logoLink = logo ? this.locationPrefix + logo.link : '';
    return logo
      ? html`<a class="link logo" style="--logo-img: url('${logoIcon}')" href=${logoLink}>
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

          const href = this.locationPrefix + ctrl.settings.href;
          return html`<a href=${href} class=${linkClasses}>${ctrl.settings.name}</a>`;
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
          const iconButtonLink = this.locationPrefix + ctrl.settings.href;
          return html`<div class="button-container"><a href=${iconButtonLink} class="link ${ctrl.settings.class}"
            ><img src="${ctrl.settings.icon}" alt="${ctrl.settings.name}">
            <span class="button-text">${ctrl.settings.name}</span>
            </a
          ></div>`;

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

    // close all submenus on close
    if (expanded) this._handleCloseMobileSubMenus();
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
      height: 1.5rem;
      width: 5.25rem;
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
      gap: 1.5rem;
      align-items: center;
    }

    .link:hover,
    .link:focus,
    .link.active {
      color: var(--qg-nav-active-color, #3a9800);
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
      transition: 0.2s;
    }

    .desktop .link {
      font-weight: 600;
      padding: 0 1.75rem;
    }

    .link.primary, .link.basic {
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      align-self: center;
      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
      letter-spacing: 0.022px;
    }
    
    .link.primary {
      color: #fff;
      background-color: var(--qg-nav-active-color, #589632);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.5s ease, box-shadow 0.3s ease;
    }

    .link.basic {
      color: #000;
      background-color: var(--qg-nav-active-color, #ecf1f492);
      transition: background-color 0.5s ease;
    }
    
    .link.basic img, .link.primary img {
      height: 16px;
    }
    .link.basic span, .link.primary span {
      margin-left: 10px;
    }

    .link.primary:hover {
      background-color: var(--qg-nav-active-color, #7fc355);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .link.basic:hover {
      background-color: var(--qg-nav-active-color, #E7E7E7);
    }

    .desktop .button-container {
      display:inherit;
    }

    .desktop .button-container:last-child {
      min-width: 120px;
    }
    .desktop .icon-button:hover {
      width:100%;
    }
    .desktop .icon-button {
      position: relative;
      transition: width 0.5s ease;
    }
      
    .desktop .icon-button .button-text {
      position: absolute;
      left: 25px;
      white-space: nowrap;
      padding-left: 10px;
      opacity: 0;
      transform: translateX(-50%);
      transition: transform 0.5s ease, opacity 0.8s ease-in, opacity 0.3s ease-out;
    }

    .desktop .icon-button:hover .button-text {
      transform: translateX(0);
      opacity: 1;
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
      background-color: #002033;
      display: inline-block;
    }
    .menu > .link:hover::after {
      background-color: #3a9800;
    }

    .link::after {
      margin-left: 0.5rem;
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
      border-top: 1px solid #e3e3e3;
      padding: 1rem 2rem;
      flex-flow: column nowrap;
      gap: 1.5rem;
      transition: 0.4s ease-in-out;
      max-height: calc(100vh - 200%);
      overflow: auto;
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
      padding: 0.5rem 0;
    }

    .desktop .dropdown .link {
      padding: 0.75rem 1.5rem;
      font-weight: 400;
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
      border-top: 1px solid #e3e3e3;
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
      margin-top: 1rem;
    }

    .mobile .link.button {
      align-self: flex-start;
    }

    .mobile .menu > .link,
    .mobile > .link {
      font-weight: 600;
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
