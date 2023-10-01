import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Transaction, TransactionType } from '../../models/transaction.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
})
export class TransactionFormComponent implements OnInit, OnDestroy {
  @Output() transactionSubmit = new EventEmitter<Transaction>();
  private subs = new Subscription();

  transactionType = TransactionType;
  transactionForm!: FormGroup;
  showToField = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.transactionForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      type: [TransactionType.Lend],
    });
    this.subs.add(
      this.transactionForm.get('type')?.valueChanges.subscribe((value) => {
        this.showToField =
          value !== TransactionType.Borrow && value !== TransactionType.Return;
        const toControl = this.transactionForm.get('to');
        if (toControl) {
          if (
            value === TransactionType.Borrow ||
            value === TransactionType.Return
          ) {
            toControl.clearValidators();
            toControl.reset();
          } else {
            toControl.setValidators(Validators.required);
          }
          toControl.updateValueAndValidity();
        }
      })
    );
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.transactionSubmit.emit(this.transactionForm.value);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
