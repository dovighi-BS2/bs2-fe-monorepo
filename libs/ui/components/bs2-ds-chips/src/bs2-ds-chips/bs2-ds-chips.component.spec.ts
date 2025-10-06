import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSChipsComponent } from './bs2-ds-chips.component';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Bs2DSChipOption } from './bs2-ds-chips.interface';

describe('Bs2DSChipsComponent', () => {
  const testId = 'bs2_ds_chips__test_id';
  const options: Bs2DSChipOption[] = [
    { value: 'chip1', label: 'Chip 1', disabled: false },
    { value: 'chip2', label: 'Chip 2', disabled: false },
    { value: 'chip3', label: 'Chip 3', disabled: true },
  ];

  let component: Bs2DSChipsComponent;
  let fixture: ComponentFixture<Bs2DSChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSChipsComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSChipsComponent);
    component = fixture.componentInstance;

    const form = new FormGroup({
      chips: new FormControl([]),
    });

    component.control = form.get('chips')!;
    component.testId = testId;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[transformOptionsToPattern] should convert string array to Bs2DSChipOption', () => {
    component.options = ['chipA', 'chipB'];
    component.transformOptionsToPattern();
    expect(component._options).toEqual([
      { value: 'chipA', label: 'chipA', disabled: false },
      { value: 'chipB', label: 'chipB', disabled: false },
    ]);
  });

  it('[select] should not select disabled item', () => {
    component.control.setValue([]);
    component.select(options[2]);
    expect(component.control.value).not.toContain('chip3');
  });

  it('[select] should set value directly if not array control', () => {
    component.control.setValue('');
    component.select(options[0]);
    expect(component.control.value).toBe('chip1');
  });

  it('[select] should remove item if already selected', () => {
    component.control.setValue(['chip1']);
    component.select(options[0]);
    expect(component.control.value).not.toContain('chip1');
  });

  it('[add] should add value to control', () => {
    component.control.setValue(['chip1']);
    component.maxSelectable = 3;
    component.add({ value: 'chip2', label: 'Chip 2', disabled: false });
    expect(component.control.value).toEqual(['chip1', 'chip2']);
  });

  it('[add] should respect maxSelectable and remove oldest item', () => {
    component.control.setValue(['chip1', 'chip2']);
    component.maxSelectable = 2;
    component.add({ value: 'chip3', label: 'Chip 3', disabled: false });
    expect(component.control.value).toEqual(['chip2', 'chip3']);
  });

  it('[remove] should remove item from control value', () => {
    component.control.setValue(['chip1', 'chip2']);
    component.remove({ value: 'chip1', label: 'Chip 1', disabled: false });
    expect(component.control.value).toEqual(['chip2']);
  });

  it('[remove] should not remove if below minSelectable', () => {
    component.control.setValue(['chip1']);
    component.minSelectable = 1;
    component.remove({ value: 'chip1', label: 'Chip 1', disabled: false });
    expect(component.control.value).toEqual(['chip1']);
  });

  it('[isSelected] should return true if item is selected (array)', () => {
    component.control.setValue(['chip1']);
    expect(component.isSelected(options[0])).toBe(true);
  });

  it('[isSelected] should return false if item is not selected (array)', () => {
    component.control.setValue(['chip2']);
    expect(component.isSelected(options[0])).toBe(false);
  });

  it('[isSelected] should return true if value equals item (not array)', () => {
    component.control.setValue('chip1');
    expect(component.isSelected(options[0])).toBe(true);
  });

  it('[controlIsArray] should return true for array value', () => {
    component.control.setValue(['chip1']);
    expect(component.controlIsArray).toBe(true);
  });

  it('[controlIsArray] should return false for non-array value', () => {
    component.control.setValue('chip1');
    expect(component.controlIsArray).toBe(false);
  });
});
