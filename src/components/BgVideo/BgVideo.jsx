"use client";

// Place liquid-ring.mp4 / liquid-ring.webm in your `public/` folder
// (e.g. public/videos/liquid-ring.mp4) and adjust the src paths below.

export default function BgVideo({ children }) {
	return (
		<div style={styles.wrapper}>
			<video
				style={styles.video}
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
			>
				<source
					src="/video/gradient1.mp4"
					type="video/mp4"
				/>
			</video>

			{/* Optional overlay for readable text on top of the video */}
			<div style={styles.overlay} />

			<div style={styles.content}>{children}</div>
		</div>
	);
}

const styles = {
	wrapper: {
		position: "relative",
		width: "100vw",
		height: "100vh",
		overflow: "hidden",
	},
	video: {
		position: "absolute",
		top: "50%",
		left: "50%",
		minWidth: "100%",
		minHeight: "100%",
		width: "auto",
		height: "auto",
		transform: "translate(-50%, -50%)",
		objectFit: "cover",
		zIndex: 0,
	},
	overlay: {
		position: "absolute",
		inset: 0,
		backgroundColor: "rgba(0, 0, 0, 0.35)",
		zIndex: 1,
	},
	content: {
		position: "relative",
		zIndex: 2,
		width: "100%",
		height: "100%",
	},
};
