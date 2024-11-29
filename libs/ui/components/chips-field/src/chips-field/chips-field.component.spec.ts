import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipsFieldComponent } from './chips-field.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

const defaultOptions = [
  { label: 'item 01', disabled: false },
  { label: 'item 02', disabled: false },
  { label: 'item 03', disabled: false },
];

describe('ChipsFieldComponent', () => {
  const testId = 'chips-field_checkbox__test_id';

  let component: ChipsFieldComponent;
  let fixture: ComponentFixture<ChipsFieldComponent>;

  // const get = (selector: string) =>
  //   fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsFieldComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipsFieldComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      reasons: new FormControl('', [CustomValidators.required]),
    });
    component.form = new FormGroup({
      reasons: new FormControl('', [CustomValidators.required]),
    });
    component.name = 'reasons';
    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[ngOnInit] should execute right', () => {
    const transformOptionsToPatternSpy = jest.spyOn(component, 'transformOptionsToPattern');
    component.ngOnInit();
    expect(transformOptionsToPatternSpy).toHaveBeenCalledTimes(1);
  });

  it('[transformOptionsToPattern] should execute right', () => {
    const options1 = ['item 01', 'item 02', 'item 03'];
    const options2 = defaultOptions;

    component.options = options2;
    component.transformOptionsToPattern();
    expect(component._options).toStrictEqual(defaultOptions);

    component.options = options1;
    component.transformOptionsToPattern();
    expect(component._options).toStrictEqual(defaultOptions);
  });

  it('[select] should execute right', () => {
    component._options = [
      { label: 'item 01', disabled: false },
      { label: 'item 02', disabled: true },
      { label: 'item 03', disabled: false },
    ];

    component.select(component._options[0]);
    expect(component.form.get('reasons')?.value.length).toBe(1);

    component.select(component._options[1]);
    expect(component.form.get('reasons')?.value.length).toBe(1);

    component.select(component._options[2]);
    expect(component.form.get('reasons')?.value.length).toBe(2);

    component.select(component._options[2]);
    expect(component.form.get('reasons')?.value.length).toBe(1);
  });

  it('[add] should execute right', () => {
    component._options = [
      { label: 'item 01', disabled: false },
      { label: 'item 02', disabled: true },
      { label: 'item 03', disabled: false },
    ];

    component.select(component._options[0]);
    expect(component.form.get('reasons')?.value.length).toBe(1);
  });

  it('[remove] should execute right', () => {
    component._options = [
      { label: 'item 01', disabled: false },
      { label: 'item 02', disabled: true },
      { label: 'item 03', disabled: false },
    ];

    component.select(component._options[0]);
    expect(component.form.get('reasons')?.value.length).toBe(1);

    component.select(component._options[0]);
    expect(component.form.get('reasons')?.value.length).toBe(0);
  });

  it('should isSelected', () => {
    component._options = [
      { label: 'item 01', disabled: false },
      { label: 'item 02', disabled: true },
      { label: 'item 03', disabled: false },
    ];

    component.select(component._options[0]);
    expect(component.isSelected(component._options[0])).toBe(true);
    expect(component.isSelected(component._options[2])).toBe(false);

    component.select(component._options[2]);
    expect(component.isSelected(component._options[2])).toBe(true);
    component.select(component._options[2]);
    expect(component.isSelected(component._options[2])).toBe(false);
  });
});
