import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSDatepickerComponent } from './bs2-ds-datepicker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CustomValidatorMessages, CustomValidators } from '@bs2/design-system/validators';
import { PickerType } from './bs2-ds-datepicker.enum';

//
const manualGetFullMonth = (year: number, month: number, days: number) => {
  return Array(days)
    .fill(0)
    .map((_, n) => {
      const date = `${year}-${String(month).padStart(2, '0')}-${String(n + 1).padStart(2, '0')}`;
      return new Date(`${date}T03:07:00.000Z`).toISOString();
    });
};

const monthsToTest = [
  { current: [2023, 6, 30], next: [2023, 7, 1, 8], prev: [2023, 5, 28, 31] },
  { current: [2023, 7, 31], next: [2023, 8, 1, 5], prev: [2023, 6, 25, 30] },
  { current: [2023, 8, 31], next: [2023, 9, 1, 9], prev: [2023, 7, 30, 31] },
  { current: [2023, 9, 30], next: [2023, 10, 1, 7], prev: [2023, 8, 27, 31] },
  { current: [2023, 10, 31], next: [2023, 11, 1, 4], prev: [2023, 9, 24, 30] },
  { current: [2023, 11, 30], next: [2023, 12, 1, 9], prev: [2023, 10, 29, 31] },
  { current: [2023, 12, 31], next: [2024, 1, 1, 6], prev: [2023, 11, 26, 30] },
  { current: [2024, 1, 31], next: [2024, 2, 1, 10], prev: [2023, 12, 31, 31] },
  { current: [2024, 2, 29], next: [2024, 3, 1, 9], prev: [2024, 1, 28, 31] },
  { current: [2024, 3, 31], next: [2024, 4, 1, 6], prev: [2024, 2, 25, 29] },
  { current: [2024, 4, 30], next: [2024, 5, 1, 11], prev: [2024, 3, 31, 31] },
  { current: [2024, 5, 31], next: [2024, 6, 1, 8], prev: [2024, 4, 28, 30] },
  { current: [2024, 6, 30], next: [2024, 7, 1, 6], prev: [2024, 5, 26, 31] },
];

//

const manualGetNextMonth = (year: number, month: number, from: number, to: number) => {
  return Array(to - from + 1)
    .fill(0)
    .map((_, n) => {
      const date = `${year}-${String(month).padStart(2, '0')}-${String(from + n).padStart(2, '0')}`;
      return new Date(`${date}T03:07:00.000Z`).toISOString();
    });
};

const lastDaysOfMonths = [
  [new Date(`2023-06-30T03:07:00.000Z`), 34],
  [new Date(`2023-07-31T03:07:00.000Z`), 37],
  [new Date(`2023-08-31T03:07:00.000Z`), 33],
  [new Date(`2023-09-30T03:07:00.000Z`), 35],
  [new Date(`2023-10-31T03:07:00.000Z`), 38],
  [new Date(`2023-11-30T03:07:00.000Z`), 33],
  [new Date(`2023-12-31T03:07:00.000Z`), 36],
  [new Date(`2024-01-31T03:07:00.000Z`), 32],
  [new Date(`2024-02-29T03:07:00.000Z`), 33],
  [new Date(`2024-03-31T03:07:00.000Z`), 36],
  [new Date(`2024-04-30T03:07:00.000Z`), 31],
  [new Date(`2024-05-31T03:07:00.000Z`), 34],
  [new Date(`2024-06-30T03:07:00.000Z`), 36],
];

const manualGetPreviousMonth = (year: number, month: number, from: number, to: number) => {
  return Array(to - from + 1)
    .fill(0)
    .map((_, n) => {
      const date = `${year}-${String(month).padStart(2, '0')}-${String(from + n).padStart(2, '0')}`;
      return new Date(`${date}T03:07:00.000Z`).toISOString();
    });
};

