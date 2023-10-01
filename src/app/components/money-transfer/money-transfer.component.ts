import { Component } from '@angular/core';
import { Ledger } from '../../models/ledger.model';
import { Person } from '../../models/person.model';
import { Transaction, TransactionType } from '../../models/transaction.model';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss'],
})
export class MoneyTransferComponent {
  name: string = '';
  amount: number = 0;
  ledger: Ledger = new Ledger();
  biggestDebtor: Person | null = null;
  biggestLender: Person | null = null;

  onTransactionSubmit(transaction: Transaction) {
    switch (transaction.type) {
      case TransactionType.Lend:
        const lendFromPersonName = transaction.from;
        const lendToPersonName = transaction.to;
        const lendAmount = transaction.amount;
        this.ledger.lendMoney(lendFromPersonName, lendToPersonName, lendAmount);
        break;

      case TransactionType.Borrow:
        const borrowPersonName = transaction.from;
        const borrowAmount = transaction.amount;
        this.ledger.borrowMoney(borrowPersonName, borrowAmount);
        break;

      case TransactionType.Return:
        const returnPersonName = transaction.from;
        const returnAmount = transaction.amount;
        this.ledger.returnMoney(returnPersonName, returnAmount);
        break;

      case TransactionType.Receive:
        const returnFromPersonName = transaction.from;
        const returnToPersonName = transaction.to;
        const receiveAmount = transaction.amount;
        this.ledger.recieveMoney(
          returnFromPersonName,
          returnToPersonName,
          receiveAmount
        );
        break;

      default:
        console.error('Unsupported transaction type:', transaction.type);
    }
  }

  addPerson() {
    this.ledger.addPerson(this.name);
    this.name = '';
  }

  findBiggestDebtor() {
    this.biggestDebtor = this.ledger.findBiggestDebtor();
  }

  findBiggestLender() {
    this.biggestLender = this.ledger.findBiggestLender();
  }
}
