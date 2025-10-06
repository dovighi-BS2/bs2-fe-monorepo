import { Bs2DSButtonSelectorTriggerDirective } from './../bs2-ds-button-selector-trigger/bs2-ds-button-selector-trigger.directive';
import { Bs2DSButtonSelectorDirective } from './bs2-ds-button-selector.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'button-selector-mock',
  imports: [Bs2DSButtonSelectorDirective, Bs2DSButtonSelectorTriggerDirective],
  template: `
    <span class="outside_element">Elemento apenas para simular o fechamento do button-selector</span>
    <button [bs2-ds-button-selector-trigger]="menu1">exemplo</button>

    <div bs2-ds-button-selector #menu1="bs2-ds-button-selector">
      <button>opção item 1</button>
      <button>opção item 2</button>
      <button>opção item 3</button>
      <button>opção item 4</button>
      <button>opção item 5</button>
      <button>opção item 6</button>
      <button>opção item 7</button>
      <button>opção item 8</button>
      <button>opção item 9</button>
    </div>
  `,
  standalone: true,
})
class MockButtonSelectorComponent {}

describe('Bs2DSButtonSelectorDirective', () => {
  let fixture: ComponentFixture<MockButtonSelectorComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSButtonSelectorDirective, Bs2DSButtonSelectorTriggerDirective, MockButtonSelectorComponent],
    }).createComponent(MockButtonSelectorComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const buttonSelector = fixture.debugElement.query(By.css('[bs2-ds-button-selector]'));
    const buttonSelectorDirective = new Bs2DSButtonSelectorDirective(buttonSelector);

    expect(buttonSelectorDirective).toBeTruthy();
  });

  it('should have add class .bs2_ds_button_selector--open', () => {
    const buttonSelector = fixture.debugElement.query(By.directive(Bs2DSButtonSelectorDirective));
    const buttonTrigger = fixture.debugElement.query(By.directive(Bs2DSButtonSelectorTriggerDirective));

    let buttonSelectorClasses = Object.values(buttonSelector.nativeElement.classList);
    expect(!!buttonSelectorClasses.find((item) => item === 'bs2_ds_button_selector--open')).toBe(false);

    buttonTrigger.nativeElement.click();
    fixture.detectChanges();

    buttonSelectorClasses = Object.values(buttonSelector.nativeElement.classList);
    expect(!!buttonSelectorClasses.find((item) => item === 'bs2_ds_button_selector--open')).toBe(true);
  });

  it('should have add remove .bs2_ds_button_selector--open', () => {
    const buttonSelector = fixture.debugElement.query(By.directive(Bs2DSButtonSelectorDirective));
    const buttonTrigger = fixture.debugElement.query(By.directive(Bs2DSButtonSelectorTriggerDirective));
    const outsideElement = fixture.debugElement.query(By.css('.outside_element'));

    buttonTrigger.nativeElement.click();
    fixture.detectChanges();

    let buttonSelectorClasses = Object.values(buttonSelector.nativeElement.classList);
    expect(!!buttonSelectorClasses.find((item) => item === 'bs2_ds_button_selector--open')).toBe(true);

    outsideElement.nativeElement.click();
    fixture.detectChanges();

    buttonSelectorClasses = Object.values(buttonSelector.nativeElement.classList);
    expect(!!buttonSelectorClasses.find((item) => item === 'bs2_ds_button_selector--open')).toBe(false);
  });
});
