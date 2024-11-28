import Link from "next/link";

export const Logo = () => {

	return (
		<Link
			href="/"
			className="h-full w-auto flex items-center"
		>
			<span
				style={{ backgroundImage: `url('/images/logo.png')` }}
				className="bg-contain bg-center bg-no-repeat block h-20 w-36">
			</span>
		</Link>
	);

};