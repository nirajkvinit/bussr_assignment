import Joi from 'joi'
import { ITicket } from '../database/models/ticket.model'

export const validateTicketInput = (ticketInput: ITicket) => {
    const schema = Joi.object().keys({
        bookingDate: Joi.date().required(),
        customerName: Joi.string().min(5).max(50).required(),
        performanceTitle: Joi.string().min(5).max(50).required(),
        performanceDateTime: Joi.date().required(),
        ticketPrice: Joi.number().positive().required(),
    })

    return schema.validate(ticketInput)
}

export interface ITicketUpdate {
    bookingDate: Date
    ticketId: string
}

export const validateTicketBookingDate = (ticketInput: ITicketUpdate) => {
    const schema = Joi.object().keys({
        bookingDate: Joi.date().required(),
        ticketId: Joi.string().min(5).required(),
    })

    return schema.validate(ticketInput)
}
