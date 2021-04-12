import { Request, Response } from 'express'
import Ticket, { ITicket } from '../database/models/ticket.model'
import { validateTicketInput } from '../helpers/util-helper'
import logger from '../lib/logger'
import { error, success } from '../middleware/response-handler'
// import Ticket, { ITicket } from '../database/models/ticket.model'

const fileIdentity = 'app::src::controllers::ticker.controllers::'

export const getOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}getOne:: `
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
}

export const deleteOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}deleteOne:: `
}
