import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const bnppBoldSans = localFont({
	src: '../assets/fonts/BNPPSans-Bold.woff',
	weight: "100 900"
});

export const metadata: Metadata = {
	title: 'Arval BNP Paribans',
	metadataBase: new URL(`https://arval.bnp.paribas.daniloarancibia.es`),
	alternates: {
		canonical: '/',
		languages: { 'fr': '/fr' },
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${ bnppBoldSans.className } min-h-max relative flex flex-col justify-center items-center w-full overflow-x-hidden`}
			>
				<Header />
				<main
					className="min-h-max w-full max-md:px-3 md:px-6 max-xl:px-14 max-w-screen-xl max-lg:pt-14"
				>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
