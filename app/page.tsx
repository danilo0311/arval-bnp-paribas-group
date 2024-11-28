import { Formulary } from "@/components/Formulary/Formulary";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {

	try {

		return {
			title: 'Arval BNP Paribas',
			description: 'Découvrez les dernières actualités et informations d\'Arval BNP Paribas',
			keywords: [ 'Arval', 'BNP Paribas', 'entreprise française' ],
			authors: [ { name: 'Équipe Arval' } ],
			creator: 'Arval BNP Paribas',
			publisher: 'Arval BNP Paribas',
			alternates: {
				canonical: `https://arval.bnp.paribas.daniloarancibia.es`
			},
			openGraph: {
				title: 'Arval BNP Paribas',
				description: 'Découvrez les dernières actualités et informations d\'Arval BNP Paribas',
				url: 'https://arval.bnp.paribas.daniloarancibia.es',
				siteName: 'Arval BNP Paribas',
				images: [
					{
						url: 'https://arval.bnp.paribas.daniloarancibia.es/images/bnp-paribas-card.png',
						width: 1200,
						height: 630,
						alt: 'Arval BNP Paribas',
					}
				],
				locale: 'fr_FR',
				type: 'website'
			},
			twitter: {
				card: 'summary_large_image',
				title: 'Arval BNP Paribas',
				description: 'Découvrez les dernières actualités et informations d\'Arval BNP Paribas',
				images: [ '/images/bnp-paribas-card.png' ]
			}
		};
	} catch(error) {

		console.warn(error);
		return {};

	}
}

export default function Home() {
	return (
		<section className="min-h-screen h-screen justify-center w-full flex flex-col items-center">
			<div className="flex items-center max-lg:flex-col lg:flex-row-reverse py-6">
				<Image
					loading='lazy'
					width={500}
					height={300}
					className='max-h-96 lg:w-auto lg:-ml-7 max-lg:w-full lg:min-h-96 border-1 bg-cover lg:rounded-md max-lg:rounded-t-md'
					sizes={`100vw`}
					src={`/images/bkg_home.jpg`}
					alt=''
				/>
				<Formulary />
			</div>
		</section>
	);
}
