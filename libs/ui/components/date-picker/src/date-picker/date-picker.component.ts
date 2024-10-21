import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from './date-picker.interface';
import { PickerType } from './date-picker.enum';

@Component({
  selector: 'date-picker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent implements OnInit {
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

  public selectedYear = new Date().getFullYear();
  public selectedMonth = new Date().getMonth() + 1;
  public currentDay = new Date().getDate();
  public selectedDay = new Date().getDate();
  public selectedDate = new Date();

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

  public dayPicker = {
    goToYearPicker: () => {
      this.activePickerType = 'year';
      this.fillCalendarYears();
    },
    getSelectedMonthName: () => {
      return this.calendarMonths.find((m) => m.number === this.selectedMonth);
    },
    selectDate: (date: Date) => {
      this.selectedDate = date;
      this.selectedDay = date.getDate();
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
      this.activePickerType = 'month';
      this.selectedYear = year;
      this.fillCalendar();
    },
    nextYears: () => {
      if (this.selectedYear >= 2100) this.selectedYear = 1900;
      this.increaseCalendar(PickerType.YEAR);
    },
    previousYears: () => {
      if (this.selectedYear <= 1900) this.selectedYear = 2100;
      return this.decreaseCalendar(PickerType.YEAR);
    },
    getFirstAndLastYear: () => {
      const firstYear = this.calendarYears[0];
      const lastYear = this.calendarYears[this.calendarYears.length - 1];
      return `${firstYear} - ${lastYear}`;
    },
  };

  ngOnInit(): void {
    this.fillCalendar();
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
    console.log(this.selectedYear, this.selectedMonth);
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

  get getErrors(): string {
    if (!this.form || !this.form.get(this.name)) return '';
    const control = this.form?.get(this.name);
    return Object.values(control?.errors || {})
      .map((error) => error)
      .join('');
  }
}
