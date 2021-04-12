import Joi from 'joi'
import { ITicket } from '../database/models/ticket.model'

export const validateTicketInput = (ticketInput: ITicket) => {
    // const { creationDate, customerName, performanceTitle, performanceTime, ticketPrice } = ticketInput

    const schema = Joi.object().keys({
        creationDate: Joi.date().required(),
        customerName: Joi.string().min(5).max(50).required(),
        performanceTitle: Joi.string().min(5).max(50).required(),
        performanceTime: Joi.date().required(),
        ticketPrice: Joi.number().positive().required(),
    })
    // .options({ abortEarly: false })

    return schema.validate(ticketInput)
}
