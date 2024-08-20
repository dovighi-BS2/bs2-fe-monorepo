// import { UntypedFormControl, Validators, ValidationErrors, AbstractControl, UntypedFormGroup } from '@angular/forms';
// import moment from 'moment/moment';
// import { boleto as boletoValidador } from '../brazilian-utils/validators/boletos/boleto';
// import { isValidCpf } from '../brazilian-utils/validators/is-valid-cpf.utils';
// import { isValidCnpj } from '../brazilian-utils/validators/is-valid-cnpj.utils';
// import { isValidCei } from '../brazilian-utils/validators/is-valid-cei.utils';
// import { isValidPisPasepNit } from '../brazilian-utils/validators/is-valid-pisPasepNit.utils';

// // // date
// // validDate
// // validCartaoDate
// // dateIsSameOrBefore
// // dateIsBefore
// // dateIsSameOrAfter
// // dateIsAfter
// // notRetroactiveDate
// // notFutureDate
// // notPastDate
// // lessThanHundredYears
// // lessThanTenYears

// // // length
// // customMinLength
// // customMaxLength
// // minValue
// // maxValue

// // // transform
// // hasLowerCase
// // hasUpperCase

// // // user
// // username
// // cellphone
// // phone
// // fullName
// // cpf
// // cep
// // cnpj
// // email
// // legalDocument
// // emailCompare
// // passwordCompare

// // // ??
// // requireMatch
// // ipv4
// // passwordRules
// // hasSpecialCharacters
// // boletoOrConvenio
// // number
// // hasNumber
// // brazilianStates
// // letters

// // identificadorGps
// // fieldCompare
// // validCountries
// // duplicateFieldCompare
// // pattern
// // guid
// // atLeastOneSetIsFilled
// // multipleOf

// export class bs2Validators {

// 	// DATE VALIDATORS
// 	static validDate(control: UntypedFormControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			const date = control.value.replace(/\D/g, '');
// 			const momentDate = moment(date, 'DDMMYYYY');
// 			return (momentDate.isValid() && date.length === 8) ?
// 				null :
// 				{ 'invalidDate': { message: 'Data inválida' } };
// 		}

// 		return null;
// 	}

// 	static validCartaoDate(control: UntypedFormControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			const date = control.value.replace(/\D/g, '');
// 			const momentDate = moment(date, 'MMYY').endOf('month');
// 			return (momentDate.isValid() && momentDate.diff(moment(), 'day') >= 0 && date.length === 4) ?
// 				null :
// 				{ 'invalidDate': { message: 'Vencimento inválido' } };
// 		}

// 		return null;
// 	}

// 	static dateIsSameOrBefore(date: Date, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {

// 			const dateToCompare = moment(date);
// 			const momentDate = moment(control.value, ['DDMMYYYY'], true);

// 			const v = dateToCompare.isSameOrBefore(momentDate, 'day');

// 			return v ? null : { 'dateIsSameOrBefore': { 'message': message } };

// 		}

// 		return v;
// 	}

// 	static dateIsBefore(date: Date, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {

// 			const dateToCompare = moment(date);
// 			const momentDate = moment(control.value, ['DDMMYYYY'], true);

// 			const v = dateToCompare.isBefore(momentDate, 'day');

// 			return v ? null : { 'dateIsBefore': { 'message': message } };

// 		}

// 		return v;
// 	}

// 	static dateIsSameOrAfter(date: Date, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {

// 			const dateToCompare = moment(date);
// 			const momentDate = moment(control.value, ['DDMMYYYY'], true);

// 			const v = dateToCompare.isSameOrAfter(momentDate, 'day');

// 			return v ? null : { 'dateIsSameOrAfter': { 'message': message } };

// 		}

// 		return v;
// 	}

// 	static dateIsAfter(date: Date, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {

// 			const dateToCompare = moment(date);
// 			const momentDate = moment(control.value, ['DDMMYYYY'], true);

