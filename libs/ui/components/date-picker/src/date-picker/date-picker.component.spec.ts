import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DatePickerComponent } from './date-picker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

describe('DatePickerComponent', () => {
  const testId = 'date_picker__test_id';

  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      birthday: new FormControl('', [CustomValidators.required]),
    });
    component.name = 'birthday';
    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[daypicker] should nextMonth', () => {
    component.selectedMonth = 9;
    component.selectedYear = 2024;

    const expectedMonths = [10, 11, 12, 1, 2];
    const expectedYears = [2024, 2025];
    let expectedYearIndex = 0;

    for (const month of expectedMonths) {
      component.dayPicker.nextMonth();
      fixture.detectChanges();
      if (month === 1) expectedYearIndex = 1;
      expect(component.selectedMonth).toBe(month);
      expect(component.selectedYear).toBe(expectedYears[expectedYearIndex]);
    }
  });

  it('[daypicker] should previousMonth', () => {
    component.selectedMonth = 3;
    component.selectedYear = 2025;

    const expectedMonths = [2, 1, 12, 11, 10];
    const expectedYears = [2025, 2024];
    let expectedYearIndex = 0;

    for (const month of expectedMonths) {
      component.dayPicker.previousMonth();
      fixture.detectChanges();
      if (month === 12) expectedYearIndex = 1;
      expect(component.selectedMonth).toBe(month);
      expect(component.selectedYear).toBe(expectedYears[expectedYearIndex]);
    }
  });

  it('[daypicker] should goToYearPicker', () => {
    component.monthPicker.goToDayPicker();
    fixture.detectChanges();

    expect(component.activePickerType).toBe('day');
    expect(!!get(`.date_picker__day_picker.active`)).toBe(true);
    expect(!!get(`.date_picker__month_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__year_picker.active`)).toBe(false);

    component.dayPicker.goToYearPicker();
    fixture.detectChanges();

    expect(component.activePickerType).toBe('year');
    expect(!!get(`.date_picker__day_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__month_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__year_picker.active`)).toBe(true);
  });

  // it('[daypicker] should selectDate', () => {
  //   expect(true).toBe(true);
  // });

  it('[daypicker] should isToday', () => {
    expect(component.dayPicker.isToday(new Date())).toBe(true);
    expect(component.dayPicker.isToday(new Date(`2024-10-31T03:07:00.000Z`))).toBe(false);
  });

  it('[daypicker] should canActiveDay', () => {
    component.selectedDate = new Date(`2024-10-31T03:07:00.000Z`);
    expect(component.dayPicker.canActiveDay(new Date(`2024-10-31T03:07:00.000Z`))).toBe(true);
    expect(component.dayPicker.canActiveDay(new Date(`2024-10-30T03:07:00.000Z`))).toBe(false);
  });

  it('[daypicker] should getSelectedMonthName', () => {
    component.selectedMonth = 6;
    fixture.detectChanges();
    expect(component.dayPicker.getSelectedMonthName()?.fullName).toBe('Junho');

    component.selectedMonth = 13;
    fixture.detectChanges();
    expect(component.dayPicker.getSelectedMonthName()?.fullName).toBe(undefined);
  });

  it('[daypicker] should open', () => {
    component.state = undefined;
    component.activePickerType = 'year';
    fixture.detectChanges();
    expect(!!get(``)?.classList?.contains('opened')).toBe(false);
    expect(!!get(`.date_picker__day_picker.active`)).toBe(false);

    component.dayPicker.open();
    fixture.detectChanges();
    expect(!!get(``)?.classList?.contains('opened')).toBe(true);
    expect(!!get(`.date_picker__day_picker.active`)).toBe(true);
  });

  // it('[monthpicker] nextYear', () => {
  //   expect(true).toBe(true);
  // });

  // it('[monthpicker] previousYear', () => {
  //   expect(true).toBe(true);
  // });

  // it('[monthpicker] goToDayPicker', () => {
  //   expect(true).toBe(true);
  // });

  // it('[monthpicker] selectMonth', () => {
  //   expect(true).toBe(true);
  // });

  // it('[yearpicker] nextYears', () => {
  //   expect(true).toBe(true);
  // });

  // it('[yearpicker] previousYears', () => {
  //   expect(true).toBe(true);
  // });

  // it('[yearpicker] goToDayPicker', () => {
  //   expect(true).toBe(true);
  // });

  // it('[yearpicker] selectYear', () => {
  //   expect(true).toBe(true);
  // });

  // it('[yearpicker] getFirstAndLastYear', () => {
  //   expect(true).toBe(true);
  // });

  // it('getMonthDays', () => {
  //   expect(true).toBe(true);
  // });

  // it('getPreviousMonthRemainingDays', () => {
  //   expect(true).toBe(true);
  // });

  // it('getNextMonthRemainingDays', () => {
  //   expect(true).toBe(true);
  // });

  // it('fillCalendarYears', () => {
  //   expect(true).toBe(true);
  // });

  // it('fillCalendar', () => {
  //   expect(true).toBe(true);
  // });

  // it('increaseCalendar', () => {
  //   expect(true).toBe(true);
  // });

  // it('decreaseCalendar', () => {
  //   expect(true).toBe(true);
  // });

  // it('isDaySelectable', () => {
  //   expect(true).toBe(true);
  // });

  // it('isMonthSelectable', () => {
  //   expect(true).toBe(true);
  // });

  // it('isYearSelectable', () => {
  //   expect(true).toBe(true);
  // });

  // it('getFormatedDate', () => {
  //   expect(true).toBe(true);
  // });

  // it('newDate', () => {
  //   expect(true).toBe(true);
  // });

  // it('modDays', () => {
  //   expect(true).toBe(true);
  // });
});
