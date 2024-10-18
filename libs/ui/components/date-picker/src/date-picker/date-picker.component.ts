import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    | 'disabled';

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

  public selectedYear = 2024;
  public selectedMonth = 10;

  public activePickerType = 'day';

  public calendarYears: number[] = [];
  public calendarMonths = {
    1: 'Jan',
    2: 'Fev',
    3: 'Mar',
    4: 'Abr',
    5: 'Mai',
    6: 'Jun',
    7: 'Jul',
    8: 'Ago',
    9: 'Set',
    10: 'Out',
    11: 'Nov',
    12: 'Dez',
  };
  public calendarPreviousMonth: Date[] = [];
  public calendarMonth: Date[] = [];
  public calendarNextMonth: Date[] = [];

  ngOnInit(): void {
    this.fillCalendar();
  }

  getMonthDays(year: number, month: number) {
    const nextMonth = new Date(
      `${year}-${String(month).padStart(2, '0')}-01T03:00:00.000Z`
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

  goToYearPicker() {
    this.activePickerType = 'year';
    this.fillCalendarYears();
  }

  goToDayPicker() {
    this.activePickerType = 'day';
    this.fillCalendar();
  }

  selectYear(year: number) {
    this.activePickerType = 'month';
    this.selectedYear = year;
  }

  selectMonth(month: number) {
    this.activePickerType = 'day';
    this.selectedMonth = month;
  }

  nextYears() {
    if (this.selectedYear >= 2100) {
      this.selectedYear = 1900;
      this.selectedYear += 28;
      this.fillCalendarYears();
      return;
    }

    this.selectedYear += 28;
    this.fillCalendarYears();
  }

  previousYears() {
    if (this.selectedYear <= 1900) {
      this.selectedYear = 2100;
      this.selectedYear -= 28;
      this.fillCalendarYears();
      return;
    }

    this.selectedYear -= 28;
    this.fillCalendarYears();
  }

  nextMonth() {
    if (this.selectedMonth >= 12) {
      this.selectedMonth = 1;
      this.selectedYear++;
      this.fillCalendar();
      return;
    }

    this.selectedMonth++;
    this.fillCalendar();
  }

  previousMonth() {
    if (this.selectedMonth <= 1) {
      this.selectedMonth = 12;
      this.selectedYear--;
      this.fillCalendar();
      return;
    }

    this.selectedMonth--;
    this.fillCalendar();
  }

  nextYear() {
    if (this.selectedYear >= 12) {
      this.selectedYear++;
      this.fillCalendar();
      return;
    }

    this.selectedYear++;
    this.fillCalendar();
  }

  previousYear() {
    if (this.selectedYear <= 1) {
      this.selectedYear--;
      this.fillCalendar();
      return;
    }

    this.selectedYear--;
    this.fillCalendar();
  }

  getSelectedMonthName() {
    return this.calendarMonths[
      this.selectedMonth as keyof typeof this.calendarMonths
    ];
  }

  get getMonths() {
    return Object.entries(this.calendarMonths || {}).map((m) => ({
      key: Number(m[0]),
      name: m[1],
    }));
  }

  get getErrors(): string {
    if (!this.form || !this.form.get(this.name)) return '';
    const control = this.form?.get(this.name);
    return Object.values(control?.errors || {})
      .map((error) => error)
      .join('');
  }
}
