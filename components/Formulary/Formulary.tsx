'use client';

import { FormularyContextProvider } from "@/contexts/useFormularyStateContext";
import { Form } from "./components/Form";

export const Formulary = () => {

	return (
		<FormularyContextProvider>
			<div className="relative z-10 duration-300 bg-secondary-green lg:min-h-56 lg:mt-12 max-lg:w-full lg:w-[36rem] max-w-3xl flex flex-col pt-12 pb-7 max-md:px-7 md:px-10 xl:px-20">
				<div className="text-3xl font-bold uppercase leading-7">
					<p>DÉCOUVREZ</p>
					<p>VOTRE CADEAU</p>
				</div>
				<p className="font-bnpp mt-2">Entrez votre code et chaisissez votre cadeau</p>
				<Form />
			</div>
		</FormularyContextProvider>
	);

};