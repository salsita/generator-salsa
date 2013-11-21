# AngularJS salsa <a href='https://github.com/salsita'><img align='right' title='Salsita' src='https://www.google.com/a/cpanel/salsitasoft.com/images/logo.gif?alpha=1' _src='https://1.gravatar.com/avatar/d413290a5fe1385efcf5a344d4a0b588?s=50' /></a>

> Mixes a tasteful AngularJS salsa for web/mobile apps and browser extensions using JS/Coffee, Jade/HTML5, Node.js, Express and MongoDB.

<a href='https://npmjs.org/package/generator-salsa'><img align='right' alt='npm' title='npm info' src='https://nodei.co/npm/generator-salsa.png?compact=true' /></a>&nbsp;[![build](https://secure.travis-ci.org/salsita/generator-salsa.png?branch=master)](https://travis-ci.org/salsita/generator-salsa) [![dependencies](https://david-dm.org/salsita/generator-salsa.png)](https://david-dm.org/salsita/generator-salsa) [![dev-dependencies](https://david-dm.org/salsita/generator-salsa/dev-status.png)](https://david-dm.org/salsita/generator-salsa#info=devDependencies)


## Features (coming soon)

Salsa type:
- Single-page web/mobile applications based on [AngularJS](http://angularjs.org), [Grunt](http://gruntjs.com) and [Bower](http://bower.io),
- RESTful web/mobile applications with backend based on [MEAN stack](http://mean.io):
  + client:
    [AngularJS](http://angularjs.org),
    [RestAngular](https://github.com/mgonto/restangular),
    [UI-Bootstrap](http://angular-ui.github.io/bootstrap)/[Twitter Bootstrap](http://getbootstrap.com),
  + server:
    [Node.js](http://nodejs.org),
    [Express](http://expressjs.com),
    [Passport](http://passportjs.org),
    [MonGoose](http://mongoosejs.com),
    [mongoDB](http://mongodb.org),
- [Google Chrome AngularJS extensions](https://github.com/salsita/chrome-angular-skeleton).

Available spices:
- [CoffeeScript](http://coffeescript.org)/[CS2](https://github.com/michaelficarra/CoffeeScriptRedux)/[ECMAScript 3](http://en.wikipedia.org/wiki/ECMAScript#Version_correspondence)/[ES5-shim](https://github.com/kriskowal/es5-shim)/[ES5](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript.2C_5th_Edition)/[ES6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29)/[Traceur](https://github.com/google/traceur-compiler),
- [Jade](http://jade-lang.com)/[HTML](http://www.w3.org/html),
  [LESS](http://lesscss.org),
  [UI-Bootstrap](http://angular-ui.github.io/bootstrap)/[Twitter Bootstrap](http://getbootstrap.com),
  [UI-Router](https://github.com/angular-ui/ui-router),
- [Karma](http://karma-runner.github.io),
  [Jasmine](http://pivotal.github.io/jasmine)/[Mocha](http://visionmedia.github.io/mocha)+[Chai](http://chaijs.com)+[as-promised](https://github.com/domenic/chai-as-promised)+[Sinon](http://sinonjs.org),
  [Istanbul](https://github.com/gotwarlost/istanbul),
- [Browserify](http://browserify.org),
  [ngmin](https://github.com/btford/ngmin).

Inspired by [AngularJS generator](https://github.com/yeoman/generator-angular), [ngBoilerplate](http://joshdmiller.github.io/ng-boilerplate), and [MEAN stack generator](https://github.com/wlepinski/generator-meanstack). Served by [Yeoman](http://yeoman.io).


## Getting Started

Install `yeoman` and `generator-salsa`:
  ```
  npm install -g yo generator-salsa
  ```

Make a new directory, and `cd` into it:
  ```
  mkdir my-new-project && cd $_
  ```

Run `yo salsa`, optionally passing any options, and/or an app name:
  ```
  yo salsa [options] [app-name]
  ```


## Usage


### Options (coming soon)

```shell
--spa     Generate a single page Angular application.
--mean    Generate a browser/server Mongo+Angular+Express+Node application.
--chrome  Generate a Google Chrome Angular extension.

--coffee  Compile CoffeeScript.
--coffee2 Compile CoffeeScript 2 (beta).
--es3     Use ECMA Script 3 (legacy).
--es5shim Add shim to emulate ECMA Script 5 methods on ES3.
          May be combined with --coffee, or --coffee2.
--es5     Use ECMA Script 5 (IE9+, FF4+, Sf5.1+, Ch7+, Op12+).
--es6     Use ECMA Script 6 (upcoming).
--es6to5  Compile ES6 code to ES5 using Traceur (experimental).

--jade    Compile Jade to HTML.
--html    Use HTML.

--browserify
          Concatenate scripts with Browserify (--no-concat to disable).
--(no-)concat
          Concatenate scripts with Grunt concat task.
--(no-)minsafe
          Prepare scripts for safe minification with ngmin.
--(no-)release
          Bump versions and generate changelog with Grunt release task.

--(no-)ui-router
          Use UI Router to handle client-side routing.

--(no-)demo
          Create demo application files (`yo salsa:demo`).

--quiet   Do not prompt for options, use passed ones and defaults.
```

Default options:
```shell
--spa --coffee --jade --browserify --ui-router --minsafe --release
```


## Contributing

Welcome to the project. Choose a way that suits you. You'll need a [GitHub account](https://github.com/signup/free).

### Submit a bug, or feature request

* Search [existing issues](https://github.com/salsita/generator-salsa/issues) to avoid duplicities.
* [Submit an issue](https://github.com/salsita/generator-salsa/issues/new) with label `bug`, or `enhancement`.
* For a bug, include any relevant information, e.g. task output, installed OS/Node.js/Grunt/generator-salsa versions, and steps to reproduce.

### Submit a pull request

* [Fork the repository](https://github.com/salsita/generator-salsa/fork) ([help](https://help.github.com/articles/fork-a-repo)) and checkout new branch with `<type>-` prefix in name, where type may be feature, fix, docs, or chore.
* [Use](https://github.com/salsita/generator-salsa/blob/master/.jshintrc) the [popular JavaScript style convention](http://sideeffect.kr/popularconvention#javascript) and [winning JavaScript style](http://seravo.fi/2013/javascript-the-winning-style) with exception of 100 characters per line. In short, use 2 spaces indent, camelCase names, trailing comma, single quotes, semicolons, sparse spacing, and no trailing whitespace.
* For bugfix, write a test that exposes the bug and fails without the fix. Submit the test alongside.
* For a new feature, add tests that cover the feature.
* Lint and test your code with `grunt`, or `grunt watch` to watch sources and run tests on any change.
* Use commit messages that follow [Karma/Angular commit message convention](https://github.com/karma-runner/karma/blob/master/docs/dev/04-git-commit-msg.md) ([docs](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#)). In short, use `<type>(<scope>): <subject>` header in imperative present tense, message body describing motivation/differences, and footer referencing related issues and breaking changes.
* [Create a pull request](https://github.com/salsita/generator-salsa/compare) to [generator-salsa](https://github.com/salsita/generator-salsa) [master](https://github.com/salsita/generator-salsa/branches) branch ([help](https://help.github.com/articles/creating-a-pull-request)).


## Roadmap

- **Base:**
  + Add the yeoman generator option parser and .salsarc
  + Add bump/npm/changelog/release tasks
  + Add reliable concurrent(watch-notest, karma:watch)
  + Add concat/minify/sourcemaps/filerev/userev

- **Demo application and tests:**
  + Add demo application
  + Add Karma tests
  + Add Protractor tests
  + Add best practices and componentization guide

- **Spices:**
  + Add Browserify support and demo
  + Add UI-Router support and demo
  + Add UI-Bootstrap support and demo
  + Add CoffeeScript2 beta support

- **Subgenerators:**
  + Add subgenerator for feature,
    including route, controller and template
  + Add subgenerator for feature/common filter
  + Add subgenerator for feature/common service
  + Add subgenerator for feature/common directive

- **Google Chrome extensions:**
  + Add Google Chrome extension support
  + Extend demo application to Google Chrome extension

- **ECMAScript 5/6 targets:**
  + Add ES5-shim support
  + Add ES5 support
  + Add ES6 Harmony support
  + Add Traceur (ES6 draft -> ES5 compiler) support


<a name="changelog"></a>
## Changelog

<a name="v0.0.1"></a>
### v0.0.1 (2013-11-21)


#### Features

* **generator:** create basic MEAN stack generator ([1290e5d7](https://github.com/salsita/generator-salsa/commit/1290e5d7c18aea46621c915929e1e32d18aabb26))



## License

Copyright 2013 [Salsita Software](http://salsitasoft.com). Licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
