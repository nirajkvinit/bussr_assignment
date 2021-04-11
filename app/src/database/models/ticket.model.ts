import mongoose, { Schema, Document, SchemaType } from 'mongoose'

export interface IVenue extends Document {
    venueName: string
    street: string
    city: string
    postCode: string
}

export interface ITicket extends Document {
    creationDate: Date
    customerName: string
    performanceTitle: string
    performanceTime: Date
    ticketPrice: number
    venue?: IVenue
}

const TicketSchema: Schema = new Schema({
    creationDate: { type: Date, required: true },
    customerName: { type: String, required: true },
    performanceTitle: { type: String, required: true },
    performanceTime: { type: Date, required: true },
    ticketPrice: { type: Number, required: true },
    venue: {
        venueName: { type: String },
        street: { type: String },
        city: { type: String },
        postCode: { type: String },
    },
})

export default mongoose.model<ITicket>('Ticket', TicketSchema)
