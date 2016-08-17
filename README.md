# yelp-locales

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Infers the best Yelp URL for a given locale.

### Usage
Install the library with `npm install yelp-locales`

```javascript
var YelpLocales = require('yelp-locales').YelpLocales;

YelpLocales.bestDomainFor('en_US'); //-> 'www.yelp.com'
YelpLocales.bestDomainFor("de_DE"); //-> 'www.yelp.de'

YelpLocales.bestPageUrlFor({locale: 'en_US', id:'some-business'}); //-> 'https://www.yelp.com/biz/some-business'
```

[downloads-image]: https://img.shields.io/npm/dm/yelp-locales.svg

[npm-url]: https://npmjs.org/package/yelp-locales
[npm-image]: https://img.shields.io/npm/v/yelp-locales.svg
