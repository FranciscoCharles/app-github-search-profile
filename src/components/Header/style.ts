import styled from 'styled-components';

export const LabelPage = styled.div`
	font-size: 24px;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	color: ${props => props.theme.colors.text};
`;

export const HeaderInputContainer = styled.div`
	padding: 10px 16px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HeaderInput = styled.input`
	width: 200px;
	height: 30px;
	border-radius: 15px;
	border: none;
	padding: 0 16px;
	color: #444;
	transition: .4s ease;
	&:focus {
		outline: none;
		width: 220px;
		transition: .4s ease;
	}
`;

export const HeaderSearchButton = styled.button`
	width: 30px;
	height: 30px;
	border-radius: 15px;
	border: none;
	background: rgb(130,130,130);
	margin-left: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFF;
	transition: ease .3s;
	&:hover {
		transform: scale(1.05);
		transition: ease .3s;
		cursor: pointer;
	}
`;

export const HeaderNavbar = styled.nav`
	position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px 0 20px;
  background-color: ${props => props.theme.colors.background};
	box-shadow: 0px 10px 7px -7px #828282;

	@media screen and (max-width: 523px){
		flex-wrap: nowrap;
		flex-direction: column;
		height: 120px;
		padding: 10px 0 10px 0;

		${HeaderInput}{
			width: 60vw;
		}
	}
`;


