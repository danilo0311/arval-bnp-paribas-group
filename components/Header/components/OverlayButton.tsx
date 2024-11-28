import { useHeaderStateContext } from "@/contexts/useHeaderStateContext";

export const OverlayButton = () => {

	const { isMobileMenuOpen, setMobileMenuOpen } = useHeaderStateContext();

	return (
		<button
			onClick={() => {
				if(isMobileMenuOpen) setMobileMenuOpen(false);
			}}
			className={`${ isMobileMenuOpen ? 'h-screen' : 'h-0' } overflow-hidden fixed !top-0 w-screen`}>
			<span

				className={`${ isMobileMenuOpen ? 'opacity-65 duration-1000 z-0' : 'opacity-0 z-[-1]' } absolute top-0 left-0 h-full w-full bg-black`}></span>
		</button>
	);

};