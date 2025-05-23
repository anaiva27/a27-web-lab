import { styled } from "styled-components";
import { SplineScene } from "../components/SplineScene";
const Home = () => {
	return (
		<Wrapper>
			<H1>A27 Web Lab</H1>
			<H2>Flexible Digital Solutions</H2>
			<H2>Beautifully Made</H2>
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
	color: black;
	z-index: 1;
	font-weight: 600;
	text-shadow: 1px 1px #000000;
`;
const H2 = styled.h1`
	font-size: clamp(30px, 3vw, 50px);
	color: black;
	z-index: 1;
	font-weight: 200;
	margin-top: 10px;
`;
