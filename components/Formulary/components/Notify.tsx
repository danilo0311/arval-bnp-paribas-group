export const Notify = ({ data }: {
	data: CodeTypes | undefined;
}) => {


	if(typeof data?.value === 'undefined') return null;

	const { isValid, hasNumber, hasUppercaseLetter, hasValidLength } = data;

	if(isValid) return null;

	const message = () => {
		if(!hasValidLength) {
			return "El código debe tener entre 8 y 10 caracteres.";
		}

		if(!hasUppercaseLetter) {
			return "El código debe contener al menos una letra mayúscula.";
		}

		if(!hasNumber) {
			return "El código debe contener al menos un número.";
		}

		return "El código ingresado no es válido.";
	};

	return (
		<p className="text-red-500 text-xs font-sans">
			{message()} {/* Renderiza el mensaje dinámicamente */}
		</p>
	);
};
