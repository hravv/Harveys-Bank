export class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            throw new Error("Insufficient funds");
        }
    }
    checkBalance() {
        return `Your balance is £${this.balance}.`;
    }   
}