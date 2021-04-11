import Express from 'express'
import { RSA_NO_PADDING } from 'node:constants'
import ErrorHelper from '../helpers/error-helper'
import logger from '../lib/logger'

const fileIdentity = 'middleware::response-handler'

/**
 * send success reponse
 * @param req request object
 * @param res response object
 * @param data data object to be sent
 * @param status http status code to be sent
 */
export const success = (req: Express.Request, res: Express.Response, data: any, status: number = 200) => {
    return res.status(status).json({ data })
}

/**
 * send error response
 * @param req request object
 * @param res response object
 * @param err error object to be sent
 * @param status status code to be sent
 */
export const error = (req: Express.Request, res: Express.Response, err: any, status: number = 500) => {
    const funcPath = `${fileIdentity}::error:: `
    if (err instanceof ErrorHelper) {
        const { message, httpStatusCode } = err
        const errorResponse = {
            data: null,
            message,
        }
        logger.error(`${funcPath} Request responded with error status:${httpStatusCode} | message:${message}`)
        return res.status(httpStatusCode).json(errorResponse)
    }
    logger.error(`${funcPath} Request responded with error status ${status}`)
    return res.status(status).json({ message: err.message, data: null })
}
