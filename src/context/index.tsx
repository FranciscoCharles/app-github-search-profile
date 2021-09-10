import React, { useState, createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { light } from '../styles/Theme';

export interface User {
	login: string,
	avatar_url: string,
	name: string,
	bio: string,
	public_repos: number,
	followers: number,
	following: number,
}
export interface Repositore {

}
export interface ArrayRepositores extends Array<Repositore> {

}
interface Context {
	userData: User;
	userRepos: Repositore;
	setUserData: React.Dispatch<React.SetStateAction<User>>;
	setUserRepos: React.Dispatch<React.SetStateAction<ArrayRepositores>>;
	theme: DefaultTheme;
	setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

interface PropsContext {
	children: React.ReactNode;
}

export const globalContext = createContext({} as Context);

export const ContextProvider = (props: PropsContext) => {
	const [userData, setUserData] = useState({} as User);
	const [userRepos, setUserRepos] = useState([] as ArrayRepositores);
	const [theme, setTheme] = useState(light);

	return (
		<globalContext.Provider value={{
			userData,
			userRepos,
			setUserData,
			setUserRepos,
			theme,
			setTheme
		}}>
			{props.children}
		</globalContext.Provider>
	);
}