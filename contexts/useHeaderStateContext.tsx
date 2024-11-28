import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

export type headerContextTypes = {
	isMobileMenuOpen: boolean;
	setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const headerContext = createContext<headerContextTypes | undefined>(
	undefined,
);

export const UseHeaderContext: React.FC<{ children: ReactNode; }> = ({
	children,
}: {
	children: ReactNode;
}) => {

	const [ isMobileMenuOpen, setMobileMenuOpen ] = useState<boolean>(false);

	const contextValue: headerContextTypes = {
		isMobileMenuOpen,
		setMobileMenuOpen,
	};

	return (
		<headerContext.Provider value={contextValue}>
			{children}
		</headerContext.Provider>
	);
};

export const useHeaderStateContext = (): headerContextTypes => {
	const context = useContext(headerContext);

	if(!context) {
		throw new Error('useHeaderStateContext not found');
	}

	return context;
};

export const HeaderContextProvider = ({ children }: { children: ReactNode; }) => {
	return <UseHeaderContext>{children}</UseHeaderContext>;
};
