# read-vn-number

This is a helper that convert a number to a string like the way a real Vietnamese read it.

[![Unit Tests](https://github.com/hckhanh/read-vn-number/workflows/Unit%20Tests/badge.svg)](https://github.com/hckhanh/read-vn-number/actions?query=workflow%3A%22Unit+Tests%22)

## Current Status

| Registry |                                                                                                    Status                                                                                                     |        Tooling        |                                                                                                  Tests                                                                                                   |
| :------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   NPM    | [![Publish NPM Package](https://github.com/hckhanh/read-vn-number/workflows/Publish%20NPM%20Package/badge.svg)](https://github.com/hckhanh/read-vn-number/actions?query=workflow%3A%22Publish+GPR+Package%22) |         LGTM          | [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/hckhanh/read-vn-number.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hckhanh/read-vn-number/context:javascript) |
|   GPR    | [![Publish GPR Package](https://github.com/hckhanh/read-vn-number/workflows/Publish%20GPR%20Package/badge.svg)](https://github.com/hckhanh/read-vn-number/actions?query=workflow%3A%22Publish+NPM+Package%22) |     Test Coverage     |                    [![Test Coverage](https://api.codeclimate.com/v1/badges/c37ac7256141c64434bd/test_coverage)](https://codeclimate.com/github/hckhanh/read-vn-number/test_coverage)                     |
|          |                                                                                                                                                                                                               |    Maintainability    |                 [![Maintainability](https://api.codeclimate.com/v1/badges/c37ac7256141c64434bd/maintainability)](https://codeclimate.com/github/hckhanh/read-vn-number/maintainability)                  |
|          |                                                                                                                                                                                                               | Known Vulnerabilities |       [![Known Vulnerabilities](https://snyk.io/test/github/hckhanh/read-vn-number/badge.svg?targetFile=package.json)](https://snyk.io/test/github/hckhanh/read-vn-number?targetFile=package.json)       |

## Installation

```bash
# npm
npm i read-vn-number

# yarn
yarn add read-vn-number
```

### GitHub Package Registry (GPR)

https://github.com/hckhanh/read-vn-number/packages

## Usage

Import and use in **ES6**+:

```js
import readNumber from 'read-vn-number'

readNumber('19990000') // or readNumber(19990000)
// output: mười chín triệu chín trăm chín mươi nghìn
```

or **commonjs** way:

```js
const readNumber = require('read-vn-number')

readNumber('100000000')
// output: một trăm triệu
```

If you are working with **TypeScript**, you can directly import from the source:

```typescript
import readNumber from 'read-vn-number/src'

readNumber('1000000000')
// output: một tỷ
```

## License

[MIT](LICENSE) © Khanh Hoang
