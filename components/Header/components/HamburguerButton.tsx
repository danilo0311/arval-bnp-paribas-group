import { useHeaderStateContext } from "@/contexts/useHeaderStateContext";
import { IoMenu } from "react-icons/io5";
import { HiX } from "react-icons/hi";

export const HamburguerButton = () => {

	const { isMobileMenuOpen, setMobileMenuOpen } = useHeaderStateContext();

	return (
		<div className="w-full max-md:px-3 md:px-6 max-xl:px-14 relative z-[103]">
			<button
				onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
				className="flex justify-center items-center h-14 text-black lg:hidden">
				{isMobileMenuOpen ? <HiX size={'2rem'} /> : <IoMenu size={'2rem'} />}
			</button>
		</div>
	);

};