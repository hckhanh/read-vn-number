import { expect } from 'chai'
import readNumber from '../src'

describe('index', function () {
  it('should read number 2.000.000.000 in string', function () {
    expect(readNumber('2000000000')).to.equal('hai tỷ')
  })

  it('should read number 2.000.000.000 in number', function () {
    expect(readNumber(2000000000)).to.equal('hai tỷ')
  })
})
