import mongoose, { Schema, Document } from 'mongoose'

export interface ITicket extends Document {
    creationDate: Date
    customerName: string
    performanceTitle: string
    performanceTime: Date
    ticketPrice: number
}

const TicketSchema: Schema = new Schema({
    creationDate: { type: Date, required: true },
    customerName: { type: String, required: true },
    performanceTitle: { type: String, required: true },
    performanceTime: { type: Date, required: true },
    ticketPrice: { type: Number, required: true },
})

export default mongoose.model<ITicket>('Ticket', TicketSchema)