const firstDaysOfMonths = [
  new Date(`2023-06-01T03:07:00.000Z`),
  new Date(`2023-07-01T03:07:00.000Z`),
  new Date(`2023-08-01T03:07:00.000Z`),
  new Date(`2023-09-01T03:07:00.000Z`),
  new Date(`2023-10-01T03:07:00.000Z`),
  new Date(`2023-11-01T03:07:00.000Z`),
  new Date(`2023-12-01T03:07:00.000Z`),
  new Date(`2024-01-01T03:07:00.000Z`),
  new Date(`2024-02-01T03:07:00.000Z`),
  new Date(`2024-03-01T03:07:00.000Z`),
  new Date(`2024-04-01T03:07:00.000Z`),
  new Date(`2024-05-01T03:07:00.000Z`),
  new Date(`2024-06-01T03:07:00.000Z`),
];

describe('Bs2DSDatepickerComponent', () => {
  const testId = 'date_picker__test_id';

  let component: Bs2DSDatepickerComponent;
  let fixture: ComponentFixture<Bs2DSDatepickerComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSDatepickerComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSDatepickerComponent);
    component = fixture.componentInstance;
    const form = new FormGroup({
      birthday: new FormControl('', [CustomValidators.required]),
    });
    component.control = form.get('birthday');
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
    const initSelectedDate = new Date(`2024-05-20T03:07:00.000Z`);

    const invalidDate = new Date(`2024-11-15T03:07:00.000Z`);
    const validDate = new Date(`2024-05-15T03:07:00.000Z`);

    component.min = new Date(`2024-01-01T03:07:00.000Z`);
    component.max = new Date(`2024-10-10T03:07:00.000Z`);

    const expectDate = (date: Date, year: number, month: number, day: number) => {
      expect(component.selectedDate).toStrictEqual(date);
      expect(component.selectedYear).toBe(year);
      expect(component.selectedMonth).toBe(month);
      expect(component.selectedDay).toBe(day);
    };

    component.dayPicker.selectDate(initSelectedDate, 'click');
    expectDate(initSelectedDate, 2024, 5, 20);
    component.dayPicker.selectDate(invalidDate, 'input');
    expectDate(initSelectedDate, 2024, 5, 20);
    expect(component.control.value).toBe(initSelectedDate);

    component.dayPicker.selectDate(initSelectedDate, 'click');
    expectDate(initSelectedDate, 2024, 5, 20);
    component.dayPicker.selectDate(invalidDate, 'click');
    expectDate(initSelectedDate, 2024, 5, 20);

    component.dayPicker.selectDate(initSelectedDate, 'click');
    component.controlToUser.setValue('20/05/2024');
    expectDate(initSelectedDate, 2024, 5, 20);
    component.dayPicker.selectDate(validDate, 'input');
    expectDate(validDate, 2024, 5, 15);

    component.dayPicker.selectDate(initSelectedDate, 'click');
    component.controlToUser.setValue('20/05/2024');
    expectDate(initSelectedDate, 2024, 5, 20);
    component.dayPicker.selectDate(validDate, 'click');
    expectDate(validDate, 2024, 5, 15);

    component.controlToUser.setValue('15/05/2024');
    expect(component.control.value).toBe(validDate);
    expect(component.controlToUser?.value).toBe('15/05/2024');
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

  it('should execute getMaskedDate right', () => {
    component.controlToUser.setValue('30122024');
    expect(component.getMaskedDate()).toBe('30/12/2024');

    component.controlToUser.setValue('12122000');
    expect(component.getMaskedDate()).toBe('12/12/2000');
  });

  it('should execute ngOnInit right', () => {
    component.control.setValue(new Date('2024-10-15T03:07:00.000Z'));
    component.controlToUser.setValue('15/10/2024');
    component.ngOnInit();
    expect(component.selectedDate).toStrictEqual(new Date('2024-10-15T03:07:00.000Z'));
    expect(component.selectedYear).toBe(2024);
    expect(component.selectedMonth).toBe(10);
    expect(component.selectedDay).toBe(15);
  });

  it('should execute handleInputChange right', () => {
    component.controlToUser.setValue('15102024');
    component.handleInputChange();
    expect(component.controlToUser.value).toBe('15/10/2024');
    expect(component.selectedDate).toStrictEqual(new Date('2024-10-15T03:07:00.000Z'));
    expect(component.selectedYear).toBe(2024);
    expect(component.selectedMonth).toBe(10);
    expect(component.selectedDay).toBe(15);
  });

  it('should execute getMonthDays right', () => {
    for (const toTest of monthsToTest) {
      const month = component.getMonthDays(toTest.current[0], toTest.current[1]);
      const manualMonth = manualGetFullMonth(toTest.current[0], toTest.current[1], toTest.current[2]);
      for (let i = 0; i < manualMonth.length; i++) expect(month[i].toISOString()).toBe(manualMonth[i]);
    }
  });

  it('should execute getPreviousMonthRemainingDays right', () => {
    for (const [index, toTest] of monthsToTest.entries()) {
      const month = component.getPreviousMonthRemainingDays(firstDaysOfMonths[index]);
      const manualMonth = manualGetPreviousMonth(toTest.prev[0], toTest.prev[1], toTest.prev[2], toTest.prev[3]);
      for (let i = 0; i < manualMonth.length; i++) expect(month[i].toISOString()).toBe(manualMonth[i]);
    }
  });

  it('should execute getNextMonthRemainingDays right', () => {
    for (const [index, toTest] of monthsToTest.entries()) {
      const month = component.getNextMonthRemainingDays(
        lastDaysOfMonths[index][0] as Date,
        lastDaysOfMonths[index][1] as number
      );
      const manualMonth = manualGetNextMonth(toTest.next[0], toTest.next[1], toTest.next[2], toTest.next[3]);
      for (let i = 0; i < manualMonth.length; i++) expect(month[i].toISOString()).toBe(manualMonth[i]);
    }
  });

  it('should execute fillCalendarYears right', () => {
    component.selectedYear = 2024;
    component.fillCalendarYears();
    expect(component.calendarYears.length).toBe(28);
    expect(component.calendarYears[0]).toBe(2011);
    expect(component.calendarYears[component.calendarYears.length - 1]).toBe(2038);

    component.selectedYear = 2020;
    component.fillCalendarYears();
    expect(component.calendarYears.length).toBe(28);
    expect(component.calendarYears[0]).toBe(2007);
    expect(component.calendarYears[component.calendarYears.length - 1]).toBe(2034);
  });

  it('should execute fillCalendar right', () => {
    for (const toTest of monthsToTest) {
      component.selectedYear = toTest.current[0];
      component.selectedMonth = toTest.current[1];

      component.fillCalendar();

      const manualPreviousMonth = manualGetPreviousMonth(
        toTest.prev[0],
        toTest.prev[1],
        toTest.prev[2],
        toTest.prev[3]
      );
      const manualCurrentMonth = manualGetFullMonth(toTest.current[0], toTest.current[1], toTest.current[2]);
      const manualNextMonth = manualGetNextMonth(toTest.next[0], toTest.next[1], toTest.next[2], toTest.next[3]);

      for (let i = 0; i < manualPreviousMonth.length; i++)
        expect(component.calendarPreviousMonth[i].toISOString()).toBe(manualPreviousMonth[i]);

      for (let i = 0; i < manualCurrentMonth.length; i++)
        expect(component.calendarMonth[i].toISOString()).toBe(manualCurrentMonth[i]);

      for (let i = 0; i < manualNextMonth.length; i++)
        expect(component.calendarNextMonth[i].toISOString()).toBe(manualNextMonth[i]);
    }
  });

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

  it('[getErrors] should execute right', () => {
    component.control?.setValue('teste');
    fixture.detectChanges();
    expect(component.getErrors).toBe('');

    component.control?.setValue('');
    component.control.markAllAsTouched();
    fixture.detectChanges();
    expect(component.getErrors).toBe(CustomValidatorMessages.required);
  });
});
