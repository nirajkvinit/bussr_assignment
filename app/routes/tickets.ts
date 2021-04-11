import Express from 'express'
import wrap from '../middleware/auth-wrap'

export default (app: Express.Application) => {
    const basePath = '/api/v1/tickets'
    // get one ticket
    app.get(
        `${basePath}/:id`,
        wrap(() => {}),
    )

    // get all tickets
    app.get(
        `${basePath}`,
        wrap(() => {}),
    )

    // book a ticket
    app.post(
        `${basePath}`,
        wrap(() => {}),
    )

    // update a ticket
    app.put(
        `${basePath}`,
        wrap(() => {}),
    )

    // delete a ticket
    app.delete(
        `${basePath}/:id`,
        wrap(() => {}),
    )
}
