<big><h1 align="center">object-conceal</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/object-conceal">
    <img src="https://img.shields.io/npm/v/object-conceal.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r//object-conceal">
    <img src="https://img.shields.io/coveralls//object-conceal.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org//object-conceal">
    <img src="https://img.shields.io/travis//object-conceal.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/object-conceal">
    <img src="http://img.shields.io/npm/dm/object-conceal.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org//object-conceal.svg">
    <img src="https://david-dm.org//object-conceal.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com//object-conceal/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/object-conceal.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
object-conceal takes an object and returns a copy that has all of the string fields truncated. This is useful for when you want to log an object but it contains sensitive ids, e.g. database fields or secrets. Non string fields are left untouched. The default truncation is to 3 characters, which is normally enough to allow the identification of entities that are known to the developer or operations
</big></p>


## Install

```sh
npm i -D object-conceal
```

## Usage

```js
import objectConceal from "object-conceal"

objectConceal() // true
```

## License

MIT © [Ed Sykes](http://github.com/edsykes)

[npm-url]: https://npmjs.org/package/object-conceal
[npm-image]: https://img.shields.io/npm/v/object-conceal.svg?style=flat-square

[travis-url]: https://travis-ci.org//object-conceal
[travis-image]: https://img.shields.io/travis//object-conceal.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r//object-conceal
[coveralls-image]: https://img.shields.io/coveralls//object-conceal.svg?style=flat-square

[depstat-url]: https://david-dm.org//object-conceal
[depstat-image]: https://david-dm.org//object-conceal.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/object-conceal.svg?style=flat-square
