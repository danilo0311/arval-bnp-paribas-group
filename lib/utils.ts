export const verifyCode = ({ code }: { code: string; }): { isValid: boolean; } => {

	const maxLength = 10;
	const minLength = 8;
	const codeLength = code.length;

	if(codeLength <= maxLength && code.length >= minLength) {

		const hasLetter = /[a-zA-Z]/.test(code);
		const hasNumber = /\d/.test(code);

		return { isValid: hasLetter && hasNumber };

	} else {

		return { isValid: false };

	}

};