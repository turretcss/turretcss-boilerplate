# turretcss boilerplate

Basic turretcss boilerplate for front-end development using [turretcss][turretcss], [PostCSS][PostCSS], [PostCSS CLI][PostCSS CLI], [cssnext][cssnext], and [CSSNano][CSSNano].

## Quick start

There are two quick start ways to download turretcss boilerplate:

- [Download the latest release](https://github.com/turretcss/turretcss-boilerplate/archive/master.zip).
- Clone the repo: `git clone https://github.com/turretcss/turretcss-boilerplate.git`.

## Usage

Once downloaded make sure to run `npm install` or `yarn` to install all npm dependancies.

## What's Included

Within the download you'll find the following directories and files.

```
template/
├── assets/
│   ├── css/
│   ├── fonts/
│   ├── glyphs/
│   ├── images/
├── dist/
|   index.html
|   package.json
|   postcss.config.js
|   README.md
|   theme.html
└─  yarn.lock

```

## Scripts

### start

Start script runs the `watch` script

```
"start": "npm run watch"
```

### watch

Runs the build script and watches directory

```
"watch": "npm run build -- -w"
```

### build

Builds CSS using PostCSS through `postcss-cli`, config is contained in `postcss.config.js`

```
"build": "postcss assets/css/main.css -o dist/bundle.css",
```

## Creators

**Scott de Jonge**

* Twitter: [@scottdejonge](https://twitter.com/scottdejonge)
* Github: [@scottdejonge](https://github.com/scottdejonge)

## Versioning

Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Copyright and license

Code released under the MIT license.

[turretcss]: http://turretcss.com/
[PostCSS]: http://postcss.org/
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[cssnext]: http://cssnext.io/
[CSSNano]: http://cssnano.co/