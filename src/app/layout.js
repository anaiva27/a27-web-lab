import "./globals.css";
import "./extra-globals.css";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer/Footer";

export const metadata = {
	title: "A27 Web Lab | Tech Company",
	description:
		"@ A27 Web Lab we offer powerful websites and web strategies that convert visitors to clients to bring you more sales, trust and prosperity.",
	other: {
		"trustpilot-one-time-domain-verification-id": "YOUR_VERIFICATION_ID",
	},
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
