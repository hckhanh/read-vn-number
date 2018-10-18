# read-vn-number

This is a helper that convert a number to string like the way a Vietnamese read it

## Installation

```bash
npm i read-vn-number
```

## Usage

Import and use in **ES6**+:

```ecmascript 6
import ReadVnNumber from 'read-vn-number'

ReadVnNumber.read('19990000')
// output: mười chín triệu chín trăm chín mươi nghìn 
```

or **commonjs** way:

```ecma script level 4
const ReadVnNumber = require('read-vn-number')

ReadVnNumber.read('100000000')
// output: một trăm triệu
```

## License

MIT © Khanh Hoang
