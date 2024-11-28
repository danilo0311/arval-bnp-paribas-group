'use client';

import { useState } from "react";

export const Formulary = () => {

	const [ isCodeValid, setCodeIsValid ] = useState<boolean>(false);

	return (
		<div className="relative z-10 duration-300 bg-secondary-green lg:min-h-56 lg:mt-12 max-lg:w-full lg:w-[36rem] max-w-3xl flex flex-col pt-12 pb-7 max-md:px-7 md:px-10 xl:px-20">
			<div className="text-3xl font-bold uppercase leading-7">
				<p>DÉCOUVREZ</p>
				<p>VOTRE CADEAU</p>
			</div>
			<p className="font-bnpp mt-2">Entrez votre code et chaisissez votre cadeau</p>
			<div className="flex gap-3 mt-2 flex-wrap lg:inline-flex max-lg:flex-col">
				<input
					onChange={(e) => {
						console.log(e.currentTarget.value);
					}}
					type="text"
					className="max-lg:w-full lg:w-1/2 max-lg:py-2 max-w-xs font-bnpp placeholder:text-sm placeholder:text-primary-brown text-primary-brown py-1 px-2 rounded-md"
					placeholder="Code Cadeau" />
				<button
					disabled={!isCodeValid}
					title="Découvrez"
					className={`${ !isCodeValid ? 'bg-gray-400' : 'active:cursor-default active:opacity-75 cursor-pointer' } w-max bg-primary-green px-4 py-2 rounded-md`}>
					Découvrez
				</button>
			</div>
		</div>
	);

};