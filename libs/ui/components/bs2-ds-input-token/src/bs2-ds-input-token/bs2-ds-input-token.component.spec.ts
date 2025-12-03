import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSInputTokenComponent } from './bs2-ds-input-token.component';
import { FormControl } from '@angular/forms';
import { ElementRef, QueryList } from '@angular/core';
import { CustomValidatorMessages, CustomValidators } from '@bs2/design-system/validators';

describe('Bs2DSInputTokenComponent', () => {
  let component: Bs2DSInputTokenComponent;
  let fixture: ComponentFixture<Bs2DSInputTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputTokenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputTokenComponent);
    component = fixture.componentInstance;
    component.amount = 4;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with correct number of controls', () => {
    component.ngOnInit();
    expect(component.form.length).toBe(4);
  });

  it('should focus next input on input', () => {
    const mockInputs = Array(4)
      .fill(0)
      .map(() => ({
        nativeElement: {
          focus: jest.fn(),
          value: '',
        },
      })) as unknown as ElementRef[];

    component.bs2DSInputToken = new QueryList<ElementRef>();
    (component.bs2DSInputToken as any).reset(mockInputs);

    const inputEvent = {
      target: { value: '1' },
    } as any;

    component.onInput(inputEvent, 0);
    expect(mockInputs[1].nativeElement.focus).toHaveBeenCalled();
  });

  it('should focus previous input on Backspace key', () => {
    const mockInputs = Array(4)
      .fill(0)
      .map(() => ({
        nativeElement: {
          focus: jest.fn(),
          value: '',
        },
      })) as unknown as ElementRef[];

    component.bs2DSInputToken = new QueryList<ElementRef>();
    (component.bs2DSInputToken as any).reset(mockInputs);

    const event = {
      currentTarget: { value: '' },
      key: 'Backspace',
    } as unknown as KeyboardEvent;

    component.onKeyUp(event, 2);
    expect(mockInputs[1].nativeElement.focus).toHaveBeenCalled();
  });

  it('should paste and populate inputs correctly', () => {
    const mockInputs = Array(4)
      .fill(0)
      .map(() => ({
        nativeElement: {
          value: '',
          focus: jest.fn(),
        },
      })) as unknown as ElementRef[];

    component.bs2DSInputToken = new QueryList<ElementRef>();
    (component.bs2DSInputToken as any).reset(mockInputs);

    const clipboardData = {
      getData: jest.fn().mockReturnValue('1234'),
    };

    const pasteEvent = {
      clipboardData,
      preventDefault: jest.fn(),
    } as unknown as ClipboardEvent;

    component.onPaste(pasteEvent);

    expect(mockInputs[0].nativeElement.value).toBe('1');
    expect(mockInputs[1].nativeElement.value).toBe('2');
    expect(mockInputs[2].nativeElement.value).toBe('3');
    expect(mockInputs[3].nativeElement.value).toBe('4');
    expect(mockInputs[3].nativeElement.focus).toHaveBeenCalled();
  });

  it('should update control value in returnValue', () => {
    const control = new FormControl('');
    component.control = control;
    component.amount = 4;
    component.ngOnInit();

    component.form.at(0).setValue('1');
    component.form.at(1).setValue('2');
    component.form.at(2).setValue('3');
    component.form.at(3).setValue('4');

    component.form.controls.forEach((c) => c.markAsTouched());

    component.returnValue();

    expect(control.value).toBe('1234');
    expect(control.touched).toBe(true);
  });

  it('should return error message if all controls touched and has errors', () => {
    component.amount = 4;
    component.ngOnInit();
    const control = new FormControl('', [CustomValidators.required]);
    component.control = control;

    component.form.controls.forEach((c) => c.markAsTouched());
    component.control.markAllAsTouched();

    expect(component.getErrors).toBe(CustomValidatorMessages.required);
  });

  it('should return empty string if controls not all touched', () => {
    component.amount = 4;
    component.ngOnInit();
    const control = new FormControl('');
    control.setErrors({ required: CustomValidatorMessages.required });
    component.control = control;

    // Mark only some controls as touched
    component.form.at(0).markAsTouched();
    component.form.at(1).markAsTouched();

    const error = component.getErrors;
    expect(error).toBe('');
  });
});
