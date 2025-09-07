import "./globals.css";
import "./extra-globals.css";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer/Footer";

export const metadata = {
	title: "A27 Web Lab | Tech Company",
	description:
		"@ A27 Web Lab we offer powerful digital solutions and web strategies",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{/* <PageTransition> */}
				{/* <Nav /> */}
				{children}
				{/* </PageTransition> */}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
