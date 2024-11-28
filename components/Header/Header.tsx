'use client';

import { HeaderContextProvider } from "@/contexts/useHeaderStateContext";
import { Logo } from "../Logo/Logo";
import { Menu } from "./components/Menu";
import { Links } from "./components/Links";

export const Header = () => {

	/**
	 ** Podría utilizar un resize observer junto a un estado para gestionar los 
	 ** cambios del ancho en escritorio y así cerrar el menu si esta abierto, pero hace falta el tiempo.
	 */

	return (
		<HeaderContextProvider>
			<header className="fixed flex justify-center backdrop-blur-[7px] h-14 top-0 w-full left-0 z-50">
				<nav className="max-lg:hidden flex items-center w-full h-full max-md:px-3 md:px-6 max-xl:px-14 max-w-screen-xl">
					<Logo />
					<Links />
				</nav>
				<Menu />
			</header>
		</HeaderContextProvider>
	);

};