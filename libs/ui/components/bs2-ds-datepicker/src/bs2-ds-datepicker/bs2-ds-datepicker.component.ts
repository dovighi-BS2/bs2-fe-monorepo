import {
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Bs2DSDatepicker } from './bs2-ds-datepicker.interface';
import { PickerType } from './bs2-ds-datepicker.enum';
import { fromEvent, Subscription } from 'rxjs';
import { Bs2DSInputTextComponent } from '@bs2/design-system/components/bs2-ds-input-text';
import { CustomValidatorMessages, CustomValidators } from '@bs2/design-system/validators';

@Component({
  selector: 'bs2-ds-datepicker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Bs2DSInputTextComponent, JsonPipe],
  templateUrl: './bs2-ds-datepicker.component.html',
  styleUrl: './bs2-ds-datepicker.component.scss',
})
export class Bs2DSDatepickerComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('datePickerRef') datePickerRef!: ElementRef;
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() control = new FormControl();
  @Input() id = '';
  @Input() testId = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = 'h';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = '';
  @Input() readOnly = false;
  @Input() direction: 'left' | 'right' = 'left';

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  @Input() min?: Date;
  @Input() max?: Date;
  @Input() selectedDate?: Date;
  @Input() disabled = false;

  public isOpened = signal(false);

  private fb = inject(FormBuilder);

  public formToUser = this.fb.group({ date: ['', []] });

  public selectedYear?: number;
  public selectedMonth?: number;
  public selectedDay?: number;

  public activePickerType = 'day';

  public calendarYears: number[] = [];
  public calendarMonths: Bs2DSDatepicker['months'] = [
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
      if (this.selectedMonth >= 12) (this.selectedMonth = 0), this.selectedYear++;
      this.increaseCalendar(PickerType.DAY);
    },
    previousMonth: () => {
      if (this.selectedMonth <= 1) (this.selectedMonth = 13), this.selectedYear--;
      this.decreaseCalendar(PickerType.DAY);
    },
    goToYearPicker: () => {
      this.activePickerType = 'year';
      this.fillCalendarYears();
    },
    selectDate: (date: Date, from: 'click' | 'input') => {
      if (!this.isDaySelectable(date)) return;

      if (from === 'input' && this.controlToUser.invalid) {
        this.isOpened.set(false);
        return;
      }

      this.isOpened.set(undefined);
      this.selectedDate = date;
      this.selectedDay = date.getDate();
      this.selectedMonth = date.getMonth() + 1;
      this.selectedYear = date.getFullYear();
      this.controlToUser?.setValue(this.getFormatedDate(this.selectedDate));
      this.control?.setValue(this.selectedDate);
      this.fillCalendar();
    },
    isToday: (date: Date) => {
      return `${this.getFormatedDate(date)}` === `${this.getFormatedDate(new Date())}`;
    },
    canActiveDay: (date: Date) => {
      return `${this.getFormatedDate(date)}` === `${this.getFormatedDate(this.selectedDate)}`;
    },
    getSelectedMonthName: () => {
      return this.calendarMonths.find((m) => m.number === this.selectedMonth);
    },
    open: () => {
      this.isOpened.set(true);
      this.activePickerType = 'day';
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
      // if (this.selectedYear >= this.max.getFullYear()) this.selectedYear = this.min.getFullYear();
      this.increaseCalendar(PickerType.YEAR);
    },
    previousYears: () => {
      // if (this.selectedYear <= this.min.getFullYear()) this.selectedYear = this.max.getFullYear();
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
    const today = new Date();
    this.selectedDate = (this.max?.valueOf() || Infinity) > today.valueOf() ? today : this.max;
    this.selectedYear = this.selectedDate.getFullYear();
    this.selectedMonth = this.selectedDate.getMonth() + 1;
    this.selectedDay = this.selectedDate.getDate();

    this.fillCalendar();

    this.formToUser.get('date').addValidators([CustomValidators.isValidDateToUser]);
    if (this.min && this.max)
      this.formToUser.get('date').addValidators([CustomValidators.isDateBetween(this.min, this.max)]);

    this.control.addValidators(CustomValidators.isBs2DSDatePickerValidator(this.controlToUser));

    if (typeof this.control.value === 'string') {
      this.controlToUser.setValue(this.control.value);
      this.handleInputChange();
    } else if (this.control.value?.getDate()) {
      this.dayPicker.selectDate(this.control.value, 'click');
    }

    this.outsideClickSub = fromEvent(document, 'click').subscribe((event) => {
      if (!this.datePickerRef?.nativeElement.contains(event.target)) {
        this.isOpened.set(false);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('disabled' in changes) {
      this.disabled ? this.controlToUser.disable() : this.controlToUser.enable();
      this.disabled ? this.control.disable() : this.control.enable();
    }
  }

  ngOnDestroy(): void {
    this.outsideClickSub.unsubscribe();
  }

  handleInputChange() {
    const maskedDate = this.getMaskedDate();
    const d = maskedDate.split('/');

    this.controlToUser?.setValue(maskedDate);
    this.control?.setValue(this.newDate(Number(d[2]), Number(d[1]), Number(d[0])));

    if (!this.control.value?.getDate()) this.control.setErrors({ isValidDate: CustomValidatorMessages.date });

    if (this.controlToUser?.value.length !== 10) return;
    this.dayPicker.selectDate(this.newDate(Number(d[2]), Number(d[1]), Number(d[0])), 'input');
  }

  getMaskedDate() {
    const value = this.controlToUser?.value.replace(/\D/g, '').split('');
    let date = '';
    for (const [i, n] of value.entries()) {
      if ([2, 4].includes(i)) date += '/';
      date += n;
    }
    return date.substring(0, 10);
  }

  getMonthDays(year: number, month: number) {
    const _year = month === 12 ? year + 1 : year;
    const _month = month === 12 ? 1 : month;

    const nextMonth = this.newDate(_year, _month + 1, 1);
    const lastDayOfMonth = new Date(nextMonth).setDate(nextMonth.getDate() - 1);
    const lastDayOfMonthNumber = new Date(lastDayOfMonth).getDate();
    const monthArray = Array(lastDayOfMonthNumber).fill(0);
    return monthArray.map((_, n) => this.newDate(year, month, n + 1));
  }

  getPreviousMonthRemainingDays(firstMonthDay: Date) {
    // Calendario igual do window que pode mostrar apenas nextMonth (2024-09)
    // const remainingPreviousDays = firstMonthDay.getDay();

    // Garante que sempre mostre previousMonth e nextMonth
    const remainingPreviousDays = firstMonthDay.getDay() ? firstMonthDay.getDay() : 7;

    const monthArray = Array(remainingPreviousDays).fill(0);
    return monthArray.map((_, n) => this.modDays(firstMonthDay, remainingPreviousDays - n, 'minus'));
  }

  getNextMonthRemainingDays(lastMonthDay: Date, currentCalendarDays: number) {
    const remainingNextDays = 42 - currentCalendarDays;
    const monthArray = Array(remainingNextDays).fill(0);
    return monthArray.map((_, n) => this.modDays(lastMonthDay, n + 1));
  }

  fillCalendarYears() {
    this.calendarYears = Array(28)
      .fill(0)
      .map((_, n) => this.selectedYear - 13 + n);
  }

  fillCalendar() {
    const monthDays = this.getMonthDays(this.selectedYear, this.selectedMonth);
    const previousMonthRemainingDays = this.getPreviousMonthRemainingDays(monthDays[0]);
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
    return date.valueOf() >= (this.min?.valueOf() || 0) && date.valueOf() <= (this.max?.valueOf() || Infinity);
  }
  isMonthSelectable(month: number) {
    const date = this.newDate(this.selectedYear, month, 1).valueOf();
    return date >= (this.min?.valueOf() || 0) && date <= (this.max?.valueOf() || Infinity);
  }
  isYearSelectable(year: number) {
    const date = this.newDate(year, 1, 1).valueOf();
    return date >= (this.min?.valueOf() || 0) && date <= (this.max?.valueOf() || Infinity);
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
  modDays(date: Date, days: number, operation: 'minus' | 'plus' = 'plus') {
    if (operation === 'minus') return new Date(new Date(date).setDate(date.getDate() - days));
    if (operation === 'plus') return new Date(new Date(date).setDate(date.getDate() + days));
    return date;
  }

  get controlToUser() {
    return this.formToUser?.get('date') as FormControl;
  }
  get getErrors(): string {
    if (!this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {});
    return errors[0];
  }

  // get controlValidators() { return this.control.validator?.({} as AbstractControl) }
  // get controlToUserValidators() { return this.controlToUser.validator?.({} as AbstractControl) }
}
