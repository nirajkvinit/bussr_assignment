import express from 'express'

import logger from './lib/logger'
import { notFound, unexpected } from './middleware/error-handler'
import routes from './routes'

process.on('unhandledRejection', (reason: Error, promise) => {
    logger.error(`Unhandled rejection at ${reason.stack || reason} for promise ${promise}`)
})

const app = express()
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    }),
)

routes(app)

app.use(notFound)
app.use(unexpected)

export default app
