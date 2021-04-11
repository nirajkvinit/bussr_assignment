import { Application } from 'express'
import ticketRoutes from './tickets'
import defaultRoutes from './default'

export default (app: Application) => {
    defaultRoutes(app)
    ticketRoutes(app)
}
