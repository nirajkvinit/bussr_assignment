import Express from 'express'
import { get } from '../controllers/status'
import wrap from '../middleware/wrap'

export default (app: Express.Application) => {
    app.get('/', wrap(get()))
}
