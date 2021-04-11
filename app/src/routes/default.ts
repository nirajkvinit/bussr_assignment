import { Application } from 'express'
import { get } from '../controllers/status'
import wrap from '../middleware/wrap'

export default (app: Application) => {
    app.get('/', wrap(get()))
}
