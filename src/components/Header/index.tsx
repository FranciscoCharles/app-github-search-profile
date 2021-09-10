import React, { useState, useContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import Switch from "react-switch";
import { light, dark } from '../../styles/Theme';
import { globalContext } from '../../context';
import Api from '../../services';
import { User, ArrayRepositores } from '../../context';
import {
	HeaderNavbar,
	LabelPage,
	HeaderInputContainer,
	HeaderInput,
	HeaderSearchButton
} from './style';

interface PropsHeader {
	setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export default function Header(props: PropsHeader) {

	const { setTheme } = props;
	const context = useContext(globalContext);
	const [check, setCheck] = useState(false);
	const [search, setSearch] = useState('');

	async function getUserData() {
		try {
			const response = await Api.get(`/${search}`);
			const repos = await Api.get(`/${search}/repos`);

			context.setUserData(response.data);
			context.setUserRepos(repos.data);
		} catch (err) {
			context.setUserData({} as User);
			context.setUserRepos([] as ArrayRepositores);
		}
	}
	function toggleTheme() {
		setCheck((check: boolean) => !check);
		setTheme((theme: DefaultTheme) => theme.title === 'light' ? dark : light);
	}

	return (
		<HeaderNavbar>
			<LabelPage>
				Git Profiler
			</LabelPage>
			<HeaderInputContainer>
				<HeaderInput type="text" value={search} onChange={e => setSearch(e.target.value)}
					onKeyDown={e => { (e.code === 'Enter') && getUserData() }} />
				<HeaderSearchButton onClick={getUserData}>
					<FiSearch size={15} />
				</HeaderSearchButton>
			</HeaderInputContainer>
			<Switch
				onChange={toggleTheme}
				checked={check}
				width={80} height={20}
				uncheckedIcon={false}
				checkedIcon={false}
				onColor='#888888'
			/>
		</HeaderNavbar>
	)
}