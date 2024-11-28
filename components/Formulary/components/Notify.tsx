export const Notify = ({ data }: {
	data: CodeTypes | undefined;
}) => {


	if(typeof data?.value === 'undefined') return null;

	const { isValid, hasNumber, hasUppercaseLetter, hasValidLength } = data;

	if(isValid) return null;

	const message = () => {

		if(!hasValidLength) {
			return "Le code doit comporter entre 8 et 10 caractères.";
		}

		if(!hasUppercaseLetter) {
			return "Le code doit contenir au moins une lettre majuscule.";
		}

		if(!hasNumber) {
			return "Le code doit contenir au moins un chiffre.";
		}

		return "Le code saisi n'est pas valide.";

	};

	return (
		<p className="text-red-500 text-xs font-sans">
			{message()}
		</p>
	);
};
