export enum TransactionType {
  Lend = 'Lend',
  Borrow = 'Borrow',
  Return = 'Return',
  Receive = 'Receive',
}

export interface Transaction {
  from: string;
  to: string;
  amount: number;
  type: TransactionType;
}
