
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
