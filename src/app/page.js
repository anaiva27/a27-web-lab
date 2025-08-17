"use client";
import Copy from "@/components/Copy";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
	useGSAP(() => {
		let tl = gsap.timeline({
			defaults: { ease: "power4.inOut" },
		});
		tl.to(".wrapper-main", { delay: 0.5, duration: 0.1, opacity: 1 })
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
	});

	return (
		<>
			<div className="wrapper-main ">
				<div className="corner-left-b">
					<p className="plain-text soft-p-text">A27</p>
				</div>
				<div className="corner-left-t">
					<p className="plain-text soft-p-text">A27</p>
				</div>
				<div className="corner-right-b">
					<p className="plain-text soft-p-text">10:00am | 08 | 09 | 2025</p>
				</div>
				<div className="center-t spiral-bg">
					<p className="plain-text soft-p-text">360 Degree Approach</p>
				</div>
				<div className="toggle-container">
					<div className="chip2">
						<p className="plain-text soft-p-text">copy email</p>
					</div>
					<div className="theme-switch">
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
					</div>
				</div>
				<div className="center-b">
					<p className="plain-text soft-p-text">Premium Digital Lab</p>
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
							<br />
						</p>
					</div>
				</div>

				<div className="container-center">
					<h1 className="logo-text soft-text header">A27 Web Lab</h1>
					<h5 className="subtitle soft-h-text text-dark header">
						Digital Design
						<div className="vertical-line header"></div>
						Development
					</h5>
					<br />
					<p className="plain-text soft-p-text header">
						Your online presence deserves an upgrade. We’re here to make it
						happen.
						<br />
						We create custom designs, so you can look amazing online and feel
						proud every time you see it. <br />
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
								<h5 className="subtitle soft-h-text text-dark">01 PROJECT</h5>
							</Link>
						</div>
						<div className="project-container project">
							<Link href="/contact">
								<h5 className="subtitle soft-h-text text-dark">02 PROJECT</h5>
							</Link>
						</div>
						<div className="project-container project">
							<Link href="/contact">
								<h5 className="subtitle soft-h-text text-dark">03 PROJECT</h5>
							</Link>
						</div>
						<div className="project-container project">
							<Link href="/contact">
								<h5 className="subtitle soft-h-text text-dark">04 PROJECT</h5>
							</Link>
						</div>
					</div>
				</div>

				<div
					className="toast"
					id="toast"
				>
					Submitted Successfully!
				</div>
			</div>
		</>
	);
}
