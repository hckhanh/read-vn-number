import { describe, expect, it } from 'vitest'
import Thousand from '../src/Thousand'

describe('Thousand', function () {
  it('should read number: 060.000', function () {
    const thousand = new Thousand('060')
    expect(thousand.read()).to.equal('không trăm sáu mươi nghìn')
  })

  it('should read number: 000.100', function () {
    const thousand = new Thousand('000')
    expect(thousand.read()).to.equal('')
  })
})