// 			const v = dateToCompare.isAfter(momentDate, 'day');

// 			return v ? null : { 'dateIsAfter': { 'message': message } };

// 		}

// 		return v;
// 	}

// 	static notRetroactiveDate(message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			if (control.value) {
// 				// TODO: Foi implementada uma solução para que o validador recebe tanto uma data string no formato DDMMYYYY quanto um objeto Date do JS para garantir que esse validador funcione normalmente com matDatePicker (será necessário implementar essa rotina nos demais validadores após os testes nesse cenário)
// 				let momentDate: moment.Moment;
// 				if (control.value instanceof Date) {
// 					momentDate = moment(control.value);
// 				} else {
// 					const value = control.value.replace(/[^0-9.]/g, '');
// 					momentDate = moment(value, ['DDMMYYYY'], true);
// 				}

// 				const valid = !momentDate.isBefore(new Date(new Date().setHours(0, 0, 0, 0)));

// 				if (!valid) {
// 					return { 'notRetroactiveDate': { 'message': message ? message : 'Data inferior a atual' } };
// 				}
// 			}
// 		};

// 		return v;
// 	}

// 	static notFutureDate(control: AbstractControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			const value = control.value.replace(/[^0-9.]/g, '');
// 			const momentDate = moment(value, ['DDMMYYYY'], true);

// 			const valid = momentDate.isSameOrBefore(new Date(new Date().setHours(0, 0, 0, 0)));
// 			if (!valid) {
// 				return { 'notFutureDate': { 'message': 'Data superior a atual' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static notPastDate(control: AbstractControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			const value = control.value.replace(/[^0-9.]/g, '');
// 			const momentDate = moment(value, ['DDMMYYYY'], true);

// 			const valid = momentDate.isSameOrAfter(new Date(new Date().setHours(0, 0, 0, 0)));
// 			if (!valid) {
// 				return { 'notFutureDate': { 'message': 'Data inferior a atual' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static customMinLength(value: any, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			let controlValue = control.value;
// 			return value <= controlValue.length ? null : { 'minLength': { 'message': message } };
// 		};

// 		return v;
// 	}

// 	static customMaxLength(value: any, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			let controlValue = control.value;
// 			return value >= controlValue.length ? null : { 'minLength': { 'message': message } };
// 		};

// 		return v;
// 	}

// 	// NUMBER VALIDATORS
// 	static minValue(value: any, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			let controlValue = control.value;
// 			if (typeof control.value === 'string') {
// 				controlValue = parseFloat(control.value.replace(/[^0-9\.]+/g, ''));
// 			}
// 			return value <= controlValue ? null : { 'minValue': { 'message': message } };
// 		};

// 		return v;
// 	}

// 	static maxValue(value: number, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {

// 			return value >= control.value ? null : { 'maxValue': { 'message': message } };
// 		};

// 		return v;
// 	}

// 	// OTHERS VALIDATORS
// 	static requireMatch(control: AbstractControl) {
// 		if (control.value) {
// 			const selection: any = control.value;
// 			if (typeof selection === 'string') {
// 				return { 'requireMatch': { message: 'Selecione um elemento da lista' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static ipv4(control: AbstractControl) {
// 		if (control.value) {

// 			const val: string = control.value;
// 			const groups = val.split('.');

// 			const tn = groups.find(a => parseInt(a) < 0 || parseInt(a) > 255 || !a);

// 			if (groups.length !== 4 || tn || tn === "") {
// 				return { 'ipv4Invalido': { message: 'IP Inválido' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static passwordRules(control: AbstractControl) {
// 		const password: string = control.value;
// 		const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[=^""><!#$%&'()*+,-.\/:;?@[\\\]_`{|}~]).{8,32}$/;

// 		if (!reg.test(password) || password.indexOf(' ') > -1) {
// 			return { 'password': { message: 'A senha não atende aos requisitos' } };
// 		}
// 		return null;
// 	}

