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
import { fromEvent, Subscription } from 'rxjs';

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
    goToYearPicker: () => {
      this.activePickerType = 'year';
      this.fillCalendarYears();
    },
    selectDate: (date: Date) => {
      if (!this.isDaySelectable(date)) return;
      this.selectedDate = date;
      this.selectedDay = date.getDate();
      this.state = undefined;
      this.form?.get(this.name)?.valueChanges;
      this.form
        ?.get(this.name)
        ?.setValue(this.getFormatedDate(this.selectedDate));
    },
    isToday: (date: Date) => {
      const today = this.getFormatedDate(new Date());
      return `${this.getFormatedDate(date)}` === `${today}`;
    },
    getSelectedMonthName: () => {
      return this.calendarMonths.find((m) => m.number === this.selectedMonth);
    },
  };

  public monthPicker = {
    nextYear: () => this.increaseCalendar(PickerType.MONTH),
    previousYear: () => this.decreaseCalendar(PickerType.MONTH),
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
  };
  public yearPicker = {
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
    goToDayPicker: () => {
      this.activePickerType = 'day';
      this.fillCalendar();
    },
    selectYear: (year: number) => {
      if (!this.isYearSelectable(year)) return;
      this.activePickerType = 'month';
      this.selectedYear = year;
      this.fillCalendar();
    },
    getFirstAndLastYear: () => {
      const firstYear = this.calendarYears[0];
      const lastYear = this.calendarYears[this.calendarYears.length - 1];
      return `${firstYear} - ${lastYear}`;
    },
  };

  ngOnInit(): void {
    this.fillCalendar();

    this.outsideClickSub = fromEvent(document, 'click').subscribe((event) => {
      if (!this.datePickerRef?.nativeElement.contains(event.target)) {
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

    const nextMonth = this.newDate(_year, _month + 1, 1);
    const lastDayOfMonth = new Date(nextMonth).setDate(nextMonth.getDate() - 1);
    const lastDayOfMonthNumber = new Date(lastDayOfMonth).getDate();
    const monthArray = Array(lastDayOfMonthNumber).fill(0);
    console.log({
      _year,
      _month,
      nextMonth,
      lastDayOfMonth,
      lastDayOfMonthNumber,
    });
    return monthArray.map((_, n) => this.newDate(year, month, n + 1));
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
    const date = this.newDate(this.selectedYear, month, 1).valueOf();
    return date >= this.min.valueOf() && date <= this.max.valueOf();
  }
  isYearSelectable(year: number) {
    const date = this.newDate(year, 1, 1).valueOf();
    return date >= this.min.valueOf() && date <= this.max.valueOf();
  }
  getFormatedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}/${month}/${year}`;
  }
  newDate(year: number, month: number, day: number) {
    const _month = String(month).padStart(2, '0');
    const _day = String(day).padStart(2, '0');
    return new Date(`${year}-${_month}-${_day}T03:00:00.000Z`);
  }
  get getErrors(): string {
    if (!this.form || !this.form.get(this.name)) return '';
    const control = this.form?.get(this.name);
    return Object.values(control?.errors || {})
      .map((error) => error)
      .join('');
  }
}
