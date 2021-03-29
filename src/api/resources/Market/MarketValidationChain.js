import StatusResponseEnum from './StatusResponseEnum'

class MarketValidationChain {
  constructor () {
    this.validateFail = false
  }

  checkMarketStatus (status) {
    if (status === 'CLOSED') this.validateFail = true
    return this
  }

  checkSizeValue (size, founds) {
    if (!founds) {
      this.validateFail = true
      return this
    }
    if ((size / founds) >= 0.10) this.validateFail = true
    return this
  }

  checkPrice (price) {
    if (price === 1000 || price === 1.01) this.validateFail = true
    return this
  }

  validate () {
    return this.validateFail ? StatusResponseEnum.REJECT : StatusResponseEnum.ACCEPT
  }
}

export default MarketValidationChain
