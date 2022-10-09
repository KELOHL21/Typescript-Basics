// Class
export class Invoice {
    // can only do when private,public,readonly is used
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.recipient} owes R${this.amount} for ${this.details}`;
    }
}
