import mongoose from 'mongoose'
import logger from '../lib/logger'

export default (dbConnString: string) => {
    const connect = () => {
        mongoose
            .connect(dbConnString, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                return logger.info(`Successfully connected to ${dbConnString}`)
            })
            .catch((error) => {
                logger.error('Error connecting to database: ', error)
                return process.exit(1)
            })
    }
    connect()

    mongoose.connection.on('disconnected', connect)
}
