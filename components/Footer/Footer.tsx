export const Footer = () => {

	return (
		<footer className="bg-secondary-brown flex items-center lg:justify-center max-lg:py-3 min-h-max h-14 w-full mt-20 max-lg:mt-14">
			<nav className="w-full max-w-screen-xl  max-md:px-3 md:px-6 max-xl:px-14 font-sans text-sm h-full list-none max-lg:gap-y-4 max-lg:flex-wrap lg:flex items-center justify-center lg:gap-x-4">
				<li>
					<a href="#questions-frequentes">Questions Fréquentes</a>
				</li>
				<li>
					<a href="#mentions-légales">Mentions Légales</a>
				</li>
				<li>
					<a href="#politique-de-confidentialite-e-cookies">Politique de confidentialité et de cookies</a>
				</li>
				<li>
					<a href="#conditions-generales">Conditions Générales</a>
				</li>
			</nav>
		</footer>
	);

};