import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { match } from 'path-to-regexp';
import type { LogoConfig, HeaderConfig } from './NavConfig';

async function readConfig(src: string): Promise<HeaderConfig> {
  return fetch(src).then((r) => r.json());
}

@customElement('qg-top-nav')
export class QGTopNav extends LitElement {
  @property({ type: String })
  accessor src = '/nav-config.json';

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
    return logo
      ? html`<a class="link" style="--logo-img: url('${logo.icon}')" href=${logo.link}>
          <div class="logo"></div>
        </a>`
      : '';
  }

  drawMenu() {
    const navigation = this.config?.navigation;
    const checkActive = (test?: string) => {
      if (!test) return false;
      const matcher = match(test, { decode: decodeURIComponent });
      return matcher(window.location.pathname) ? true : false;
    };
    return navigation
      ? html`<nav class="navigation" role="navigation" aria-label="main navigation">
          ${this.drawLogo()}
          ${navigation.map((ctrl) => {
            switch (ctrl.type) {
              case 'link':
                return html`<a
                  href=${ctrl.settings.href}
                  class="link ${checkActive(ctrl.settings.activeTest) ? 'active' : ''}"
                  >${ctrl.settings.name}</a
                >`;
              case 'menu':
                return html`<button>${ctrl.settings.name}</button>`;
              default:
                return '';
            }
          })}
        </nav>`
      : '';
  }

  render() {
    return html`<header class="header">${this.drawMenu()}</header> `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
    }

    .header {
      padding: 0 8px;
      background-color: #fff;
      color: #000;
      box-shadow: 5px 5px 5px 0 #00000020;
    }

    .logo {
      height: 31px;
      width: 94px;
      margin-right: 1em;
      display: inline-block;
      padding: 8px;
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
      gap: 1em;

      width: 100%;
      margin: 0 auto;
      max-width: var(--qg-nav-max-width, auto);
      min-height: var(--qg-nav-min-height, 4.75rem);
    }

    .navigation .link {
      text-decoration: none;
      color: inherit;
      padding: 0.5rem 1.75rem;
      display: flex;
      align-items: center;
    }

    .navigation .active {
      color: white;
    }

    button {
      border-radius: 4px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: border-color 0.25s;
      background-color: transparent;
      color: inherit;
    }

    button:hover {
      border-color: #646cff;
    }

    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'qg-top-nav': QGTopNav;
  }
}
