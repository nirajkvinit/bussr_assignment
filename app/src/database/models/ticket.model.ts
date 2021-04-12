import mongoose, { Schema, Document } from 'mongoose'

export interface ITicket extends Document {
    bookingDate: Date
    customerName: string
    performanceTitle: string
    performanceDateTime: Date
    ticketPrice: number
}

const TicketSchema: Schema = new Schema({
    bookingDate: { type: Date, required: true },
    customerName: { type: String, required: true },
    performanceTitle: { type: String, required: true },
    performanceDateTime: { type: Date, required: true },
    ticketPrice: { type: Number, required: true },
})

export default mongoose.model<ITicket>('Ticket', TicketSchema)
