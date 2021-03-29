import { Router } from 'express'

import MarketController from './MarketController'
import MarketRequestValidation from './MarketRequestValidation'

export default Router()
  .post('/', [MarketRequestValidation.postRules()], MarketController.create)
