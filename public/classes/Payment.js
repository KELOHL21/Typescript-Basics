// Class
export class Payment {
    // can only do when private,public,readonly is used
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.recipient} is owed R${this.amount} for ${this.details}`;
    }
}
