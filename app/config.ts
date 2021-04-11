export const environment = process.env.ENVIRONMENT || 'development'
export const appName = 'bussr-assignment'
export const logLevel = process.env.LOG_LEVEL || 'debug'
export const port = parseInt(process.env.SERVER_PORT || '', 10) || 4000
export const authToken = process.env.AUTH_TOKEN || 'somesecret'
export const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/bussr'
