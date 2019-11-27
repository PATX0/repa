export default class Response {
    constructor() {
        this.statusCode = null;
        this.type = null;
        this.data = null;
        this.message = null;
    }

    setSuccess(statusCode, data) {
        this.statusCode = statusCode;
        this.data = data;
        this.type = 'success';
    }

    setError(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
        this.type = 'error';
    }

    send(res) {

        if (this.type === 'success') {
            return res.status(this.statusCode).json({status: this.type, data: this.data});
          }
          return res.status(this.statusCode).json({
            status: this.type,
            message: this.message,
          });
    }
}