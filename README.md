# nominal
[![Home][home-img]][home-url][![License][lic-img]][lic-url][![Downlod][down-img]][down-url][![Gitter][Gitter-img]][Gitter-url][![NPM][npm-img]][npm-url][![Build][travis-img]][travis-url][![Climate][climate-img]][climate-url][![Coverage][Coverage-img]][Coverage-url][![Inline docs][docs-img]][docs-url]
### **Series preferred values for resistors and capacitors**

## Usage

```js
var nominal = require('../nominal');

function example() {
 // Нет параметров
 console.log(nominal());     // ==> объект всех таблиц стандарта
 // ключ     - номер ряда,
 // значение - объект индексов и значений для этого ряда
 // {"3": {"1": 1, "2": 2.2, "3": 4.7},
 // ...................................................................
 //  "192": {........................................................}}
 // Только индекс
 console.log(nominal(-5));   // ==> объект всех рядов для индекса "5"
 // ключ     - номер ряда,
 // значение - номинал с индексом "5" для этого ряда, a для ряда "3" нет индекса "5"
 // {"6": 4.7, "12": 2.2, "24": 1.5, "48": 121, "96": 110, "192": 105}
 // Только значение
 console.log(nominal(5));    // ==> объект всех рядов для номинала "5", где:
 // ключ     - номер ряда,
 // значение - номинал меньше значения "5" для этого ряда
 // {"3": 4.7, "6": 4.7, "12": 4.7, "24": 4.7, "48": 4.87, "96": 4.99, "192": 4.99}
 // Индекс и номер ряда
 console.log(nominal(-6, 6));// ==> "6.8" Значение номинала с индексом "6" в ряду "6"
 console.log(nominal(6, 6)); // ==> "4.7" Значение номинала меньше     "6" в ряду "6"
}

example();
```
[home-img]: https://img.shields.io/badge/Home-Habrahabr.ru-blue.svg?style=flat-square
[home-url]:https://habrahabr.ru/post/277221/

[lic-img]: https://img.shields.io/badge/License-GPL-blue.svg?style=flat-square
[lic-url]: COPYRIGHT.md

[down-img]: https://img.shields.io/badge/GitHub-Latest-blue.svg?style=flat-square
[down-url]: https://github.com/xguest/nominal/archive/Latest.zip

[Gitter-img]: https://img.shields.io/badge/Chat-on_gitter-7ACA80.svg?style=flat-square
[Gitter-url]: https://gitter.im/xguest/Issues?utm_source=share-link

[npm-img]: https://img.shields.io/npm/v/nominal.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/nominal

[travis-img]: https://travis-ci.org/xguest/nominal.svg?style=flat-square
[travis-url]: https://travis-ci.org/xguest/nominal

[climate-img]: https://img.shields.io/badge/Climate-4.0-brightgreen.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/xguest/nominal

[Coverage-img]: https://img.shields.io/badge/Coverage-100%-brightgreen.svg?style=flat-square
[Coverage-url]: https://coveralls.io/github/xguest/nominal?branch=master

[docs-img]: https://img.shields.io/badge/Docs-100%-brightgreen.svg?style=flat-square
[docs-url]: http://inch-ci.org/github/xguest/nominal
