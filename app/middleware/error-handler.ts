import Express from 'express'
import logger from '../lib/logger'

/**
 * send 404 error response
 * @param req request object
 * @param res response object
 */
export const notFound = (req: Express.Request, res: Express.Response) => {
    res.status(404).send({ error: 'requested url not found' })
}

/**
 * send error response
 * @param err error object
 * @param req request object
 * @param res response object
 * @param next next function
 */
export const unexpected: Express.ErrorRequestHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }

    const { status = 500, message = err } = err

    if (status === 500) {
        logger.error('middleware::error-handler::unexpected::')
        logger.error(err)
    }

    return res.status(status).send({ error: message })
}
