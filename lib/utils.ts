export const verifyCode = ({ code }: { code: string | undefined; }): {
	value: string | undefined;
	isValid: boolean,
	hasUppercaseLetter: boolean,
	hasNumber: boolean,
	hasValidLength: boolean;
} => {

	const maxLength = 10;
	const minLength = 8;

	if(!code) return {
		value: undefined,
		isValid: false,
		hasUppercaseLetter: false,
		hasNumber: false,
		hasValidLength: false

	};

	const hasValidLength = code.length >= minLength && code.length <= maxLength;
	const hasUppercaseLetter = /[A-Z]/.test(code);
	const hasNumber = /\d/.test(code);

	return {
		value: code,
		isValid: hasValidLength && hasUppercaseLetter && hasNumber,
		hasUppercaseLetter,
		hasValidLength,
		hasNumber
	};

};