// 	static hasLowerCase(control: AbstractControl) {
// 		const value: string = control.value;
// 		const reg = /[a-z]/;

// 		if (!reg.test(value)) {
// 			return { 'hasLowerCase': false };
// 		}

// 		return null;
// 	}

// 	static hasUpperCase(control: AbstractControl) {
// 		const value: string = control.value;
// 		const reg = /[A-Z]/;

// 		if (!reg.test(value)) {
// 			return { 'hasUpperCase': false };
// 		}

// 		return null;
// 	}

// 	static hasSpecialCharacters(control: AbstractControl) {
// 		const value: string = control.value;
// 		const reg = /[=^""><!#$%&'()*+,-.\/:;?@[\\\]_`{|}~]/;

// 		if (!reg.test(value)) {
// 			return { 'hasSpecialCharacters': false };
// 		}

// 		return null;
// 	}

// 	static username(control: AbstractControl): ValidationErrors {
// 		const name = control.value;
// 		const reg = /^[a-zA-Z0-9_]+$/g;

// 		if (!reg.test(name)) {
// 			return { 'usernameInvalid': { 'message': 'Não é permitido caracteres especiais ou espaço.' } };
// 		}
// 		return null;
// 	}

// 	static boletoOrConvenio(control: AbstractControl) {
// 		const boleto: string = control.value;

// 		if (!boletoValidador(boleto)) {
// 			return { 'boletoInvalido': { message: 'Código do boleto inválido' } };
// 		}
// 		return null;
// 	}

// 	static cellphone(control: AbstractControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			const cellphone = control.value.replace(/\D/g, '');
// 			const regex = /^[1-9]{2}(9[1-9])[0-9]{3}[0-9]{4}$/;

// 			if (!regex.test(cellphone)) {
// 				return { 'cellphoneInvalid': { 'message': 'Celular inválido' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static phone(control: AbstractControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			const phone = control.value.replace(/\D/g, '');

// 			const regexCell = /^[1-9]{2}(9[1-9])[0-9]{3}[0-9]{4}$/;
// 			const regexFix = /^[1-9]{2}[0-9]{4}[0-9]{4}$/;

// 			if (!regexCell.test(phone) && !regexFix.test(phone)) {
// 				return { 'phoneInvalid': { 'message': 'Telefone inválido' } };
// 			}
// 		}

// 		return null;
// 	}

// 	static fullName(control: AbstractControl): ValidationErrors {

// 		if (control.value && control.value != "") {
// 			let name = control.value.split(" ")
// 				.filter(x => x != "");
// 			if (!(name.length > 1)) {
// 				return { 'fullNameInvalid': { 'message': 'Nome incompleto' } };
// 			}
// 		}
// 		return null;

// 	}

// 	static number(control: AbstractControl): ValidationErrors {

// 		if (control.value && control.value != "") {
// 			const name = control.value;
// 			const reg = /^[0-9]+$/g;
// 			if (!reg.test(name)) {
// 				return { 'invalidNumber': { 'message': 'Apenas números são permitidos' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static hasNumber(control: AbstractControl) {
// 		const value: string = control.value;
// 		const reg = /[0-9]/;

// 		if (!reg.test(value)) {
// 			return { 'hasNumber': false };
// 		}

// 		return null;
// 	}

// 	static brazilianStates(control: AbstractControl): ValidationErrors {

// 		if (control.value && control.value != "") {
// 			const uf = control.value;
// 			const reg = /^(ac|AC|al|AL|am|AM|ap|AP|ba|BA|ce|CE|df|DF|es|ES|go|GO|ma|MA|mg|MG|ms|MS|mt|MT|pa|PA|pb|PB|pe|PE|pi|PI|pr|PR|rj|RJ|rn|RN|ro|RO|rr|RR|rs|RS|sc|SC|se|SE|sp|SP|to|TO)$/
// 			if (!reg.test(uf)) {
// 				return { 'invalidLetters': { 'message': 'Apenas siglas de estados são permitidas' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static letters(control: AbstractControl): ValidationErrors {

