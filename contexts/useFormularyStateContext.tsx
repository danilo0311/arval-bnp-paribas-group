import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

export type formularyContextTypes = {
	isCodeValid: boolean;
	setCodeIsValid: Dispatch<SetStateAction<boolean>>;
	isSubmitButtonEnabled: boolean;
	setSubmitButtonEnabled: Dispatch<SetStateAction<boolean>>;
	code: CodeTypes,
	setCode: Dispatch<SetStateAction<CodeTypes>>,
};

export const formularyContext = createContext<formularyContextTypes | undefined>(
	undefined,
);

export const UseFormularyContext: React.FC<{ children: ReactNode; }> = ({
	children,
}: {
	children: ReactNode;
}) => {

	const [ isCodeValid, setCodeIsValid ] = useState<boolean>(false);
	const [ isCodeSubmitted, setSubmitCode ] = useState<boolean>(false);
	const [ isSubmitButtonEnabled, setSubmitButtonEnabled ] = useState<boolean>(false);
	const [ code, setCode ] = useState<CodeTypes>({
		value: undefined,
		isValid: false,
		hasUppercaseLetter: false,
		hasNumber: false,
		hasValidLength: false

	});

	const contextValue: formularyContextTypes = {
		code,
		setCode,
		isCodeValid,
		setCodeIsValid,
		isSubmitButtonEnabled,
		setSubmitButtonEnabled
	};

	return (
		<formularyContext.Provider value={contextValue}>
			{children}
		</formularyContext.Provider>
	);
};

export const useFormularyStateContext = (): formularyContextTypes => {
	const context = useContext(formularyContext);

	if(!context) {
		throw new Error('useFormularyStateContext not found');
	}

	return context;
};

export const FormularyContextProvider = ({ children }: { children: ReactNode; }) => {
	return <UseFormularyContext>{children}</UseFormularyContext>;
};
