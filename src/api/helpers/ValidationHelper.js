import { validationResult } from 'express-validator'

class Validation {
  // eslint-disable-next-line class-methods-use-this
  hasErrors (request) {
    return new Promise((resolve, reject) => {
      const errors = validationResult(request)
      if (!errors.isEmpty()) {
        reject(errors.array())
      } else {
        resolve()
      }
    })
  }
}

export default new Validation()