// 		if (control.value && control.value != "") {
// 			const value = control.value;
// 			const reg = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
// 			if (!reg.test(value)) {
// 				return { 'fullNameInvalid': { 'message': 'Apenas letras são permitidas' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static cpf(control: AbstractControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			if (!isValidCpf(control.value)) {
// 				return { 'cpfInvalid': { 'message': 'CPF inválido' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static cep(control: AbstractControl): ValidationErrors {

// 		if (control.value) {
// 			const value: string = control.value.replace(/^\D+/g, '');
// 			if (value) {
// 				if (value === '00000000' || value === '99999999' || value.length !== 8) {
// 					return { 'cpfInvalid': { 'message': 'CEP inválido' } };
// 				}
// 			}
// 		}
// 		return null;
// 	}

// 	static cnpj(control: AbstractControl): ValidationErrors {
// 		if (control.value && control.value != "") {
// 			if (!isValidCnpj(control.value)) {
// 				return { 'cnpjInvalid': { 'message': 'CNPJ inválido' } };

// 				// 11.606.727/0001-33
// 			}
// 		}
// 		return null;
// 	}

// 	static legalDocument(control: AbstractControl): ValidationErrors {
// 		if (!isValidCnpj(control.value) && !isValidCpf(control.value)) {
// 			return { 'legalDocument': { 'message': 'Documento inválido' } };
// 		}

// 		return null;
// 	}

// 	static identificadorGps(control: AbstractControl): ValidationErrors {
// 		if (!isValidCnpj(control.value) && !isValidCpf(control.value) && !isValidCei(control.value)
// 			&& !isValidPisPasepNit(control.value)) {
// 			return { 'identificadorGps': { 'message': 'Documento inválido' } };
// 		}

// 		return null;
// 	}

// 	static passwordCompare(control2: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			const value = control.value;
// 			if (control.parent && control.parent.get(control2)) {
// 				const value2 = control.parent.get(control2).value;

// 				if (value !== value2) {
// 					return { 'passwordCompare': { 'message': 'As senhas não conferem' } };
// 				}
// 				return null;
// 			}

// 		};
// 		return v;
// 	}

// 	static fieldCompare(control2: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			const value = control.value;
// 			if (control.parent && control.parent.get(control2)) {
// 				const value2 = control.parent.get(control2).value;

// 				if (value !== value2) {
// 					return { 'passwordCompare': { 'message': 'Os campos não conferem' } };
// 				}
// 				return null;
// 			}

// 		};
// 		return v;
// 	}

// 	static validCountries(control2: string, control3: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			if (control.parent && control.parent.get(control2)) {
// 				const value2 = control.parent.get(control2).value;
// 				const value3 = control.parent.get(control3).value;

// 				if (value2 !== value3) {
// 					return { 'invalidCountries': { 'message': 'Os campos não conferem' } };
// 				}
// 				return null;
// 			}

// 		};
// 		return v;
// 	}

// 	static duplicateFieldCompare(control2: string, message: string = null, removeSpecialCharacters = false) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			let value = control.value;
// 			if (control.parent && control.parent.get(control2)) {
// 				let value2 = control.parent.get(control2).value;

// 				if(removeSpecialCharacters){
// 					value = value.replace(/[^\w]/g,'');
// 					value2 = value2.replace(/[^\w]/g,'');
// 				}

// 				if (value === value2) {
// 					return { 'duplicateFieldCompare': { 'message': message ? message : 'Informação repetida' } };
// 				}
// 				return null;
// 			}

// 		};
// 		return v;
// 	}

