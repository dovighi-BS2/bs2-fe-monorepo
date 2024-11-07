import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';

export const dateValidators = {
  isValidDate: (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return { isValidDate: CustomValidatorMessages.required };
    if (!(control.value instanceof Date)) return { isValidDate: CustomValidatorMessages.date };
    return null;
  },
  isDateBetween: (min: Date, max: Date) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value || control.value.trim().length <= 0) return { isDateBetween: CustomValidatorMessages.required };
      if (control.value.trim().length !== 10) return { isDateBetween: CustomValidatorMessages.date };

      const v = control.value.split('/');
      const value = new Date(`${v[2]}-${v[1]}-${v[0]}T03:07:00.000Z`);

      if (value?.valueOf() < min.valueOf() || value?.valueOf() > max.valueOf())
        return { isDateBetween: CustomValidatorMessages.dateRangeInvalid };
      return null;
    };
  },
  isValidDateToUser: (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || control.value.trim().length <= 0) return { isValidDateToUser: CustomValidatorMessages.required };
    if (control.value.trim().length !== 10) return { isValidDateToUser: CustomValidatorMessages.date };
    const v = control.value.split('/');
    // [T03:07:00.000Z] especifico pois brasilia usava LMT (Local Mean Time) até 1913
    // se buscar por [1914-01-01T03:00:00.000Z] ele retorna 1913-12-31
    const d = new Date(`${v[2]}-${v[1]}-${v[0]}T03:07:00.000Z`);
    const _year = Number(v[2]);
    const _month = Number(v[1] - 1);
    const _day = Number(v[0]);

    // Caso o usuário digite 31/02/2024 por exemplo, o new Date entende como 02/03/2024
    // Por isso é necessário comparar a veracidade das informações passadas
    if (d.getFullYear() !== _year || d.getMonth() !== _month || d.getDate() !== _day)
      return { isValidDateToUser: CustomValidatorMessages.date };
    return null;
  },
};

// export const dateValidators = {
//   // DATE VALIDATORS
//   validDate: (control: UntypedFormControl): ValidationErrors => {
//     if (control.value && control.value != '') {
//       const date = control.value.replace(/\D/g, '');
//       const momentDate = moment(date, 'DDMMYYYY');
//       return momentDate.isValid() && date.length === 8
//         ? null
//         : { invalidDate: { message: 'Data inválida' } };
//     }

//     return null;
//   },

//   validCartaoDate: (control: UntypedFormControl): ValidationErrors => {
//     if (control.value && control.value != '') {
//       const date = control.value.replace(/\D/g, '');
//       const momentDate = moment(date, 'MMYY').endOf('month');
//       return momentDate.isValid() &&
//         momentDate.diff(moment(), 'day') >= 0 &&
//         date.length === 4
//         ? null
//         : { invalidDate: { message: 'Vencimento inválido' } };
//     }

//     return null;
//   },

//   dateIsSameOrBefore: (date: Date, message?: string) => {
//     const v : (control: AbstractControl): ValidationErrors => {

//         const dateToCompare = moment(date);
//         const momentDate = moment(control.value, ['DDMMYYYY'], true);

//         const v = dateToCompare.isSameOrBefore(momentDate, 'day');

//         return v ? null : { 'dateIsSameOrBefore': { 'message': message } };

//     }

//     return v;
// },

// dateIsBefore: (date: Date, message?: string) =>{
//     const v : (control: AbstractControl): ValidationErrors => {

//         const dateToCompare = moment(date);
//         const momentDate = moment(control.value, ['DDMMYYYY'], true);

//         const v = dateToCompare.isBefore(momentDate, 'day');

//         return v ? null : { 'dateIsBefore': { 'message': message } };

//     }

//     return v;
// }

// dateIsSameOrAfter: (date: Date, message?: string) => {
//     const v : (control: AbstractControl): ValidationErrors =>  {

//         const dateToCompare = moment(date);
//         const momentDate = moment(control.value, ['DDMMYYYY'], true);

//         const v = dateToCompare.isSameOrAfter(momentDate, 'day');

//         return v ? null : { 'dateIsSameOrAfter': { 'message': message } };

//     }

//     return v;
// }

// dateIsAfter: (date: Date, message?: string) =>{
//     const v : (control: AbstractControl): ValidationErrors => {

//         const dateToCompare = moment(date);
//         const momentDate = moment(control.value, ['DDMMYYYY'], true);

//         const v = dateToCompare.isAfter(momentDate, 'day');

//         return v ? null : { 'dateIsAfter': { 'message': message } };

//     }

//     return v;
// },

// notRetroactiveDate: (message?: string) => {
//     const v : (control: AbstractControl): ValidationErrors => {
//         if (control.value) {
//             // TODO: Foi implementada uma solução para que o validador recebe tanto uma data string no formato DDMMYYYY quanto um objeto Date do JS para garantir que esse validador funcione normalmente com matDatePicker (será necessário implementar essa rotina nos demais validadores após os testes nesse cenário)
//             let momentDate: moment.Moment;
//             if (control.value instanceof Date) {
//                 momentDate = moment(control.value);
//             } else {
//                 const value = control.value.replace(/[^0-9.]/g, '');
//                 momentDate = moment(value, ['DDMMYYYY'], true);
//             }

//             const valid = !momentDate.isBefore(new Date(new Date().setHours(0, 0, 0, 0)));

//             if (!valid) {
//                 return { 'notRetroactiveDate': { 'message': message ? message : 'Data inferior a atual' } };
//             }
//         }
//     };

//     return v;
// },

// notFutureDate : (control: AbstractControl): ValidationErrors => {
//     if (control.value && control.value != "") {
//         const value = control.value.replace(/[^0-9.]/g, '');
//         const momentDate = moment(value, ['DDMMYYYY'], true);

//         const valid = momentDate.isSameOrBefore(new Date(new Date().setHours(0, 0, 0, 0)));
//         if (!valid) {
//             return { 'notFutureDate': { 'message': 'Data superior a atual' } };
//         }
//     }
//     return null;
// },

// notPastDate : (control: AbstractControl): ValidationErrors => {
//     if (control.value && control.value != "") {
//         const value = control.value.replace(/[^0-9.]/g, '');
//         const momentDate = moment(value, ['DDMMYYYY'], true);

//         const valid = momentDate.isSameOrAfter(new Date(new Date().setHours(0, 0, 0, 0)));
//         if (!valid) {
//             return { 'notFutureDate': { 'message': 'Data inferior a atual' } };
//         }
//     }
//     return null;
// }

// };
