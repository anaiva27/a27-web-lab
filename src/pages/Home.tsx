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
	color: black;
	z-index: 1;
	font-weight: 500;
	text-shadow: 1px 1px #000000;
	margin-bottom: 10px;
	@media (max-width: 600px) {
		margin-bottom: 10px;
	}
`;
const H2 = styled.h1`
	font-size: clamp(20px, 2vw, 40px);
	color: black;
	z-index: 1;
	font-weight: 100;
	margin-top: 2px;
`;
