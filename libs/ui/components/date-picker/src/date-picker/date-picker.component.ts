import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from './date-picker.interface';
import { PickerType } from './date-picker.enum';
import { delay, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'date-picker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent implements OnInit, OnDestroy {
  @ViewChild('datePickerRef') datePickerRef!: ElementRef;
  @Input() state?:
    | 'default'
    | 'hovered'
    | 'focused'
    | 'error'
    | 'filled'
    | 'disabled'
    | 'opened';

  @Input() form?: FormGroup;
  @Input() type = 'text';
  @Input() id = '';
  @Input() testId = '';
  @Input() name = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = 'h';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = '';
  @Input() readOnly = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  @Input() min: Date = new Date('1900-01-01T03:00:00.000Z');
  @Input() max: Date = new Date('2100-02-07T03:00:00.000Z');
  @Input() selectedDate = new Date();

  public selectedYear = this.selectedDate.getFullYear();
  public selectedMonth = this.selectedDate.getMonth() + 1;
  public selectedDay = this.selectedDate.getDate();

  public activePickerType = 'day';

  public calendarYears: number[] = [];
  public calendarMonths: DatePicker['months'] = [
    { number: 1, abbr: 'Jan', fullName: 'Janeiro' },
    { number: 2, abbr: 'Fev', fullName: 'Fevereiro' },
    { number: 3, abbr: 'Mar', fullName: 'Março' },
    { number: 4, abbr: 'Abr', fullName: 'Abril' },
    { number: 5, abbr: 'Mai', fullName: 'Maio' },
    { number: 6, abbr: 'Jun', fullName: 'Junho' },
    { number: 7, abbr: 'Jul', fullName: 'Julho' },
    { number: 8, abbr: 'Ago', fullName: 'Agosto' },
    { number: 9, abbr: 'Set', fullName: 'Setembro' },
    { number: 10, abbr: 'Out', fullName: 'Outubro' },
    { number: 11, abbr: 'Nov', fullName: 'Novembro' },
    { number: 12, abbr: 'Dez', fullName: 'Dezembro' },
  ];
  public calendarPreviousMonth: Date[] = [];
  public calendarMonth: Date[] = [];
  public calendarNextMonth: Date[] = [];

  public outsideClickSub: Subscription = new Subscription();

  public dayPicker = {
    isToday: (date: Date) => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const _year = date.getFullYear();
      const _month = String(date.getMonth() + 1).padStart(2, '0');
      const _day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}` === `${_year}-${_month}-${_day}`;
    },
    goToYearPicker: () => {
      this.activePickerType = 'year';
      this.fillCalendarYears();
    },
    getSelectedMonthName: () => {
      return this.calendarMonths.find((m) => m.number === this.selectedMonth);
    },
    selectDate: (date: Date) => {
      if (!this.isDaySelectable(date)) return;
      this.selectedDate = date;
      this.selectedDay = date.getDate();
      this.state = undefined;
    },
    nextMonth: () => {
      if (this.selectedMonth >= 12)
        (this.selectedMonth = 0), this.selectedYear++;
      this.increaseCalendar(PickerType.DAY);
    },
    previousMonth: () => {
      if (this.selectedMonth <= 1)
        (this.selectedMonth = 13), this.selectedYear--;
      this.decreaseCalendar(PickerType.DAY);
    },
  };

  public monthPicker = {
    goToDayPicker: () => {
      this.activePickerType = 'day';
      this.fillCalendar();
    },
    selectMonth: (month: number) => {
      if (!this.isMonthSelectable(month)) return;
      this.activePickerType = 'day';
      this.selectedMonth = month;
      this.fillCalendar();
    },
    nextYear: () => {
      this.increaseCalendar(PickerType.MONTH);
    },
    previousYear: () => {
      this.decreaseCalendar(PickerType.MONTH);
    },
  };
  public yearPicker = {
    selectYear: (year: number) => {
      if (!this.isYearSelectable(year)) return;
      this.activePickerType = 'month';
      this.selectedYear = year;
      this.fillCalendar();
    },
    nextYears: () => {
      if (this.selectedYear >= this.max.getFullYear())
        this.selectedYear = this.min.getFullYear();
      this.increaseCalendar(PickerType.YEAR);
    },
    previousYears: () => {
      if (this.selectedYear <= this.min.getFullYear())
        this.selectedYear = this.max.getFullYear();
      return this.decreaseCalendar(PickerType.YEAR);
    },
    getFirstAndLastYear: () => {
      const firstYear = this.calendarYears[0];
      const lastYear = this.calendarYears[this.calendarYears.length - 1];
      return `${firstYear} - ${lastYear}`;
    },
    goToDayPicker: () => {
      this.activePickerType = 'day';
      this.fillCalendar();
    },
  };

  ngOnInit(): void {
    this.fillCalendar();

    this.outsideClickSub = fromEvent(document, 'click').subscribe((event) => {
      if (!this.datePickerRef.nativeElement.contains(event.target)) {
        this.state = undefined;
      }
    });
  }

  ngOnDestroy(): void {
    this.outsideClickSub.unsubscribe();
  }

  getMonthDays(year: number, month: number) {
    const _year = month === 12 ? year + 1 : year;
    const _month = month === 12 ? 1 : month;

    const nextMonth = new Date(
      `${_year}-${String(_month).padStart(2, '0')}-01T03:00:00.000Z`
    );
    const lastDayOfMonth = new Date(nextMonth).setDate(nextMonth.getDate() - 1);
    const lastDayOfMonthNumber = new Date(lastDayOfMonth).getDate();
    const monthArray = Array(lastDayOfMonthNumber).fill(0);
    return monthArray.map(
      (_, n) =>
        new Date(
          `${year}-${String(month).padStart(2, '0')}-${String(n + 1).padStart(
            2,
            '0'
          )}T03:00:00.000Z`
        )
    );
  }

  getPreviousMonthRemainingDays(firstMonthDay: Date) {
    // Calendario igual do window que pode mostrar apenas nextMonth (2024-09)
    // const remainingPreviousDays = firstMonthDay.getDay();

    // Garante que sempre mostre previousMonth e nextMonth
    const remainingPreviousDays = firstMonthDay.getDay()
      ? firstMonthDay.getDay()
      : 7;

    const monthArray = Array(remainingPreviousDays).fill(0);
    return monthArray.map(
      (_, n) =>
        new Date(
          new Date(firstMonthDay).setDate(
            firstMonthDay.getDate() - remainingPreviousDays + n
          )
        )
    );
  }

  getNextMonthRemainingDays(lastMonthDay: Date, currentCalendarDays: number) {
    const remainingNextDays = 42 - currentCalendarDays;
    const monthArray = Array(remainingNextDays).fill(0);
    return monthArray.map(
      (_, n) =>
        new Date(
          new Date(lastMonthDay).setDate(lastMonthDay.getDate() + (n + 1))
        )
    );
  }

  fillCalendarYears() {
    this.calendarYears = Array(28)
      .fill(0)
      .map((_, n) => this.selectedYear - 13 + n);
  }

  fillCalendar() {
    const monthDays = this.getMonthDays(this.selectedYear, this.selectedMonth);
    const previousMonthRemainingDays = this.getPreviousMonthRemainingDays(
      monthDays[0]
    );
    const nextMonthRemainingDays = this.getNextMonthRemainingDays(
      monthDays[monthDays.length - 1],
      previousMonthRemainingDays.length + monthDays.length
    );

    this.calendarPreviousMonth = previousMonthRemainingDays;
    this.calendarMonth = monthDays;
    this.calendarNextMonth = nextMonthRemainingDays;
  }

  increaseCalendar(pickerType: PickerType): void {
    switch (pickerType) {
      case PickerType.DAY:
        return this.selectedMonth++, this.fillCalendar();
      case PickerType.MONTH:
        return this.selectedYear++, this.fillCalendar();
      case PickerType.YEAR:
        return (this.selectedYear += 28), this.fillCalendarYears();
    }
  }
  decreaseCalendar(type: PickerType): void {
    switch (type) {
      case PickerType.DAY:
        return this.selectedMonth--, this.fillCalendar();
      case PickerType.MONTH:
        return this.selectedYear--, this.fillCalendar();
      case PickerType.YEAR:
        return (this.selectedYear -= 28), this.fillCalendarYears();
    }
  }

  isDaySelectable(date: Date) {
    return (
      date.valueOf() >= this.min.valueOf() &&
      date.valueOf() <= this.max.valueOf()
    );
  }
  isMonthSelectable(month: number) {
    const date = new Date(
      `${this.selectedYear}-${String(month).padStart(2, '0')}-01T03:00:00.000Z`
    ).valueOf();
    return date >= this.min.valueOf() && date <= this.max.valueOf();
  }
  isYearSelectable(year: number) {
    const date = new Date(`${year}-01-01T03:00:00.000Z`).valueOf();
    return date >= this.min.valueOf() && date <= this.max.valueOf();
  }

  get getErrors(): string {
    if (!this.form || !this.form.get(this.name)) return '';
    const control = this.form?.get(this.name);
    return Object.values(control?.errors || {})
      .map((error) => error)
      .join('');
  }
}
