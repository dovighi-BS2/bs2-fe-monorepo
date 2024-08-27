// export const userValidators = {

//     static passwordRules(control: AbstractControl) {
// 		const password: string = control.value;
// 		const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[=^""><!#$%&'()*+,-.\/:;?@[\\\]_`{|}~]).{8,32}$/;

// 		if (!reg.test(password) || password.indexOf(' ') > -1) {
// 			return { 'password': { message: 'A senha não atende aos requisitos' } };
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

//     static passwordCompare(control2: string) {
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

// }
