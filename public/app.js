"use strict";
// classes
// class Invoice {
//     readonly client: string;
//     private details: string;
//     public amount: number;
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }
// shorthand constructor (requires modifier on each attribute ex. readonly/private/public)
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("GKV", "web design", 2000);
const invTwo = new Invoice("Best Buy", "loss prevention", 350);
let invoices = [];
invoices.push(invOne, invTwo);
invOne.amount = 38934;
invoices.forEach((inv) => {
    console.log(inv.client, inv.format());
});
const anchor = document.querySelector("a");
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
console.group(form);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
