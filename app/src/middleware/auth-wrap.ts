import Express from 'express'
import { authToken } from '../config'
import logger from '../lib/logger'

const fileIdentity = 'app::src::middleware::auth-wrap'

export default (fn: Express.Handler) => (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const funcPath = `${fileIdentity}::default:: `
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token || token !== authToken) {
        logger.error(`${funcPath} Authorization token is invalid`)
        Promise.reject({ message: 'Authorization token is invalid', status: 403 }).catch(next)
    } else {
        Promise.resolve(fn(req, res, next))
    }
}
