import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSInputPhoneComponent } from './bs2-ds-input-phone.component';
import { FormControl } from '@angular/forms';
import { CustomValidatorMessages } from '@bs2/design-system/validators';

describe('Bs2DSInputPhoneComponent', () => {
  let component: Bs2DSInputPhoneComponent;
  let fixture: ComponentFixture<Bs2DSInputPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[ngOnInit] should execute right', () => {
    component.control = new FormControl('+86');
    component.ngOnInit();
    expect(component.codeControl.value).toBe('+86');
    expect(component.phoneControl.value).toBe(null);

    component.control = new FormControl('+869876543210');
    component.ngOnInit();
    expect(component.codeControl.value).toBe('+86');
    expect(component.phoneControl.value).toBe('9876543210');

    component.control = new FormControl('+11');
    component.ngOnInit();
    expect(component.codeControl.value).toBe('+1');
    expect(component.phoneControl.value).toBe('1');

    component.control = new FormControl('+55987');
    component.ngOnInit();
    expect(component.codeControl.value).toBe('+55');
    expect(component.phoneControl.value).toBe('987');
  });

  it('[getErrors] should execute right', () => {
    component.control = new FormControl('', []);
    component.ngOnInit();
    component.control?.setValue('+5511999999999');
    component.codeControl?.setValue('+55');
    component.phoneControl?.setValue('11999999999');
    component.codeControl.markAllAsTouched();
    component.phoneControl.markAllAsTouched();
    component.control.markAllAsTouched();
    fixture.detectChanges();
    expect(component.getErrors).toBe('');

    component.control?.setValue('');
    component.codeControl?.setValue('');
    component.phoneControl?.setValue('');
    component.codeControl.markAllAsTouched();
    component.phoneControl.markAllAsTouched();
    component.control.markAllAsTouched();
    fixture.detectChanges();
    expect(component.getErrors).toBe(CustomValidatorMessages.bs2DSInputPhone);
  });
});
