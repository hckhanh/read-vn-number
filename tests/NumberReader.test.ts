import { expect } from 'chai'
import NumberReader from '../src/NumberReader'

describe('NumberReader', function () {
  it('should throw error when read number: a.000', function () {
    const number: string = 'a000'
    expect(() => NumberReader.read(number)).to.throw(`Invalid number: "a"`)
  })

  it('should read number: 1.000', function () {
    const number: number = 1000
    expect(NumberReader.read(number)).to.equal('một nghìn')
  })

  it('should read number: 60.000', function () {
    const number: number = 60000
    expect(NumberReader.read(number)).to.equal('sáu mươi nghìn')
  })

  it('should read number: 60', function () {
    const number: number = 60
    expect(NumberReader.read(number)).to.equal('sáu mươi')
  })

  it('should read number: 600.000', function () {
    const number: number = 600000
    expect(NumberReader.read(number)).to.equal('sáu trăm nghìn')
  })

  it('should read number: 600.001', function () {
    const number: number = 600001
    expect(NumberReader.read(number)).to.equal(
      'sáu trăm nghìn không trăm lẻ một'
    )
  })

  it('should read number: 1.060.000', function () {
    const number: number = 1060000
    expect(NumberReader.read(number)).to.equal(
      'một triệu không trăm sáu mươi nghìn'
    )
  })

  it('should read number: 15.000.000', function () {
    const number: number = 15000000
    expect(NumberReader.read(number)).to.equal('mười lăm triệu')
  })

  it('should read number: 19.900.000', function () {
    const number: number = 19900000
    expect(NumberReader.read(number)).to.equal(
      'mười chín triệu chín trăm nghìn'
    )
  })

  it('should read number: 30.000.000', function () {
    const number: number = 30000000
    expect(NumberReader.read(number)).to.equal('ba mươi triệu')
  })

  it('should read number: 60.000.000', function () {
    const number: number = 60000000
    expect(NumberReader.read(number)).to.equal('sáu mươi triệu')
  })

  it('should read number: 100.000.000', function () {
    const number: number = 100000000
    expect(NumberReader.read(number)).to.equal('một trăm triệu')
  })

  it('should read number: 500.000.000', function () {
    const number: number = 500000000
    expect(NumberReader.read(number)).to.equal('năm trăm triệu')
  })

  it('should read number: 1.000.000.000', function () {
    const number: number = 1000000000
    expect(NumberReader.read(number)).to.equal('một tỷ')
  })

  it('should read number: 1.100.000.000', function () {
    const number: number = 1100000000
    expect(NumberReader.read(number)).to.equal('một tỷ một trăm triệu')
  })

  it('should read number: 2.000.000.000', function () {
    const number: number = 2000000000
    expect(NumberReader.read(number)).to.equal('hai tỷ')
  })

  it('should read number: 1.000.000.000.000', function () {
    const number: string = '1000000000000'
    expect(NumberReader.read(number)).to.equal('một nghìn tỷ')
  })

  it('should read number: 1.001.000.000.000', function () {
    const number: string = '1001000000000'
    expect(NumberReader.read(number)).to.equal('một nghìn không trăm lẻ một tỷ')
  })

  it('should read number: 1.001.500.000.000', function () {
    const number: string = '1001500000000'
    expect(NumberReader.read(number)).to.equal(
      'một nghìn không trăm lẻ một tỷ năm trăm triệu'
    )
  })

  it('should read number: 1.001.500.100.000', function () {
    const number: string = '1001500100000'
    expect(NumberReader.read(number)).to.equal(
      'một nghìn không trăm lẻ một tỷ năm trăm triệu một trăm nghìn'
    )
  })

  it('should read number: 1.001.500.100.001', function () {
    const number: string = '1001500100001'
    expect(NumberReader.read(number)).to.equal(
      'một nghìn không trăm lẻ một tỷ năm trăm triệu một trăm nghìn không trăm lẻ một'
    )
  })

  it('should read number: 1.000.001.000.000.000', function () {
    const number: string = '1000001000000000'
    expect(NumberReader.read(number)).to.equal('một triệu không trăm lẻ một tỷ')
  })

  it('should read number: 1.000.000.000.000.000.000', function () {
    const number: string = '1000000000000000000'
    expect(NumberReader.read(number)).to.equal('một tỷ tỷ')
  })
})
