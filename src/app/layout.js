import "./globals.css";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";

export const metadata = {
	title: "A27 Web Lab | Tech Company",
	description:
		"@ A27 Web Lab we offer powerful digital solutions and web strategies",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<PageTransition>
					{/* <Nav /> */}
					{children}
				</PageTransition>
			</body>
		</html>
	);
}
