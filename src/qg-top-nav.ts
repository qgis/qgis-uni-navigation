import { LitElement, TemplateResult, css, html } from 'lit';
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

          return html`<div class=${menuClasses}>
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

  drawHeader() {
    const navigation = this.config?.navigation;

    return navigation
      ? html`<nav class="navigation" role="navigation" aria-label="main navigation">
          ${this.drawLogo()} ${this.drawMenu(navigation)}
        </nav>`
      : '';
  }

  render() {
    return html`<header class="header">${this.drawHeader()}</header> `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      font-family: Trueno, sans-serif;
    }

    .header {
      padding: 0 0.5rem;
      background-color: #fff;
      color: #000;
      box-shadow: 5px 5px 5px 0 #00000020;
    }

    .logo > div {
      height: 2rem;
      width: 6rem;
      display: inline-block;
      background-image: var(--logo-img);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      box-sizing: border-box;
    }

    .link {
      font-weight: 700;
      color: inherit;
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

    .navigation {
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      gap: 3rem;

      width: 100%;
      margin: 0 auto;
      max-width: var(--qg-nav-max-width, auto);
      min-height: var(--qg-nav-min-height, 4.75rem);
      font-size: var(--qg-nav-font-size, 14px);
    }

    .navigation .link {
      text-decoration: none;
      padding: 0.5rem 1.75rem;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    .link.button {
      background-color: var(--qg-nav-active-color, #93b023);
      color: #fff;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      align-self: center;

      color: #fff;

      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
      letter-spacing: 0.022px;
    }

    .link.external::after {
      content: '';
      mask: url('external.svg') no-repeat 50% 50%;
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

    .menu.top-level > .link::after {
      content: '';
      mask: url('arrow.svg') no-repeat 50% 50%;
      mask-size: cover;
      width: 1rem;
      height: 1rem;
      background-color: #939393;
      display: inline-block;
      margin-left: 0.625rem;
      margin-top: -0.1rem;
    }

    .menu:not(.top-level) > .link::after {
      content: '';
      mask: url('arrow.svg') no-repeat 50% 50%;
      mask-size: cover;
      width: 1rem;
      height: 1rem;
      background-color: #939393;
      display: inline-block;
      margin-left: auto;
      transform: rotate(-90deg);
    }

    /* dropdown menu base styles */
    .menu {
      position: relative;
    }

    .menu:hover .link,
    .menu:focus .link {
      cursor: pointer;
    }

    .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      min-width: 100%;
      padding: 1rem 0;
    }

    .dropdown .link {
      padding: 0 2rem;
    }
    .dropdown .link:not(:last-child) {
      padding-bottom: 2rem;
    }

    .menu:hover .dropdown {
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
    .menu:hover .menu:not(:hover) .dropdown {
      display: none;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'qg-top-nav': QGTopNav;
  }
}
