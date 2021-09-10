import React, { useContext } from 'react';
import { globalContext } from '../../context';
import defaultImage from '../../asserts/avatar.png';
import {
	AvatarContainer,
	AvatarImg,
	Container,
	ContainerInfo,
	ContainerInfo2,
	TitleContainer,
	TextContainer,
	ValueContainer,
	DetailsContainer,
	BiographyContainer
} from './style';

interface PropDetails {
	title: string;
	value: number;
}
function Details(props: PropDetails) {
	return (
		<div>
			<DetailsContainer>
				<TitleContainer>
					<h1>{props.title}</h1>
				</TitleContainer>
				<ValueContainer>
					<h1>{props.value}</h1>
				</ValueContainer>
			</DetailsContainer>
		</div>
	);
}
interface PropsBiografy {
	text: string;
}
function Biography(props: PropsBiografy) {
	return (
		<BiographyContainer>
			<TitleContainer>
				<h1>Biography</h1>
			</TitleContainer>
			{
				(props.text !== undefined) &&
				<>
					<TextContainer>
						<p>{props.text}</p>
					</TextContainer>
				</>
			}
		</BiographyContainer>
	);
}

export default function Aside() {
	const context = useContext(globalContext);
	const user = context.userData
	return (
		<Container>
			<AvatarContainer>
				<AvatarImg src={user?.avatar_url || defaultImage} alt='avatar' />
				{(user.name) ?
					<>
						<h1>{user?.name}</h1>
						<h3>@{user?.login}</h3>
					</>
					: <h1>{user?.login}</h1>
				}
			</AvatarContainer>
			<ContainerInfo>
				<Biography text={user?.bio} />
				<ContainerInfo2>
					<Details title='Repositories' value={user?.public_repos} />
					<Details title='Followers' value={user?.followers} />
				</ContainerInfo2>
			</ContainerInfo>
		</Container>
	)
}