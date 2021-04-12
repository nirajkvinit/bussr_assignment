import { mongoURI } from '../config'
import connect from '../database/connect'
import Ticket from '../database/models/ticket.model'
import logger from '../lib/logger'

const cleanUpDB = async () => {
    try {
        await connect(mongoURI)
        await Ticket.collection.drop()
        logger.info('Collection cleaned successfully')
    } catch (error) {
        logger.error(error)
    }

    process.exit()
}

cleanUpDB()
