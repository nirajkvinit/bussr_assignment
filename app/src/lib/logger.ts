import { format, createLogger, transports } from 'winston'
import appRoot from 'app-root-path'
import { environment, appName, logLevel } from '../config'

const logger = createLogger({
    level: logLevel,
    format: format.combine(format.timestamp(), format.json()),
    defaultMeta: { service: appName },
    transports: [
        new transports.File({ filename: `${appRoot}/logs/error.log`, level: 'error' }),
        new transports.File({ filename: `${appRoot}/logs/combined.log` }),
    ],
})

if (environment !== 'production') {
    logger.add(
        new transports.Console({
            format: format.simple(),
        }),
    )
}

export default logger
