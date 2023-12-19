## How to use
1. Put `<qg-top-nav></qg-top-nav>` tag in application page basic template
2. Add script to the page

```diff
<head>
+ <script src="https://host.cdn.org/latest/qgis-uni-nav.min.js">
</head>
<body>
  ...
```

## Development
This project require:
- Node.js@20
- Pnpm@6

Or you can use [devbox](https://www.jetpack.io/devbox/docs/quickstart/), it manage necessary env for you.
TL;DR:
```sh
$ curl -fsSL https://get.jetpack.io/devbox | bash # Run it once for install devbox
$ devbox run dev # for activate env and run project locally
# devbox run - for show other scripts 
```