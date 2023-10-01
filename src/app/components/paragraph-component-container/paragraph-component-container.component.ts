import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph-component-container',
  templateUrl: './paragraph-component-container.component.html',
  styleUrls: ['./paragraph-component-container.component.scss'],
})
export class ParagraphComponentContainerComponent {
  paragraphs: string[] = [
    'First Paragraph',
    'Second Paragraph',
    'Third Paragraph',
  ];

  onTextChange(newText: string, index: number) {
    this.paragraphs[index] = newText;
  }
}
