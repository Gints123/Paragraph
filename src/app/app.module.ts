import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-component/header-component.component';
import { ParagraphComponentContainerModule } from './components/paragraph-component-container/paragraph-component-container.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TextTaskComponent } from './components/text-task/text-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoneyTransferComponent,
    TransactionFormComponent,
    TextTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParagraphComponentContainerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
