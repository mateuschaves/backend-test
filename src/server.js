import app from './app'
import routes from './api/routes'

app
  .routes(routes)
  .listen(process.env.PORT || 4000)
