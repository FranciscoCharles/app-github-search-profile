import styled from 'styled-components';

export const Container = styled.div`
	
  height: 90%;
	width: 100%;
  display: flex;
  flex-direction: column;
	align-items: center;
	
`
export const AvatarContainer = styled.div`

	margin: 30px auto;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: center;

	@media screen and (max-width: 257px){
		& > h1{
			font-size: 15px;
		}
	}

	
`
export const AvatarImg = styled.img`
	
	height: 150px;
	width: 150px;
	border-radius: 50%;
	padding: 10px;
	${props => props.theme.neumorphism};

`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	& h1{
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
		color: ${props => props.theme.colors.text};
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 50vw;
	min-width: 200px;
	& p{
		text-align: justify;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
		margin: auto 20px;
	}
`;
export const ValueContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 50vw;
	min-width: 200px;
	& h1{
		font-weight: bold;
		text-align: justify;
		font-family: Arial, Helvetica, sans-serif;
		color: ${props => props.theme.details.number};
	}
`;
export const BiographyContainer = styled.div`
	margin: auto 20px;
	min-width: 200px;
	${TitleContainer}{
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background: ${props => props.theme.colors.background};
	}
	${TextContainer}{
		padding: 30px 0;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		background: ${props => props.theme.details.background};
		color: ${props => props.theme.details.number};
	}
`;
export const DetailsContainer = styled.div`

	width: 250px;
	${TitleContainer}{
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background: ${props => props.theme.colors.background};
	}
	${ValueContainer}{

		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		background: ${props => props.theme.details.background};
		color: ${props => props.theme.details.number};
	}
`;
export const ContainerInfo = styled.div`
	display: flex;
  align-items: center;
	flex-wrap: wrap;

	@media screen and (max-width: 600px){
		flex-wrap: nowrap;
		flex-direction: column;
		
		${BiographyContainer}{
			width:80vw;
			margin-bottom: 20px;
			& > ${TitleContainer}{
				max-width: 80vw;
			}
			& > ${TextContainer}{
				max-width: 80vw;
				min-width:0;
			}
		}
	}
		@media screen and (max-width: 247px){
			max-width:100vw;
			padding:0;
			margin:0;

			${BiographyContainer}{
				min-width: 0;
				
				& > ${TitleContainer} h1{
					font-size: 10vw;
			}
				& > ${TextContainer}{
					font-size: 10vw;
				}
		}
	}
`;
export const ContainerInfo2 = styled.div`
	
  display: flex;
  flex-direction: column;
	align-items: center;
	justify-items: center;
	margin-bottom: 20px;
	
	& > :nth-child(1){
		margin-bottom: 5px;
	}

	& > :nth-child(2){
		padding-top: 5px;
	}
	@media screen and (max-width: 500px){
		${DetailsContainer}{
			min-width: 0;
			width: 80vw;
			& > ${ValueContainer}, & > ${TitleContainer}{
				max-width: 80vw;
				min-width: 0;
			}
		}
	}

	@media screen and (max-width: 300px){
		
		${DetailsContainer}{
			& > ${ValueContainer}, & > ${TitleContainer}{
				font-size: 10px;
				min-width: 0;
			}
		}
	}
	@media screen and (max-width: 160px){
		
		${DetailsContainer}{
			& > ${ValueContainer}, & > ${TitleContainer}{
				font-size: 5vw;
			}
		}
	}
`;