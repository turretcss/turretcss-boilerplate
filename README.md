# Template

Basic template for front-end development using [Turret](http://turretcss.com/), [Babel](https://babeljs.io/), [jQuery](https://jquery.com/), [Browser Sync](https://www.browsersync.io/), with [Webpack](https://webpack.github.io/) for builds and [pa11y](http://pa11y.org/) for accessibility testing.

## Quick start

There are two quick start ways to download Template:

- [Download the latest release](https://github.com/scottdejonge/template/archive/master.zip).
- Clone the repo: `git clone https://github.com/scottdejonge/template.git`.

## Usage

Once downloaded make sure to run `npm install` to install all npm dependancies.

## What's Included

Within the download you'll find the following directories and files.

```
template/
|   package.json
|   README.md
|   index.html
├── assets/
│   ├── fonts/
│   ├── glyphs/
│   ├── images/
├── dist/
├── scripts/
│   ├── main.js
└── styles/
	├── main.less
	├── turret.less
	├── theme.less
    ├── fonts.less
    └── template
    	├── header.less
    	└── footer.less
```


## Scripts

### start

Start script runs the `watch` script

```
"sync": "npm run watch"
```

### test

Test script runs a11y testing using pa11y using `a11y.json` config

```
"test": "pa11y -c ./a11y.json dev.template"
```

### watch

Runs webpack watch

```
"watch": "webpack -d --watch"
```

### build

Runs webpack build

```
"build": "webpack -d"
```

### deploy

Runs webpack deploy

```
"deploy": "webpack -p"
```

## Creators

**Scott de Jonge**

* Twitter: [@scottdejonge](https://twitter.com/scottdejonge)
* Github: [@scottdejonge](https://github.com/scottdejonge)

## Versioning

Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Copyright and license

Code released under the MIT license.