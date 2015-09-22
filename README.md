<big><h1 align="center">concealotron</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/concealotron">
    <img src="https://img.shields.io/npm/v/concealotron.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/1self/concealotron">
    <img src="https://img.shields.io/coveralls/1self/concealotron.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/1self/concealotron">
    <img src="https://img.shields.io/travis/1self/concealotron.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/concealotron">
    <img src="http://img.shields.io/npm/dm/concealotron.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/1self/concealotron.svg">
    <img src="https://david-dm.org/1self/concealotron.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com//concealotron/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/concealotron.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
concealotron takes an object and returns a copy that has all of the string fields truncated. This is useful for when you want to log an object but it contains sensitive ids, e.g. database fields or secrets. Non string fields are left untouched. The default truncation is to 3 characters, which is normally enough to allow the identification of entities that are known to the developer or operations
</big></p>


## Install

```sh
npm i -D concealotron
```

## Usage

```js
import objectConceal from "concealotron"

objectConceal() // true
```

## License

MIT © [Ed Sykes](http://github.com/edsykes)

[npm-url]: https://npmjs.org/package/concealotron
[npm-image]: https://img.shields.io/npm/v/concealotron.svg?style=flat-square

[travis-url]: https://travis-ci.org//concealotron
[travis-image]: https://img.shields.io/travis//concealotron.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r//concealotron
[coveralls-image]: https://img.shields.io/coveralls//concealotron.svg?style=flat-square

[depstat-url]: https://david-dm.org//concealotron
[depstat-image]: https://david-dm.org//concealotron.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/concealotron.svg?style=flat-square
