import Express from 'express'
import ticketRoutes from './tickets'
import defaultRoutes from './default'

export default (app: Express.Application) => {
    defaultRoutes(app)
    ticketRoutes(app)
}
