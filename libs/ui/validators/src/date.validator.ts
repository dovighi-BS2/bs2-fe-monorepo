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
