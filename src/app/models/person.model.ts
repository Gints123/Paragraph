export class Person {
  name: string;
  amountLent: number = 0;
  amountBorrowed: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  lend(amount: number) {
    this.amountLent += amount;
  }

  borrow(amount: number) {
    this.amountBorrowed += amount;
  }

  repay(amount: number) {
    this.amountBorrowed = Math.max(0, this.amountBorrowed - amount);
  }

  receive(amount: number) {
    this.amountLent = Math.max(0, this.amountLent - amount);
  }
}
