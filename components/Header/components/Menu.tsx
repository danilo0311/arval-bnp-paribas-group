import { useHeaderStateContext } from "@/contexts/useHeaderStateContext";
import { HamburguerButton } from "./HamburguerButton";
import { OverlayButton } from './OverlayButton';
import { Links } from "./Links";

export const Menu = () => {

	const { isMobileMenuOpen } = useHeaderStateContext();

	return (
		<div className={`relative lg:hidden flex flex-col w-full ${ isMobileMenuOpen ? 'h-screen' : 'h-full' }`}>
			<HamburguerButton />
			<div className={`${ isMobileMenuOpen ? 'duration-300' : '-translate-x-96' } bg-white absolute z-[102] top-0 h-screen w-56`}>
				<nav className="flex flex-col pt-20 text-primary-brown list-none pl-4 font-medium font-open-sans">
					<Links />
				</nav>
			</div>
			<OverlayButton />
		</div>
	);

};