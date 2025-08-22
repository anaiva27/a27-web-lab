"use client";
import Copy from "@/components/Copy";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const messageArray = [
	". Web Design . Development .",

	". Creative . Functional .",

	". Websites . Apps .",

	". Custom Code . Scalable .",

	". UI / UX . Seamless .",

	". Future-Ready . Reliable .",

	". Digital Strategy . Growth .",

	". Branding . Design .",

	". Innovative . Intuitive .",

	". Dynamic . Powerful .",
];

export default function Page() {
	const [step, setStep] = useState(0);
	const [theme, setTheme] = useState(true);

	useEffect(() => {
		if (!theme) {
			console.log("theme", theme);

			if (document.body.getAttribute("data-theme") === "dark") {
				document.body.removeAttribute("data-theme");
			} else {
				document.body.setAttribute("data-theme", "dark");
			}
		}
	}, [theme]);

	// themeToggle?.addEventListener("change", () => {
	// 	if (document.body.getAttribute("data-theme") === "dark") {
	// 		document.body.removeAttribute("data-theme");
	// 	} else {
	// 		document.body.setAttribute("data-theme", "dark");
	// 	}
	// });

	useEffect(() => {
		const interval = setInterval(() => {
			setStep((step) => {
				if (step === messageArray.length - 1) {
					return 0;
				}
				return step + 1;
			});
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	//   const currentStep = Math.min(step, iconArray.length - 1);

	useGSAP(() => {
		let tlBlocks = gsap.timeline({
			defaults: { ease: "power4.inOut" },
		});
		tlBlocks
			.to(".wrapper-main", { delay: 0.8, duration: 0.1, opacity: 1 })
			.to(
				".header",
				{ delay: 2, stagger: 0.1, duration: 1, opacity: 1, y: 0 },
				"-=2"
			)
			.to(
				".project",
				{ delay: 1, stagger: 0.2, duration: 1.2, opacity: 1, y: 0 },
				"-=2"
			)
			.to(
				".aside",
				{ delay: 0.2, stagger: 0.2, duration: 1.2, opacity: 1, y: 0 },
				"-=2"
			);

		let tlColor = gsap.timeline({ repeat: -1, yoyo: true });

		tlColor.from(".wrapper-main", {
			background: "linear-gradient(145deg, #77a4f2dc, #4eeded94)",
			duration: 5,
		});
		// .to(".wrapper-main", {
		// 	background: "linear-gradient(145deg, #77a4f2dc, #4eeded94)",
		// 	duration: 5,
		// })
		// .to(".wrapper-main", {
		// 	background:
		// 		"linear-gradient(145deg, #d1d7f3dc, rgba(200, 246, 246, 0.582)",
		// 	duration: 5,
		// });
		let tlTextColor = gsap.timeline({ repeat: -1, yoyo: true });

		tlTextColor.from(".text-color", {
			color: "#5289e8dc",
			duration: 5,
		});
		// .to(".text-color", {
		// 	color: "#5289e8dc",
		// 	duration: 5,
		// })
		// .to(".text-color", {
		// 	color: "#bfd3f2",
		// 	duration: 5,
		// });
	});

	return (
		<>
			<div className="wrapper-main ">
				<div className="corner-left-b">
					<p className="plain-text soft-p-text">A27 .</p>
				</div>
				<div className="corner-left-t">
					<p className="plain-text soft-p-text">A27 .</p>
				</div>
				<div className="corner-right-b">
					<p className="plain-text soft-p-text">10:00am | 08 | 09 | 2025</p>
				</div>
				<div className="center-t spiral-bg">
					<p className="plain-text soft-p-text">. 360 Degree Approach .</p>
				</div>
				<div className="toggle-container">
					<div className="chip2">
						<p className="plain-text soft-p-text">copy email</p>
					</div>
					{/* <div
						className="theme-switch"
						onClick={() => setTheme(!theme)}
					>
						<input
							type="checkbox"
							id="themeToggle"
						/>
						<label
							className="theme-btn"
							htmlFor="themeToggle"
						>
							<i className="fas fa-moon"></i>
						</label>
					</div> */}
				</div>
				<div className="center-b">
					<p className="plain-text soft-p-text">. Premium Digital Lab .</p>
				</div>
				<div className="horizontal-line-t"></div>
				<div className="horizontal-line-b"></div>

				<div className="aside-left">
					<div className="container-left-t">
						<p className="plain-text soft-p-text aside">
							Web App
							<br />
							Mobile App <br />
							3D Graphics
							<br />
							<br />
						</p>
						<p className="plain-text soft-p-text aside">
							<span className="hide-mobile">
								Simple
								<br />
								or
								<br />
								Complex
							</span>
						</p>
					</div>

					<div className="container-left-b">
						<br />
						<p className="plain-text soft-p-text aside">
							Professional
							<br />
							Effective
							<br />
							Clean designs <br />
							<br />
						</p>
					</div>
				</div>

				<div className="container-center-t">
					<h1 className="logo-text soft-text header text-color">A27 Web Lab</h1>
					<Copy isUpdated={step}>
						<h5 className="subtitle soft-h-text text-color header">
							{messageArray[step]}
						</h5>
					</Copy>
					<p className="plain-text soft-p-text header mobile-hide">
						Your online presence deserves an upgrade. We’re here to make it
						happen.
						<br />
						We create custom designs, so you can look amazing online and feel
						proud every time you see it. <br />
						<br />
					</p>
					<p className="plain-text soft-p-text header desktop-hide">
						We create custom designs, so you can look amazing online <br /> and
						feel proud every time you see it.
						<br />
					</p>
					<div className="chip header">
						<p className="plain-text soft-p-text">send inquiry</p>
					</div>
				</div>
				<div className="aside-right">
					<div className="container-right">
						<div className="project-container project">
							<Link href="/contact">
								<h5 className="subtitle soft-h-text text-color">01 PROJECT</h5>
							</Link>
						</div>
						<div className="project-container project">
							<Link href="/contact">
								<h5 className="subtitle soft-h-text text-color">02 PROJECT</h5>
							</Link>
						</div>
						<div className="project-container project">
							<Link href="/contact">
								<h5 className="subtitle soft-h-text text-color">03 PROJECT</h5>
							</Link>
						</div>
						<div className="project-container project">
							<Link href="/contact">
								<h5 className="subtitle soft-h-text text-color">04 PROJECT</h5>
							</Link>
						</div>
					</div>
				</div>

				{/* <div
					className="toast"
					id="toast"
				>
					Submitted Successfully!
				</div> */}
			</div>
		</>
	);
}
