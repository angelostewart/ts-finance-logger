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
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("GKV", "web design", 2000);
const invTwo = new Invoice("Best Buy", "loss prevention", 350);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
invOne.amount = 38934;

invoices.forEach((inv) => {
  console.log(inv.client, inv.format());
});

const anchor = document.querySelector("a")!;

// console.log(anchor.href);

// const form = document.querySelector('form')!;

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.group(form);
// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
