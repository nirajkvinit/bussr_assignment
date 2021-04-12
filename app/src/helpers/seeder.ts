import faker from 'faker'
import { mongoURI } from '../config'
import connect from '../database/connect'
import Ticket from '../database/models/ticket.model'
import logger from '../lib/logger'

export const seed = async (count: number = 100) => {
    await connect(mongoURI)

    const performanceTitleArr = []
    for (let index = 0; index < 20; index++) {
        performanceTitleArr.push({
            title: faker.lorem.words(4),
            eventDateTime: faker.date.between(faker.date.past(1), faker.date.future(2)),
            ticketPrice: Math.floor(parseFloat(faker.finance.amount(100, 1000))),
        })
    }

    for (let index = 0; index < count; index++) {
        const { title: performanceTitle, eventDateTime: performanceDateTime, ticketPrice } = performanceTitleArr[
            faker.datatype.number({ min: 0, max: 19 })
        ]

        const pastDateTime = faker.date.past(1, performanceDateTime)
        const randomBookingDate = randomTime(pastDateTime, new Date())

        try {
            await Ticket.create({
                bookingDate: randomBookingDate,
                customerName: faker.name.findName(),
                performanceDateTime,
                performanceTitle,
                ticketPrice,
            })
            logger.info(`${index} - ticket creation successful!`)

            // success(req, res, newTicket)
        } catch (error) {
            logger.error(` error creating ticket`)
            logger.error(error)
        }
    }
    process.exit()
}

const randomTime = (start: Date, end: Date) => {
    const diff = end.getTime() - start.getTime()
    const new_diff = diff * Math.random()
    const date = new Date(start.getTime() + new_diff)
    return date
}

seed()
