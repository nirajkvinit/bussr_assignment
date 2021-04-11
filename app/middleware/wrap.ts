import Express from 'express'

export default (fn: Express.Handler) => (req: Express.Request, res: Express.Response, next: Express.NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)
