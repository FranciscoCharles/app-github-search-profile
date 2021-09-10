import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import { globalContext } from '../context'
import { useContext } from 'react';

export default function Home() {
	const context = useContext(globalContext);
	return (
		<>
			<Header setTheme={context.setTheme} />
			<Aside />
		</>
	)
}