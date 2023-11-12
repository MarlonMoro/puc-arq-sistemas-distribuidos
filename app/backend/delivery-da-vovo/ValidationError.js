

export default class ValidationError extends Error {

    constructor(message, status) {
        super(message);
        this.status = status
    }
}