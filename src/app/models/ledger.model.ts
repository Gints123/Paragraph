import { Subject } from 'rxjs';
import { Person } from './person.model';

export class Ledger {
  private peopleSubject = new Subject<Person[]>();
  people$ = this.peopleSubject.asObservable();
  people: Person[] = [];

  addPerson(name: string) {
    if (!name || name.trim() === '') {
      console.error('Name cannot be empty');
      return 'Invalid name';
    }

    if (this.people.find((person) => person.name === name)) {
      console.error(`A person with the name ${name} already exists!`);
      return 'Person already exists';
    }

    this.people.push(new Person(name));
    this.peopleSubject.next(this.people);
    return 'Person added successfully';
  }

  findBiggestDebtor(): Person | null {
    if (this.people.length === 0) {
      console.error('The people array is empty.');
      return null;
    }
    return (
      this.people.sort((a, b) => b.amountBorrowed - a.amountBorrowed)[0] || null
    );
  }

  findBiggestLender(): Person | null {
    if (this.people.length === 0) {
      console.error('The people array is empty.');
      return null;
    }
    return this.people.sort((a, b) => b.amountLent - a.amountLent)[0] || null;
  }

  lendMoney(fromPersonName: string, toPersonName: string, amount: number) {
    console.log(amount);

    if (amount <= 0) {
      console.error('Invalid amount.');
      return 'Invalid amount';
    }

    let fromPerson = this.people.find((p) => p.name === fromPersonName);
    if (!fromPerson) {
      console.error(`Cannot find the lender: ${fromPersonName}`);
      return 'Invalid lender';
    }

    let toPerson = this.people.find((p) => p.name === toPersonName);
    if (!toPerson) {
      console.error(`Cannot find the recipient: ${toPersonName}`);
      return 'Invalid recipient';
    }

    if (fromPerson === toPerson) {
      console.error('A person cannot lend money to themselves.');
      return 'Invalid transaction';
    }

    fromPerson.amountLent += amount;
    toPerson.amountBorrowed += amount;
    this.peopleSubject.next(this.people);
    return 'Lend money operation completed Successfully';
  }

  borrowMoney(personName: string, amount: number) {
    const person = this.people.find((p) => p.name === personName);
    if (!person) {
      console.error(`Cannot find the recipient: ${personName}`);
      return 'Invalid recipient';
    }

    person.amountBorrowed += amount;
    this.peopleSubject.next(this.people);
    return 'Borrow operation completed successfully';
  }

  returnMoney(personName: string, amount: number) {
    const person = this.people.find((p) => p.name === personName);
    if (!person) {
      console.error(`Cannot find the recipient: ${personName}`);
      return 'Invalid recipient';
    }

    person.amountBorrowed -= amount;
    this.peopleSubject.next(this.people);
    return 'Return operation completed successfully';
  }

  recieveMoney(fromPersonName: string, toPersonName: string, amount: number) {
    if (amount <= 0) {
      console.error('Invalid amount.');
      return 'Invalid amount';
    }
    let fromPerson = this.people.find((p) => p.name === fromPersonName);
    let toPerson = this.people.find((p) => p.name === toPersonName);

    if (!fromPerson || fromPerson.amountBorrowed < amount) {
      console.error(
        `${fromPersonName} doesn't have enough debt to return ${amount} to ${toPersonName}`
      );
      return;
    }
    if (!toPerson) {
      console.error(`Cannot find person ${toPersonName} to return money to`);
      return;
    }
    if (fromPerson === toPerson) {
      console.error('A person cannot recieve money to themselves.');
      return 'Invalid transaction';
    }

    fromPerson.amountBorrowed -= amount;
    toPerson.amountLent -= amount;

    console.log(`${fromPersonName} returned ${amount} to ${toPersonName}`);
    return 'Recieve operation completed successfully';
  }
}
