import { expect } from 'chai'
import Billion from '../../Billion'

describe('Billion', function() {
  it('should read first number: 2.000.000.000', function() {
    const billion = new Billion('2')
    expect(billion.read(true)).to.equal('hai tỉ')
  })

  it('should read number: 1.002.000.000.000', function() {
    const billion = new Billion('002')
    expect(billion.read()).to.equal('không trăm lẻ hai tỉ')
  })

  it('should read number: 100.000.100.000', function() {
    const billion = new Billion('100')
    expect(billion.read(true)).to.equal('một trăm tỉ')
  })

  it('should read number: 1.000.000.000.000.000', function() {
    const billion = new Billion('000')
    expect(billion.read()).to.equal('tỉ')
  })
})
