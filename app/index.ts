import app from './app'
import { port } from './config'
import logger from './lib/logger'

app.listen(port)
logger.info(`Server started. Listening on port ${port}`)
