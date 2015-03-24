# F[嗶][嗶]k JSON

[![fbbk-json](http://img.shields.io/npm/v/fbbk-json.svg)](https://www.npmjs.org/package/fbbk-json) [![TravisCI](https://img.shields.io/travis/XadillaX/fbibik-json/master.svg)](https://travis-ci.org/xadillax/fbibik-json) [![Coveralls](https://img.shields.io/coveralls/XadillaX/fbibik-json/master.svg)](https://coveralls.io/r/XadillaX/fbibik-json)

Parse JSON-Object string (not normalized JSON string) into JSON object.

## Installation

```sh
$ npm install fbbk-json --save
```

or

```sh
$ bower install fbbk-json --save
```

## Usage

This package has only one function:

```javascript
var fJSON = require("fbbk-json");
fJSON.parse(A_JSON_STRING);
```

### BUT

This package support the JSON string that written down like a JSON object in javascript.

For example:

```
'{"foo": "bar","baz": true}'    <-- both JSON and fJSON are supported
'{foo: "bar",baz: true}'        <-- only fJSON supported! ٩(๑•̀ω•́๑)۶
```

So you can do that:

```javascript
var json1 = '{"foo": "bar","baz": true}';
var json2 = '{foo: \'bar\',baz: true,c:[]}';

JSON.parse(json1);              ///< { foo: 'bar', baz: true }
JSON.parse(json2);              ///< SyntaxError: Unexpected token f
fJSON.parse(json1);             ///< { foo: 'bar', baz: true }
fJSON.parse(json2);             ///< { foo: 'bar', baz: true, c: [] }   ＼(●´ϖ`●)／
```

## Contribute

You're welcome to make pull requests!

「雖然我覺得不怎麼可能有人會關注我」
