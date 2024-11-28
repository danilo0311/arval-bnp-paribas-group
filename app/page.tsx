import { Formulary } from "@/components/Formulary/Formulary";
import Image from "next/image";

export default function Home() {
	return (
		<section className="h-screen justify-center w-full flex flex-col items-center">
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
