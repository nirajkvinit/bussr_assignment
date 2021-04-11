import express from 'express'
import helmet from 'helmet'

import logger from './lib/logger'
import { notFound, unexpected } from './middleware/error-handler'
import connect from './database/connect'
import routes from './routes'
import { mongoURI } from './config'

process.on('unhandledRejection', (reason: Error, promise) => {
    logger.error(`Unhandled rejection at ${reason.stack || reason} for promise ${promise}`)
})

const app = express()

app.use(helmet())
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    }),
)

connect(mongoURI)

routes(app)

app.use(notFound)
app.use(unexpected)

export default app
