/* eslint-disable no-undef */
import MarketValidationChain from '../src/api/resources/Market/MarketValidationChain'
import StatusResponseEnum from '../src/api/resources/Market/StatusResponseEnum'

describe('MarketValidationChain', () => {
  it('should set validationFail to true when marketStatus is CLOSED', () => {
    const check = new MarketValidationChain()
    check.checkMarketStatus('CLOSED')
    expect(check.validateFail).toBe(true)
  })

  it('should keep validationFail to false when marketStatus is OPEN', () => {
    const check = new MarketValidationChain()
    check.checkMarketStatus('OPEN')
    expect(check.validateFail).toBe(false)
  })

  it('should set validationFail to true when size value is equal to or greater than 10% of founds value', () => {
    const check = new MarketValidationChain()
    check.checkSizeValue(10, 15)
    expect(check.validateFail).toBe(true)
  })

  it('should keep validationFail to false when size value is smaller than 10% of founds value', () => {
    const check = new MarketValidationChain()
    check.checkSizeValue(10, 200)
    expect(check.validateFail).toBe(false)
  })

  it('should set validationFail to true when founds value is indivisible by zero', () => {
    const check = new MarketValidationChain()
    check.checkSizeValue(10, null)
    expect(check.validateFail).toBe(true)
  })

  it('should set validationFail to true when price value is 1.01', () => {
    const check = new MarketValidationChain()
    check.checkPrice(1.01)
    expect(check.validateFail).toBe(true)
  })

  it('should set validationFail to true when price value is 1000', () => {
    const check = new MarketValidationChain()
    check.checkPrice(1000)
    expect(check.validateFail).toBe(true)
  })

  it('should keep validationFail to false when price is different of 1.01 or 1000', () => {
    const check = new MarketValidationChain()
    check.checkPrice(1.02)
    expect(check.validateFail).toBe(false)
  })

  it(`should return ${StatusResponseEnum.ACCEPT} when value validationFail is false`, () => {
    const check = new MarketValidationChain()
    expect(check.validateFail).toBe(false)
    expect(check.validate()).toBe(StatusResponseEnum.ACCEPT)
  })

  it(`should return ${StatusResponseEnum.REJECT} when value validationFail is true`, () => {
    const check = new MarketValidationChain()
    check.checkPrice(1.01)
    expect(check.validateFail).toBe(true)
    expect(check.validate()).toBe(StatusResponseEnum.REJECT)
  })
})
