// export const lenthValidators = {

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
// }
