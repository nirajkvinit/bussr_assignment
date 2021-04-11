import { Application } from 'express'
import { createOne, getAll, getOne, updateOne, deleteOne } from '../controllers/ticket.controllers'
import wrap from '../middleware/auth-wrap'

export default (app: Application) => {
    const basePath = '/api/v1/tickets'
    // get one ticket
    app.get(`${basePath}/:id`, wrap(getOne()))

    // get all tickets
    app.get(`${basePath}`, wrap(getAll()))

    // book a ticket
    app.post(`${basePath}`, wrap(createOne()))

    // update a ticket
    app.put(`${basePath}`, wrap(updateOne()))

    // delete a ticket
    app.delete(`${basePath}/:id`, wrap(deleteOne()))
}
