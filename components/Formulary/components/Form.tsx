import { useFormularyStateContext } from "@/contexts/useFormularyStateContext";
import { verifyCode } from "@/lib/utils";
import { Notify } from "./Notify";
import { useState } from "react";

export const Form = () => {

	const {
		code,
		setCode,
		isSubmitButtonEnabled,
		setSubmitButtonEnabled
	} = useFormularyStateContext();

	const [ hasFocus, setHasFocus ] = useState<boolean>(true);

	return (
		<div className="flex gap-3 mt-2 flex-wrap lg:inline-flex max-lg:flex-col">
			<input
				onBlur={() => setHasFocus(false)}
				onChange={(e) => {

					const code = e.currentTarget.value;
					const isValid = verifyCode({ code }).isValid;

					setCode(verifyCode({ code }));
					setSubmitButtonEnabled(isValid);

				}}
				onFocus={() => setHasFocus(true)}
				type="text"
				className="max-lg:w-full lg:w-1/2 max-lg:py-2 max-w-xs font-bnpp placeholder:text-sm placeholder:text-primary-brown text-primary-brown py-1 px-2 rounded-md"
				placeholder="Code Cadeau" />
			{!hasFocus && <Notify data={code} />}
			<button
				onClick={() => { console.log('hello'); }}
				disabled={!isSubmitButtonEnabled}
				title="Découvrez"
				className={`${ isSubmitButtonEnabled ? 'bg-primary-green active:cursor-default active:opacity-75 cursor-pointer' : 'bg-gray-400' } w-max px-4 py-2 rounded-md`}>
				Découvrez
			</button>
		</div>
	);

};