# read-vn-number

This is a helper that convert a number to a string like the way a real Vietnamese read it.

> [!WARNING]
> This package is no longer maintained, please migrate to the new package: https://jsr.io/@hckhanh/vn-number/doc/~/readVnNumber

[![Unit Tests](https://github.com/hckhanh/read-vn-number/workflows/Unit%20Tests/badge.svg)](https://github.com/hckhanh/read-vn-number/actions?query=workflow%3A%22Unit+Tests%22)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/hckhanh/read-vn-number.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hckhanh/read-vn-number/context:javascript)
[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6Imhja2hhbmgiLCJyZXBvMSI6InJlYWQtdm4tbnVtYmVyIiwiaW5jbHVkZUxpbnQiOmZhbHNlLCJhdXRob3JJZCI6Mjg0MzQsImlhdCI6MTYxNzQ0MDEzOX0.gb14XUbeflqJ-estx1m5wbs5kiU13f5oFuunvRPIJSI)](https://www.deepcode.ai/app/gh/hckhanh/read-vn-number/_/dashboard?utm_content=gh%2Fhckhanh%2Fread-vn-number)
[![Known Vulnerabilities](https://snyk.io/test/github/hckhanh/read-vn-number/badge.svg?targetFile=package.json)](https://snyk.io/test/github/hckhanh/read-vn-number?targetFile=package.json)
[![Publish NPM Package](https://github.com/hckhanh/read-vn-number/workflows/Publish%20NPM%20Package/badge.svg)](https://github.com/hckhanh/read-vn-number/actions?query=workflow%3A%22Publish+GPR+Package%22)
[![Publish GPR Package](https://github.com/hckhanh/read-vn-number/workflows/Publish%20GPR%20Package/badge.svg)](https://github.com/hckhanh/read-vn-number/actions?query=workflow%3A%22Publish+NPM+Package%22)

## Installation

```bash
# npm
npm i read-vn-number

# yarn
yarn add read-vn-number

# pnpm
yarn add read-vn-number

# jsr
npx jsr add @hckhanh/read-vn-number
yarn dlx jsr add @hckhanh/read-vn-number
pnpm dlx jsr add @hckhanh/read-vn-number
```

### GitHub Package Registry (GPR)

https://github.com/hckhanh/read-vn-number/packages

## Usage

Import and use in **ES6**+:

```js
import readNumber from 'read-vn-number'
// import readNumber from '@hckhanh/read-vn-number' // (if you are using jsr)

readNumber('19990000') // or readNumber(19990000)
// output: mười chín triệu chín trăm chín mươi nghìn
```

or **commonjs** way:

```js
const readNumber = require('read-vn-number')

readNumber('100000000')
// output: một trăm triệu
```

## License

[MIT](LICENSE) © Khanh Hoang
