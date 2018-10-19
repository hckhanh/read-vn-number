# read-vn-number

This is a helper that convert a number to string like the way a Vietnamese read it.
This library requires **Node.js 6.x** and above.

[![Build Status](https://travis-ci.org/hckhanh/read-vn-number.svg?branch=master)](https://travis-ci.org/hckhanh/read-vn-number)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c37ac7256141c64434bd/test_coverage)](https://codeclimate.com/github/hckhanh/read-vn-number/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/c37ac7256141c64434bd/maintainability)](https://codeclimate.com/github/hckhanh/read-vn-number/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/hckhanh/read-vn-number/badge.svg?targetFile=package.json)](https://snyk.io/test/github/hckhanh/read-vn-number?targetFile=package.json)

## Installation

```bash
# npm
npm i read-vn-number

# yarn
yarn add read-vn-number
```

## Usage

Import and use in **ES6**+:

```js
import NumberReader from 'read-vn-number'

NumberReader.read('19990000')
// output: mười chín triệu chín trăm chín mươi nghìn 
```

or **commonjs** way:

```js
const NumberReader = require('read-vn-number')

NumberReader.read('100000000')
// output: một trăm triệu
```

## License

[MIT](LICENSE) © Khanh Hoang
