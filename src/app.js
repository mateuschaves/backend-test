import dotenv from 'dotenv'

import cors from 'cors'
import express from 'express'
import 'express-async-errors'

dotenv.config()

class App {
  constructor () {
    this.server = express()
    this.middlewares()
  }

  middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes (routes) {
    routes(this.server)
    return this
  }

  listen (port) {
    this.server.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  }
}

export default new App()
