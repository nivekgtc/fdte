/* eslint-disable no-use-before-define */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/translate/en.json';
import ptBR from './assets/translate/ptbr.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en,
	'pt-BR': ptBR,
};

type DefaultLocale = typeof resources.en.translation;

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends object> = {
	[TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
		TObj[TKey],
		`${TKey}`
	>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
	[TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
		TObj[TKey],
		`['${TKey}']` | `.${TKey}`
	>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
	TValue,
	Text extends string
> = TValue extends any[]
	? Text
	: TValue extends object
	? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
	: Text;

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'pt-BR', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
		fallbackLng: 'en',
	});

export default i18n;
