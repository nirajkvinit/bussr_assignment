import { Request, Response } from 'express'
import logger from '../lib/logger'
// import Ticket, { ITicket } from '../database/models/ticket.model'

const fileIdentity = 'app::src::controllers::ticker.controllers::'

export const getOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}getOne:: `
}

export const getAll = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}getAll:: `
}

export const createOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}createOne:: `
}

export const updateOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}updateOne:: `
}

export const deleteOne = () => async (req: Request, res: Response) => {
    const funcPath = `${fileIdentity}deleteOne:: `
}
