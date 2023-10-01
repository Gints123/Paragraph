import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { ParagraphComponentContainerComponent } from './components/paragraph-component-container/paragraph-component-container.component';
import { TextTaskComponent } from './components/text-task/text-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-1', pathMatch: 'full' },
  { path: 'task-1', component: ParagraphComponentContainerComponent },
  { path: 'task-2', component: MoneyTransferComponent },
  { path: 'task-3', component: TextTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
