import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DatePickerComponent } from './date-picker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { PickerType } from './date-picker.enum';

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

  it('[daypicker] should execute nextMonth right', () => {
    // Caso o mes atual seja dezembro, o próximo deve ser janeiro
    // O ano deve ser incrementado em 1;
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

  it('[daypicker] should execute previousMonth right', () => {
    // Caso o mes atual seja janiero, o próximo deve ser dezembro
    // O ano deve ser decrementado em 1;

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

  it('[daypicker] should execute goToYearPicker right', () => {
    // Abre o picker do dia do mês e oculta todos os outros

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

  it('[daypicker] should execute selectDate right', () => {
    const initSelectedDate = new Date(`2024-10-10T03:07:00.000Z`);

    const invalidDate = new Date(`2024-10-11T03:07:00.000Z`);
    const validDate = new Date(`2024-10-10T03:07:00.000Z`);

    component.min = new Date(`2024-10-01T03:07:00.000Z`);
    component.max = new Date(`2024-10-10T03:07:00.000Z`);

    component.selectedDate = initSelectedDate;
    component.dayPicker.selectDate(invalidDate, 'input');
    expect(component.selectedDate).toBe(initSelectedDate);

    component.selectedDate = initSelectedDate;
    component.dayPicker.selectDate(invalidDate, 'click');
    expect(component.selectedDate).toBe(initSelectedDate);

    component.selectedDate = initSelectedDate;
    component.dayPicker.selectDate(validDate, 'input');
    expect(component.selectedDate).toBe(validDate);

    component.selectedDate = initSelectedDate;
    component.dayPicker.selectDate(validDate, 'click');
    expect(component.selectedDate).toBe(validDate);

    expect(component.control.value).toBe(validDate);
    expect(component.formToUser.get('date')?.value).toBe('10/10/2024');
  });

  it('[daypicker] should execute isToday right', () => {
    expect(component.dayPicker.isToday(new Date())).toBe(true);
    expect(component.dayPicker.isToday(new Date(`2024-10-31T03:07:00.000Z`))).toBe(false);
  });

  it('[daypicker] should execute canActiveDay right', () => {
    component.selectedDate = new Date(`2024-10-31T03:07:00.000Z`);
    expect(component.dayPicker.canActiveDay(new Date(`2024-10-31T03:07:00.000Z`))).toBe(true);
    expect(component.dayPicker.canActiveDay(new Date(`2024-10-30T03:07:00.000Z`))).toBe(false);
  });

  it('[daypicker] should execute getSelectedMonthName right', () => {
    component.selectedMonth = 6;
    fixture.detectChanges();
    expect(component.dayPicker.getSelectedMonthName()?.fullName).toBe('Junho');

    component.selectedMonth = 13;
    fixture.detectChanges();
    expect(component.dayPicker.getSelectedMonthName()?.fullName).toBe(undefined);
  });

  it('[daypicker] should execute open right', () => {
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

  it('[monthpicker] should execute nextYear right', () => {
    component.selectedYear = 2020;

    const expectedYears = [2021, 2022, 2023, 2024];

    for (const year of expectedYears) {
      component.monthPicker.nextYear();
      fixture.detectChanges();
      expect(component.selectedYear).toBe(year);
    }
  });

  it('[monthpicker] should execute previousYear right', () => {
    component.selectedYear = 2024;

    const expectedYears = [2023, 2022, 2021, 2020];

    for (const year of expectedYears) {
      component.monthPicker.previousYear();
      fixture.detectChanges();
      expect(component.selectedYear).toBe(year);
    }
  });

  it('[monthpicker] should execute goToDayPicker right', () => {
    // Abre o picker do mês e oculta todos os outros

    component.dayPicker.goToYearPicker();
    fixture.detectChanges();

    expect(component.activePickerType).toBe('year');
    expect(!!get(`.date_picker__day_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__month_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__year_picker.active`)).toBe(true);

    component.monthPicker.goToDayPicker();
    fixture.detectChanges();

    expect(component.activePickerType).toBe('day');
    expect(!!get(`.date_picker__day_picker.active`)).toBe(true);
    expect(!!get(`.date_picker__month_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__year_picker.active`)).toBe(false);
  });

  it('[monthpicker] should execute selectMonth right', () => {
    component.min = new Date(`2024-10-01T03:07:00.000Z`);
    component.max = new Date(`2024-11-30T03:07:00.000Z`);

    component.selectedYear = 2024;
    component.selectedMonth = 10;
    component.activePickerType = 'month';

    component.monthPicker.selectMonth(9);
    expect(component.activePickerType).toBe('month');
    expect(component.selectedMonth).toBe(10);

    component.monthPicker.selectMonth(12);
    expect(component.activePickerType).toBe('month');
    expect(component.selectedMonth).toBe(10);

    component.monthPicker.selectMonth(11);
    expect(component.activePickerType).toBe('day');
    expect(component.selectedMonth).toBe(11);
  });

  it('[yearpicker] should execute nextYears right', () => {
    // Calendário de anos incrementa de 28 em 28 anos.
    // 28 anos é a quantidade de anos que coube no calendário de anos
    // seguindo o tamanho proposto pela UX

    component.min = new Date(`2024-10-01T03:07:00.000Z`);
    component.max = new Date(`2026-10-01T03:07:00.000Z`);

    component.selectedYear = 2025;
    component.yearPicker.nextYears();
    expect(component.selectedYear).toBe(2025 + 28);

    component.yearPicker.nextYears();
    expect(component.selectedYear).toBe(2025 + 28 + 28);
  });

  it('[yearpicker] should execute previousYears right', () => {
    // Calendário de anos decrementa de 28 em 28 anos.
    // 28 anos é a quantidade de anos que coube no calendário de anos
    // seguindo o tamanho proposto pela UX

    component.min = new Date(`2024-10-01T03:07:00.000Z`);
    component.max = new Date(`2026-10-01T03:07:00.000Z`);

    component.selectedYear = 2025;
    component.yearPicker.previousYears();
    expect(component.selectedYear).toBe(2025 - 28);

    component.yearPicker.previousYears();
    expect(component.selectedYear).toBe(2025 - 28 - 28);
  });

  it('[yearpicker] should execute goToDayPicker right', () => {
    // Abre o picker do mês e oculta todos os outros

    component.activePickerType = 'month';
    fixture.detectChanges();

    expect(component.activePickerType).toBe('month');
    expect(!!get(`.date_picker__day_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__month_picker.active`)).toBe(true);
    expect(!!get(`.date_picker__year_picker.active`)).toBe(false);

    component.yearPicker.goToDayPicker();
    fixture.detectChanges();

    expect(component.activePickerType).toBe('day');
    expect(!!get(`.date_picker__day_picker.active`)).toBe(true);
    expect(!!get(`.date_picker__month_picker.active`)).toBe(false);
    expect(!!get(`.date_picker__year_picker.active`)).toBe(false);
  });

  it('[yearpicker] should execute selectYear right', () => {
    component.min = new Date(`2024-01-01T03:07:00.000Z`);
    component.max = new Date(`2026-12-31T03:07:00.000Z`);

    component.selectedYear = 2024;
    component.selectedMonth = 1;
    component.activePickerType = 'day';

    component.yearPicker.selectYear(2022);
    expect(component.activePickerType).toBe('day');
    expect(component.selectedYear).toBe(2024);

    component.yearPicker.selectYear(2023);
    expect(component.activePickerType).toBe('day');
    expect(component.selectedYear).toBe(2024);

    component.yearPicker.selectYear(2025);
    expect(component.activePickerType).toBe('month');
    expect(component.selectedYear).toBe(2025);
  });

  it('[yearpicker] should execute getFirstAndLastYear right', () => {
    component.calendarYears = [2022, 2023, 2024, 2025, 2026];
    expect(component.yearPicker.getFirstAndLastYear()).toBe(`2022 - 2026`);

    component.calendarYears = [2021, 2022];
    expect(component.yearPicker.getFirstAndLastYear()).toBe(`2021 - 2022`);
  });

  it('should execute getMonthDays right', () => {
    const manualGetFullMonth = (year: number, month: number, days: number) => {
      return Array(days)
        .fill(0)
        .map((_, n) => {
          const date = `${year}-${String(month).padStart(2, '0')}-${String(n + 1).padStart(2, '0')}`;
          return new Date(`${date}T03:07:00.000Z`).toISOString();
        });
    };

    const monthsToTest = [
      [2024, 6, 30],
      [2024, 7, 31],
      [2024, 8, 31],
      [2024, 9, 30],
      [2024, 10, 31],
      [2024, 11, 30],
      [2024, 12, 31],
      [2025, 1, 31],
      [2025, 2, 28],
      [2025, 3, 31],
      [2025, 4, 30],
      [2025, 5, 31],
      [2025, 6, 30],
    ];

    for (const toTest of monthsToTest) {
      const month = component.getMonthDays(toTest[0], toTest[1]);
      const manualMonth = manualGetFullMonth(toTest[0], toTest[1], toTest[2]);
      for (let i = 0; i < toTest[2]; i++) expect(month[i].toISOString()).toBe(manualMonth[i]);
    }
  });

  // it('should execute getPreviousMonthRemainingDays right', () => {
  //   expect(true).toBe(true);
  // });

  // it('should execute getNextMonthRemainingDays right', () => {
  //   expect(true).toBe(true);
  // });

  // it('should execute fillCalendarYears right', () => {
  //   expect(true).toBe(true);
  // });

  // it('should execute fillCalendar right', () => {
  //   expect(true).toBe(true);
  // });

  it('should execute increaseCalendar right', () => {
    // Calendário de anos incrementa de 28 em 28 anos.
    // 28 anos é a quantidade de anos que coube no calendário de anos
    // seguindo o tamanho proposto pela UX

    component.selectedDay = 10;
    component.selectedMonth = 10;
    component.selectedYear = 2024;

    component.increaseCalendar(PickerType.DAY);
    expect(component.selectedMonth).toBe(11);

    component.increaseCalendar(PickerType.MONTH);
    expect(component.selectedYear).toBe(2025);

    component.increaseCalendar(PickerType.YEAR);
    expect(component.selectedYear).toBe(2025 + 28);
  });

  it('should execute decreaseCalendar right', () => {
    // Calendário de anos decrementa de 28 em 28 anos.
    // 28 anos é a quantidade de anos que coube no calendário de anos
    // seguindo o tamanho proposto pela UX

    component.selectedDay = 10;
    component.selectedMonth = 10;
    component.selectedYear = 2024;

    component.decreaseCalendar(PickerType.DAY);
    expect(component.selectedMonth).toBe(9);

    component.decreaseCalendar(PickerType.MONTH);
    expect(component.selectedYear).toBe(2023);

    component.decreaseCalendar(PickerType.YEAR);
    expect(component.selectedYear).toBe(2023 - 28);
  });

  it('should execute isDaySelectable right', () => {
    component.min = new Date(`2024-06-01T03:07:00.000Z`);
    component.max = new Date(`2026-06-30T03:07:00.000Z`);

    expect(component.isDaySelectable(new Date(`2024-01-01T03:07:00.000Z`))).toBe(false);
    expect(component.isDaySelectable(new Date(`2024-05-31T03:07:00.000Z`))).toBe(false);
    expect(component.isDaySelectable(new Date(`2024-06-01T03:07:00.000Z`))).toBe(true);
    expect(component.isDaySelectable(new Date(`2024-12-31T03:07:00.000Z`))).toBe(true);

    expect(component.isDaySelectable(new Date(`2026-01-01T03:07:00.000Z`))).toBe(true);
    expect(component.isDaySelectable(new Date(`2026-06-30T03:07:00.000Z`))).toBe(true);
    expect(component.isDaySelectable(new Date(`2026-07-01T03:07:00.000Z`))).toBe(false);
    expect(component.isDaySelectable(new Date(`2026-12-31T03:07:00.000Z`))).toBe(false);
  });

  it('should execute isMonthSelectable right', () => {
    component.min = new Date(`2024-06-01T03:07:00.000Z`);
    component.max = new Date(`2026-06-30T03:07:00.000Z`);

    component.selectedYear = 2024;
    expect(component.isMonthSelectable(1)).toBe(false);
    expect(component.isMonthSelectable(5)).toBe(false);
    expect(component.isMonthSelectable(6)).toBe(true);
    expect(component.isMonthSelectable(12)).toBe(true);

    component.selectedYear = 2026;
    expect(component.isMonthSelectable(1)).toBe(true);
    expect(component.isMonthSelectable(6)).toBe(true);
    expect(component.isMonthSelectable(7)).toBe(false);
    expect(component.isMonthSelectable(12)).toBe(false);
  });

  it('should execute isYearSelectable right', () => {
    component.min = new Date(`2024-01-01T03:07:00.000Z`);
    component.max = new Date(`2026-12-31T03:07:00.000Z`);

    expect(component.isYearSelectable(2023)).toBe(false);
    expect(component.isYearSelectable(2024)).toBe(true);
    expect(component.isYearSelectable(2025)).toBe(true);
    expect(component.isYearSelectable(2026)).toBe(true);
    expect(component.isYearSelectable(2027)).toBe(false);
  });

  it('should execute getFormatedDate right', () => {
    expect(component.getFormatedDate(new Date(`2024-12-31T03:07:00.000Z`))).toBe('31/12/2024');
    expect(component.getFormatedDate(new Date(`2024-02-01T03:07:00.000Z`))).toBe('01/02/2024');
  });

  it('should execute newDate right', () => {
    expect(component.newDate(2024, 12, 31).toISOString()).toBe(new Date(`2024-12-31T03:07:00.000Z`).toISOString());
    expect(component.newDate(2024, 2, 1).toISOString()).toBe(new Date(`2024-02-01T03:07:00.000Z`).toISOString());
  });

  it('should execute modDays right', () => {
    const date = new Date(`2024-10-15T03:07:00.000Z`);

    expect(component.modDays(date, 2, 'plus').toISOString()).toBe(new Date(`2024-10-17T03:07:00.000Z`).toISOString());
    expect(component.modDays(date, 5, 'plus').toISOString()).toBe(new Date(`2024-10-20T03:07:00.000Z`).toISOString());

    expect(component.modDays(date, 2, 'minus').toISOString()).toBe(new Date(`2024-10-13T03:07:00.000Z`).toISOString());
    expect(component.modDays(date, 5, 'minus').toISOString()).toBe(new Date(`2024-10-10T03:07:00.000Z`).toISOString());
  });
});
