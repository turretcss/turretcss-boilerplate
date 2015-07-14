#Template

Basic template for front-end development with Turret, Less, Watch, jQuery, Browserify, Browserify Shim, Browser Sync, and Uglify.

##Quick start

There are two quick start ways to download Template:

- [Download the latest release](https://github.com/scottdejonge/template/archive/master.zip).
- Clone the repo: `git clone https://github.com/scottdejonge/template.git`.

##Usage

Once downloaded make sure to run `npm install` to install all npm dependancies.

##Dependancies

* [Turret](https://twitter.com/scottdejonge)
* [Less](https://www.npmjs.com/package/less)
* [Watch](https://www.npmjs.com/package/watch/)
* [jQuery](https://www.npmjs.com/package/jQuery)
* [Browserify](https://www.npmjs.com/package/browserify)
* [Browserify Shim](https://www.npmjs.com/package/browserify-shim)
* [Browser Sync](https://www.npmjs.com/package/browser-sync)
* [Uglify.js](https://www.npmjs.com/package/uglify-js)

##What's Included
Within the download you'll find the following directories and files.

```
template/
|   package.json
|   README.md
|   index.html
├── assets/
│   ├── fonts/
│   ├── glyphs/
│   ├── ico/
│   ├── img/
├── generated/
│   ├── scripts/
│   └── styles/
├── scripts/
│   ├── scripts.js
└── styles/
    ├── fonts.less
    ├── styles.less
    ├── theme.less
    ├── turret.less
    └── template
    	├── header.less
    	└── footer.less
```


##Scripts

###Sync

__Sync__ Browser-sync proxy for device testing

`watch:styles`

```
"sync": "browser-sync start --proxy \"DEV_URL\" --files \"generated/styles/*.css\""
```

###Watch

__Watch Styles__ Watch Less files in /styles/ directory

`watch:styles`

```
"watch:styles": "watch \"npm run build:styles\" \"styles\""
```

__Watch Scripts__ Watch js files in /scripts/ directory

`watch:scripts`

```
"watch:scripts": "watch \"npm run build:scripts\" \"scripts\""
```

__Watch__ Watch Styles and Scripts

`watch`

```
"watch": "npm run watch:styles & npm run watch:scripts & npm run sync"
```

###Build

__Build Styles__ Less compilation

`build:styles`

```
"build:styles": "lessc -s --include-path=\"node_modules/bigfishtv-turret\" styles/styles.less > generated/styles/styles.css"
```

__Build Scripts__ Browserify modules compilation

`build:scripts`

```
"build:scripts": "browserify scripts/scripts.js > generated/scripts/scripts.js"
```

__Build__ Build Styles and Scripts

`build`

```
"build": "npm run build:styles && npm run build:scripts"
```


###Deploy

__Deploy Styles__ Less compilation and minification

`deploy:styles`

```
"deploy:styles": "lessc -x --include-path=\"node_modules/bigfishtv-turret\" styles/styles.less > generated/styles/styles.css"
```

__Deploy Scripts__ Browserify modules compilation and Uglify minification

`deploy:scripts`

```
"deploy:scripts": "browserify scripts/scripts.js | uglifyjs -c > generated/scripts/scripts.js"
```

__Deploy__ Deploy Styles and Scripts

`deploy`

```
"deploy": "npm run deploy:styles && npm run deploy:scripts"
```

##Creators

__Scott de Jonge__

* Twitter: [@scottdejonge](https://twitter.com/scottdejonge)
* Github: [@scottdejonge](https://github.com/scottdejonge)

##Versioning

Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

##Copyright and license

Code released under the MIT license.