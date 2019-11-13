# read-vn-number

Read Vietnamese number like a Vietnamese

This is a helper that convert a number to a string like the way a Vietnamese read it.

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/hckhanh/read-vn-number.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hckhanh/read-vn-number/context:javascript)
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

if you are working with **TypeScript**:

```typescript
import NumberReader from 'read-vn-number/src/NumberReader'

NumberReader.read('1000000000')
// output: một tỷ
```

## License

[MIT](LICENSE) © Khanh Hoang
