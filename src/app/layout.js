import { Host_Grotesk, DM_Mono, Shadows_Into_Light } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
	variable: "--font-host-grotesk",
	subsets: ["latin"],
});

const dmMono = DM_Mono({
	variable: "--font-dm-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

const shadowsIntoLight = Shadows_Into_Light({
	variable: "--font-shadows-into-light",
	subsets: ["latin"],
	weight: "400",
});

export const metadata = {
	title: "A27 Web Lab | Software Company",
	description: "A27 Web Lab offers powerful websites that convert.",
	openGraph: {
		title: "A27 Web Lab | Software Company",
		description: "A27 Web Lab offers powerful websites that convert.",
		url: "https://www.a27weblab.com/",
		siteName: "A27 Web Lab | Software Company",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og-image.png", // Located in your /public folder
				width: 1200,
				height: 630,
				alt: "Preview image for A27 Web Lab",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${hostGrotesk.variable} ${dmMono.variable} ${shadowsIntoLight.variable}`}
		>
			<body>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
