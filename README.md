# require-plugins

[![License][mit-badge]][mit-url]
[![NPM version](https://badge.fury.io/js/require-plugins.svg)](http://badge.fury.io/js/require-plugins)
[![Dependency Status](https://img.shields.io/gemnasium/hobbyquakerrequire-plugins.svg?maxAge=2592000)](https://gemnasium.com/github.com/hobbyquaker/require-plugins)

> This module loads modules for a "pluggable" node project

# Usage

```npm install require-plugins```

The plugins have to be named as the main project with a dash as separator. 
Example Structure:
```
project
    |- node_modules
        |- project-plugin1
        |- project-plugin2
```

require-plugins will then require all plugins starting with ```project-``` and calls their constructor with the arguments
you supplied.

```Javascript
var plugins = require('require-plugins')(arg1, arg2, ...);
``` 

The variable plugins will afterwards contain the return values of the individual plugins constructors:
```Javascript
{
  'project-plugin1': require('project-plugin1')(arg1, arg2, ...),
  'project-plugin2': require('project-plugin2')(arg1, arg2, ...)
}
```

Note: if you don't supply any arguments to the require-plugins constructor plugins are required without calling a constructor.

So 
```Javascript
var plugins = require('require-plugins')();
``` 
will resolve to
```Javascript
{
  'project-plugin1': require('project-plugin1'),
  'project-plugin2': require('project-plugin2')
}
```

# License

MIT (c) 2016 [Sebastian Raff](https://github.com/hobbyquaker)

[mit-badge]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat
[mit-url]: LICENSE