// 	static emailCompare(control2: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			const value = control.value;
// 			if (control.parent && control.parent.get(control2)) {
// 				const value2 = control.parent.get(control2).value;
// 				if (value.toLowerCase() !== value2.toLowerCase()) {
// 					return { 'emailCompare': { 'message': 'Os e-mails não conferem' } };
// 				}
// 				return null;
// 			}
// 		};
// 		return v;
// 	}

// 	static pattern(pattern: RegExp, message: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			const value = control.value;

// 			if (!!value && typeof value === 'string') {
// 				if (!pattern.test(value)) {
// 					return { 'bs2Pattern': { 'message': message } };
// 				}
// 			}

// 			return null;
// 		};
// 		return v;
// 	}

// 	static email(control: AbstractControl): ValidationErrors {

// 		const value = control.value;
// 		if (value) {
// 			const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 			if (!regex.test(value)) {
// 				return { 'email': { 'message': 'E-mail inválido' } };
// 			}
// 		}
// 		return null;
// 	}

// 	static lessThanHundredYears(control: AbstractControl) {
// 		if (!control.value) {
// 			return;
// 		}
// 		const formatedDate = moment(control.value, 'DD/MM/YYYY').format('YYYY-MM-DD');
// 		const diffYears = moment().diff(formatedDate, 'years');
// 		if (diffYears >= 100) {
// 			return { 'lessThanHundredYears': { 'message': 'Idade não pode ser maior que 99 anos' } };
// 		}
// 		return null;
// 	}

// 	static lessThanTenYears(control: AbstractControl) {
// 		if (!control.value) {
// 			return;
// 		}
// 		const formatedDate = moment(control.value, 'DD/MM/YYYY').format('YYYY-MM-DD');
// 		const diffYears = moment().diff(formatedDate, 'years');
// 		if (diffYears >= 10) {
// 			return { 'lessThanTenYears': { 'message': 'Data deve ser menor que 10 anos' } };
// 		}
// 		return null;
// 	}

// 	static guid(message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			const value = control.value;
// 			const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// 			if (!regex.test(value)) {
// 				return { 'guid': { 'message': message ?? 'Campo inválido' } };
// 			}
// 			return null;
// 		};
// 		return v;
// 	}

// 	static atLeastOneSetIsFilled(
// 		controls: string[][],
// 		message: string
// 	) {
// 		const v = (group: UntypedFormGroup): ValidationErrors | null => {
// 			/**
// 			 * Valida se um formulario tem algum dos conjuntos passados por parametro todo preenchido.
// 			 * Por exemplo, se é passado [["cpf", "nome"], ["cnpj", "nomeFantasia"]], retornará null se
// 			 * o cpf e nome for preenchido, e/ou, cnpj e nome fantasia for preenchido.
// 			 *
// 			 * @param controls - Lista de conjuntos de campos.
// 			 * @param message - Mensagem de erro da validação.
// 			 * @returns Retorna nulo caso o formulário seja valido(pelo menos um dos conjuntos de campos passados). Retorna um objeto com a mensagem de erro caso contrário.
// 			 */
// 			const atLeastOneSetIsFilled =
// 				group &&
// 				group.controls &&
// 				controls.some((datas) =>
// 					datas.every((data) => {
// 						return !Validators.required(group.controls[data])
// 							?.required;
// 					})
// 				);
// 			return atLeastOneSetIsFilled
// 				? null
// 				: { atLeastOneSetIsFilled: { message } };
// 		};
// 		return v;
// 	}

// 	static multipleOf(value: number, messageParam?: string) {
//         return (control: UntypedFormControl): ValidationErrors => {
//             if (control.value && control.value !== "") {
//                 const controlValue = Number(control.value);
//                 if (!isNaN(controlValue) && controlValue % value === 0) {
//                     return null;
//                 } else {
//                     return { 'multipleOf': { message: messageParam ?? `O valor deve ser múltiplo de ${value}` } };
//                 }
//             }

//             return null;
//         }
//     }
// }
