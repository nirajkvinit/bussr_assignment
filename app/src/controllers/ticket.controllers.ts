import { Request, Response } from 'express'
import Ticket, { ITicket } from '../database/models/ticket.model'
import { validateTicketBookingDate, validateTicketInput } from '../helpers/util-helper'
import logger from '../lib/logger'
import { error, success } from '../middleware/response-handler'
// import Ticket, { ITicket } from '../database/models/ticket.model'

const fileIdentity = 'app::src::controllers::ticker.controllers::'

export const getOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}getOne:: `

    const ticketId = encodeURIComponent(req.params.id)
    try {
        const foundTicket = await Ticket.find({ _id: ticketId })

        if (foundTicket.length) {
            success(req, res, foundTicket[0])
        } else {
            logger.error(`${funcPath} error retrieving ticket for id ${ticketId}`)
            error(req, res, { message: `error retrieving ticket for id ${ticketId}` }, 404)
        }
    } catch (err) {
        logger.error(`${funcPath} error retrieving ticket for id ${ticketId}`)
        logger.error(err)
        error(req, res, { message: `error retrieving ticket for id ${ticketId}` })
    }
}

export const getAll = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}getAll:: `

    try {
        const foundTickets = await Ticket.find({})
        logger.info(`Found ${foundTickets.length} tickets`)
        success(req, res, foundTickets)
    } catch (error) {
        logger.error(`${funcPath} error retrieving tickets`)
        logger.error(error)
        error(req, res, { message: 'error retrieving tickets' })
    }
}

export const createOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}createOne:: `
    const { body } = req

    const { bookingDate, customerName, performanceTitle, performanceDateTime, ticketPrice } = body

    const validation = validateTicketInput(body)

    if (!validation.error) {
        try {
            const newTicket = await Ticket.create({
                bookingDate,
                customerName,
                performanceDateTime,
                performanceTitle,
                ticketPrice,
            })
            logger.info(`${funcPath} ticket creation successful! ${JSON.stringify(newTicket)}`)

            success(req, res, newTicket)
        } catch (err) {
            logger.error(`${funcPath} error creating ticket`)
            logger.error(err)
            error(req, res, err)
        }
    } else {
        logger.error(`${funcPath} validation error: ${JSON.stringify(validation)}`)

        error(req, res, { message: validation.error.details[0].message })
    }
}

export const updateOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}updateOne:: `
    const { body } = req
    const ticketId = encodeURIComponent(req.params.id)

    const { bookingDate } = body

    const validation = validateTicketBookingDate({ bookingDate, ticketId })

    if (!validation.error) {
        try {
            const updatedTicket = await Ticket.findById(ticketId).updateOne({}, { bookingDate })

            logger.info(`${funcPath} ticket updation successful! ${JSON.stringify(updatedTicket)}`)

            success(req, res, updatedTicket)
        } catch (err) {
            logger.error(`${funcPath} error updating ticket`)
            logger.error(err)
            error(req, res, err)
        }
    } else {
        logger.error(`${funcPath} validation error: ${JSON.stringify(validation)}`)

        error(req, res, { message: validation.error.details[0].message })
    }
}

export const deleteOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}deleteOne:: `

    const ticketId = encodeURIComponent(req.params.id)
    console.log(ticketId)

    if (ticketId) {
        try {
            const deletedTicket = await Ticket.findByIdAndDelete(ticketId)
            if (deletedTicket) {
                logger.info(`${funcPath} ticket deletion successful! ${JSON.stringify(deletedTicket)}`)

                success(req, res, { message: 'ticket deleted successfully!' })
            } else {
                logger.error(`${funcPath} ticketID is not available`)
                error(req, res, { message: 'ticketID is not available' }, 404)
            }
        } catch (err) {
            logger.error(`${funcPath} error updating ticket`)
            logger.error(err)
            error(req, res, err)
        }
    } else {
        logger.error(`${funcPath} ticketID is not available`)
        error(req, res, { message: 'ticketID is not available' })
    }
}
