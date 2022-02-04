export class CustomException extends Error {
    code: number;

    constructor(message: string, code = 400) {
        super(message);

        this.code = code;
        this.name = 'CustomException';
    }
}