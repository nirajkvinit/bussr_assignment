class ErrorHelper extends Error {
    httpStatusCode: number

    constructor(message: string, code: number) {
        super(message)
        this.httpStatusCode = code
    }
}

export default ErrorHelper
