import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paragraph-component',
  templateUrl: './paragraph-component.component.html',
  styleUrls: ['./paragraph-component.component.scss'],
})
export class ParagraphComponent {
  @Input() text: string = '';
  isEditable: boolean = false;
  @ViewChild('paragraphText', { static: false }) paragraphText!: ElementRef;

  onEditClick() {
    this.isEditable = true;
    this.paragraphText.nativeElement.focus();
  }

  onSaveClick() {
    this.text = this.paragraphText.nativeElement.textContent || '';
    this.isEditable = false;
  }
}
