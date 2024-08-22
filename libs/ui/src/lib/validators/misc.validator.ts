// export const miscValidators = {

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

// 	static hasSpecialCharacters(control: AbstractControl) {
// 		const value: string = control.value;
// 		const reg = /[=^""><!#$%&'()*+,-.\/:;?@[\\\]_`{|}~]/;

// 		if (!reg.test(value)) {
// 			return { 'hasSpecialCharacters': false };
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

// 	static identificadorGps(control: AbstractControl): ValidationErrors {
// 		if (!isValidCnpj(control.value) && !isValidCpf(control.value) && !isValidCei(control.value)
// 			&& !isValidPisPasepNit(control.value)) {
// 			return { 'identificadorGps': { 'message': 'Documento inválido' } };
// 		}

// 		return null;
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

// 	static pattern(pattern: RegExp, message: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			const value = control.value;

// 			if (!!value && typeof value === 'string') {
// 				if (!pattern.test(value)) {
// 					return { 'pattern': { 'message': message } };
// 				}
// 			}

// 			return null;
// 		};
// 		return v;
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
