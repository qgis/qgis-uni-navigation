# Unified Navigation Bar Web Component

The web component, `qg-top-nav`, dynamically renders the navigation bar based on the provided JSON configuration. It supports responsive layouts with a mobile-friendly design.


## Usage

To include the qg-top-nav component in your web page, first ensure that you import the component script.
Then you can use the qg-top-nav element in your HTML as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Navigation Example</title>
  <script type="module" src="/path/to/qg-top-nav.js"></script>
</head>
<body>

<qg-top-nav 
  breakpoint="768"
  location-prefix="https://qgis.org"
  second-menu-prefix="https://hub.qgis.org"
  secondary-menu-config="https://raw.githubusercontent.com/qgis/QGIS-Hub-Website/main/menu-config.json"
  logo-icon="https://qgis.org/funders/qgis-usergroup-switzerland.png"
  logo-link="https://uc2025.qgis.org"
>

</qg-top-nav>

</body>
</html>
```

In this example, the `qg-top-nav` component is included in the HTML file. The `breakpoint` is set to `768px`, meaning the navigation will switch to its mobile layout on screen widths smaller than `768px`.

## Properties

- **`breakpoint`** (optional): The viewport width (in pixels) below which the navigation switches to its mobile layout.
- **`locationPrefix`** (optional): A prefix added to the paths defined in the configuration, useful for deployment in subdirectories.
- **`src`** (optional, default: 1024px): The URL to the JSON configuration file. By default configuration will be used from `public/nav-config.json` file. If this attribute is set, the component will fetch the JSON configuration from the specified URL and render the navigation based on the provided data.


## JSON Config Description

The JSON structure is designed to define the navigation bar's content and behavior. Here is a brief overview of its main sections and properties:

- **`logo`**: Defines the logo's properties.
  - **`icon`**: The file name of the logo image.
  - **`link`**: The URL path that the logo links to.

- **`navigation`**: An array of navigation items, which can be of type `menu`, `link`, or `button`.
  - **`type`**: Specifies the item type (`menu`, `link`, `button`).
  - **`settings`**: Contains the specific settings for each type.
    - **`name`**: The display name of the item.
    - For `link` and `button` types:
      - **`href`**: The URL path the item links to.
      - **`activeTest`** (optional): A path to test against the current URL to determine if the item is active.
    - For `menu` type:
      - **`children`**: An array of items representing submenu items.

## Example JSON Configuration (`nav-config.json`)

This is an example of a JSON file named `nav-config.json` that defines the navigation structure, including a logo, menus, links, and a donation button.

```json
{
  "logo": {
    "icon": "logo.svg",
    "link": "/"
  },
  "navigation": [
    {
      "type": "menu",
      "settings": {
        "name": "Project",
        "children": [
          {
            "type": "link",
            "settings": {
              "name": "Overview",
              "href": "/project/overview"
            }
          },
          {
            "type": "link",
            "settings": {
              "name": "Features",
              "href": "/project/features"
            }
          }
        ]
      }
    },
    {
      "type": "link",
      "settings": {
        "name": "Pricing",
        "href": "/pricing"
      }
    },
    {
      "type": "button",
      "settings": {
        "name": "Sign Up",
        "href": "/signup"
      }
    }
  ]
}
```


## Styling Customization

To customize the appearance of the `qg-top-nav` web component in your application, you can use CSS custom properties (variables). These variables provide a powerful way to theme and style the component without altering its internal structure. Below is a detailed guide on how to leverage these CSS variables for styling:


### Basic Usage of CSS Custom Properties

CSS custom properties allow you to define values that can be reused throughout your CSS document. To style the `qg-top-nav` component, you can override the default values of its custom properties. Here’s how you can do it:

```css
qg-top-nav {
  --qg-nav-max-width: 1200px; /* Maximum width of the navigation bar */
  --qg-nav-min-height: 3rem; /* Minimum height of the navigation bar */
  --qg-nav-font-size: 16px; /* Font size used in the navigation */
  --qg-nav-active-color: #3498db; /* Color for active links and highlights */
}
```


### Detailed Styling Guide

#### Layout and Structure

- `--qg-nav-max-width`: Controls the maximum width of the navigation bar. This is useful for aligning the navigation with your site's content width.
- `--qg-nav-min-height`: Determines the minimum height of the navigation bar, impacting the overall vertical space it occupies.


#### Typography and Links

- `--qg-nav-font-size`: Sets the font size for text within the navigation, including links.
- `--qg-nav-font-family`: Although not predefined, you might consider adding a variable for font family if your design requires consistency across various components.


#### Colors and Themes

- `--qg-nav-active-color`: Specifies the color for active link states and other interactive elements to match your website's theme.
- `--qg-nav-background-color`: To set the background color of the navigation bar. While not predefined, adding such a variable can enhance theming capabilities.
- `--qg-nav-text-color`: For setting the default text color within the navigation. Implementing this variable allows for easy text color adjustments.


#### Button Styles

- `--qg-nav-button-background-color`: Defines the background color for buttons within the navigation, such as a "Donate" button.
- `--qg-nav-button-text-color`: Sets the color of the text inside navigation buttons.


#### Applying Styles Globally

Since the `qg-top-nav` component is encapsulated using Shadow DOM, direct child selectors in global stylesheets won't penetrate the shadow boundary. However, CSS custom properties are inherited through the Shadow DOM, making them an effective tool for styling shadow-encapsulated elements.

To apply these styles globally, you can define the custom properties within the `:root` selector or any global class that wraps your application:

```css
:root {
  --qg-nav-max-width: 100%;
  --qg-nav-min-height: 50px;
  --qg-nav-font-size: 15px;
  --qg-nav-active-color: #2ecc71;
}
```

All these variables can be used with media queries to create responsive designs, ensuring that the navigation bar adapts to various screen sizes and devices.


## Development

The dev environment comes from a Nix flake. It gives you Node.js 24 and pnpm 10, so you do not need to install either yourself. You need [Nix](https://nixos.org/download/) with flakes enabled.

1. Enter the dev shell. The first run installs the pnpm dependencies from the lockfile.

   ```sh
   $ nix develop
   ```

2. Start the dev server.

   ```sh
   $ dev
   ```

3. Open `http://localhost:5173/` to see the component.

Run `menu` inside the shell to list every command. If you use [direnv](https://direnv.net/), run `direnv allow` once and the shell loads each time you enter the folder.

> Hot reloading works for everything except `nav-config.json`. Restart the server after you change the config.


## Deployment

### Building

Run `build` inside the dev shell and pass the base URL of your deployment:

```sh
$ build --base=<base-url>
```

For example, this builds for the repo's GitHub Pages site:

```sh
$ build --base=https://qgis.github.io/qgis-uni-navigation/
```

The build writes its files to `dist/`. You can deploy that folder to any static file server or CDN. Vite needs the `base` URL to load assets and resolve routes correctly.

You can run the same build without entering the shell:

```sh
$ nix develop --command build --base=https://qgis.github.io/qgis-uni-navigation/
```


### Deploying to GitHub Pages

To publish `dist/` to the `gh-pages` branch, run this inside the dev shell:

```sh
$ deploy
```
