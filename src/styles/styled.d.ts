import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			primary: string;
			secundary: string;
			background: string;
			text: string;
		},
		details: {
			background: string,
			number: string;
		},
		neumorphism: {
			background: string;
			'box-shadow': string;
		}

	}
}