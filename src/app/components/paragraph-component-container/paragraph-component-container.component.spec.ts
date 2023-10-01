import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphComponentContainerComponent } from './paragraph-component-container.component';

describe('ParagraphComponentContainerComponent', () => {
  let component: ParagraphComponentContainerComponent;
  let fixture: ComponentFixture<ParagraphComponentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParagraphComponentContainerComponent]
    });
    fixture = TestBed.createComponent(ParagraphComponentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
