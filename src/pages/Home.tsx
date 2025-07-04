import { styled } from "styled-components";
import { SplineScene } from "../components/SplineScene";
const Home = () => {
	return (
		<Wrapper>
			<Logo>A27</Logo>
			<H3>MENU</H3>
			<H2 id="firstChild">Flexible Digital Solutions</H2>
			<H2>Beautifully Made</H2>
			{/* <H2>By</H2> */}
			<H1>A27 Web Lab</H1>
			<Bg3D>
				<SplineScene />
			</Bg3D>
		</Wrapper>
	);
};

export default Home;

const Wrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fefefeed;
	@media (max-width: 600px) {
		justify-content: flex-start;
		padding-top: 100px;
	}
`;
const Bg3D = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 0;
`;
const H1 = styled.h1`
	font-size: clamp(50px, 7vw, 140px);
	color: white;
	z-index: 1;
	font-weight: 500;
	text-shadow: 2px 2px #000000;
	margin-bottom: 10px;
	background-color: #00000051;
	border-radius: 15px;
	padding: 15px;
	@media (max-width: 600px) {
		margin-bottom: 10px;
	}
`;
const H2 = styled.h1`
	font-size: clamp(17px, 1.5vw, 40px);
	color: white;
	z-index: 1;
	font-weight: 100;
	text-shadow: 2px 2px #000000;
	background-color: #00000051;
	padding: 0 2px;
	border-radius: 5px;
	text-transform: uppercase;
	letter-spacing: 2.1px;
	&#firstChild {
		margin-top: -120px;
	}

	@media (max-width: 600px) {
		&#firstChild {
			margin-top: 120px;
		}
	}
`;
const H3 = styled.h2`
	font-size: clamp(15px, 1vw, 20px);
	color: white;
	z-index: 1;
	font-weight: 100;
	text-shadow: 2px 2px #000000;
	background-color: #00000051;
	padding: 0 2px;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	right: 50px;
`;
const Logo = styled.h2`
	font-size: clamp(15px, 1vw, 20px);
	color: white;
	z-index: 1;
	font-weight: 100;
	text-shadow: 2px 2px #000000;
	background-color: #00000051;
	padding: 0 2px;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	left: 40px;
`;
