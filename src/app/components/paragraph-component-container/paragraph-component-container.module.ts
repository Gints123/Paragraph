import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponentContainerComponent } from './paragraph-component-container.component';
import { ParagraphComponentModule } from '../paragraph-component/paragraph-component.module';

@NgModule({
  declarations: [ParagraphComponentContainerComponent],
  imports: [CommonModule, ParagraphComponentModule],
  exports: [ParagraphComponentContainerComponent],
})
export class ParagraphComponentContainerModule {}
