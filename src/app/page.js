"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import Copy from "@/components/Copy";
import { useEffect, useRef, useState } from "react";
import Menu from "@/components/Menu/Menu";
import Spotlight from "@/components/Spotlight/Spotlight";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer/Footer";

const messageArray = [
	"Custom Code. Scalable.",
	"Web Design. Development.",
	"Creative. Functional.",
	"Websites. Apps.",
	"UI / UX. Seamless.",
	"Future-Ready. Reliable.",
	"Branding. Design.",
	"Innovative. Intuitive.",
	"Dynamic. Powerful.",
];

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

export default function Page() {
	const [step, setStep] = useState(0);
	const [toggleMenu, setToggleMenu] = useState();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const scrollTriggerRef = useRef(null);

	useEffect(() => {
		window?.scrollTo({ top: 0 });
		setIsMobile(window?.innerWidth <= 1000);
	}, []);

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

	useGSAP(() => {
		const isMobile = window?.innerWidth <= 1000;
		gsap.to(".main-wrapper", { autoAlpha: 1 });
		CustomEase.create("hop", ".8, 0, .3, 1");
		const splitTextElements = (
			selector,
			type = "words,chars",
			addFirstChar = false
		) => {
			const elements = document.querySelectorAll(selector);

			elements.forEach((element) => {
				const splitText = new SplitText(element, {
					type,
					wordsClass: "word",
					charsClass: "char",
				});

				if (type.includes("chars")) {
					splitText.chars.forEach((char, index) => {
						const originalText = char.textContent;
						char.innerHTML = `<span>${originalText}</span>`;

						if (addFirstChar && index === 0) {
							char.classList.add("first-char");
						}
					});
				}
			});
		};
		console.log("isMob", isMobile);

		splitTextElements(".intro-title h1", "words, chars", true);
		splitTextElements(".outro-title h1");
		splitTextElements(".tag p", "words");
		splitTextElements(".card h1", "words, chars", true);

		gsap.set(
			[
				".split-overlay .intro-title .first-char span",
				".split-overlay .outro-title .char span",
			],
			{ y: "0%" }
		);

		gsap.set(".split-overlay .intro-title .first-char", {
			x: isMobile ? "7.5rem" : "18rem",
			y: isMobile ? "-1rem" : "-2.75rem",
			fontWeight: "900",
			scale: 0.75,
		});

		gsap.set(".split-overlay .outro-title .char", {
			x: isMobile ? "-3rem" : "-8rem",
			fontSize: isMobile ? "6rem" : "14rem",
			fontWeight: "500",
		});

		const tl = gsap.timeline({ defaults: { ease: "hop" } });
		const tags = gsap.utils.toArray(".tag");

		tags.forEach((tag, index) => {
			tl.to(
				tag.querySelectorAll("p .word"),
				{
					y: "0%",
					duration: 0.75,
				},
				0.5 + index * 0.1
			);
		});

		tl.to(".main-wrapper", {
			position: "fixed",
			top: 0,
		})
			.to(
				".preloader .intro-title .char span",
				{
					y: "0%",
					duration: 0.75,
					stagger: 0.05,
					opacity: 1,
				},
				0.5
			)
			.to(
				".preloader .intro-title .char:not(.first-char) span",
				{
					y: "100%",
					duration: 0.75,
					stagger: 0.05,
				},
				2
			)
			.to(
				".preloader .outro-title .char span",
				{
					y: "0%",
					duration: 0.75,
					stagger: 0.075,
				},
				2.5
			)
			.to(
				".preloader .intro-title .first-char",
				{
					x: isMobile ? "5rem" : "11.25rem",
					duration: 1,
				},
				3.5
			)
			.to(
				".preloader .outro-title .char",
				{
					x: isMobile ? "-3rem" : "-8rem",
					duration: 1,
				},
				3.5
			)
			.to(
				".preloader .intro-title .first-char",
				{
					x: isMobile ? "4rem" : "10rem",
					y: isMobile ? "-1.2rem" : "-2.85rem",
					fontWeight: "900",
					scale: 0.75,
					duration: 0.75,
				},
				4.5
			)
			.to(
				".preloader .outro-title .char",
				{
					x: isMobile ? "-3rem" : "-8rem",
					fontSize: isMobile ? "6rem" : "14rem",
					fontWeight: "500",
					duration: 0.75,
					onComplete: () => {
						gsap.set(".preloader", {
							clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
						});
						gsap.set(".split-overlay", {
							clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
						});
					},
				},
				4.5
			)
			.to(
				".container",
				{
					clipPath: "polygon(0% 48%, 100% 48%, 100% 52%, 0% 52%)",
					duration: 1,
				},
				5
			);

		tags.forEach((tag, index) => {
			tl.to(
				tag.querySelectorAll("p .word"),
				{
					y: "100%",
					duration: 0.75,
				},
				5.5 + index * 0.1
			);
		});

		tl.to(
			[".preloader", ".split-overlay"],
			{
				y: (i) => (i === 0 ? "-50%" : "50%"),
				duration: 1,
			},
			6
		)
			.to(
				".container",
				{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					duration: 1,
				},
				6
			)
			.to(
				".container .card",
				{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					duration: 0.75,
				},
				6.25
			)
			.to(
				".container .card h1 .char span",
				{
					y: "0%",
					duration: 0.75,
					stagger: 0.05,
				},
				6.5
			)
			.to(
				[".preloader", ".split-overlay", ".tag-overlay"],
				{
					opacity: 0,
					delay: 1,
				},
				5
			)
			.to(".main-wrapper", {
				position: "relative",
				top: "unset",
			});

		gsap.to(".hero-img", {
			scrollTrigger: {
				trigger: ".container",
				start: "bottom 80%",
				end: "bottom top",
				toggleActions: "play none none reverse",
				scrub: 1,
			},
			filter: "blur(10px)",
			scale: 1.3,
		});
		gsap.to(".card", {
			scrollTrigger: {
				trigger: ".container",
				start: "bottom 80%",
				end: "bottom top",
				toggleActions: "play none none reverse",
				scrub: 1,
			},
			scale: 1.1,
		});
	});

	return (
		<section className="main-wrapper">
			<Menu
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<div className="preloader">
				<div className="intro-title">
					<h1> A27 Web Lab </h1>
				</div>
				<div className="outro-title">
					<h1>27</h1>
				</div>
			</div>

			<div className="split-overlay">
				<div className="intro-title">
					<h1> A27 Web Lab </h1>
				</div>
				<div className="outro-title">
					<h1>27</h1>
				</div>
			</div>

			<div className="tags-overlay">
				<div className="tag tag-1">
					<p>Future-Ready</p>
				</div>
				<div className="tag tag-2">
					<p>Design</p>
				</div>
				<div className="tag tag-3">
					<p>Development</p>
				</div>
			</div>

			<div className="container">
				<nav>
					<p id="logo">A27</p>
					<p
						id="menu"
						onClick={() => setIsMenuOpen((prev) => !prev)}
					>
						Menu
					</p>
				</nav>

				<div className="hero-img">
					{isMobile ? (
						<img
							src="/main-bg-mobile.png"
							alt=""
						/>
					) : (
						<img
							src="/main-bg.png"
							alt=""
						/>
					)}
				</div>

				<div className="card">
					<Copy isUpdated={step}>
						<h2 className="subtitle ">{messageArray[step]}</h2>
					</Copy>
					<Copy>
						<h1 className="headline ">A27-WEB-LAB.</h1>
					</Copy>
					<p className="body-text ">
						We create custom designs, so you can look amazing online and <br />
						feel proud every time you see it.
					</p>
					<div className="button-wrapper">
						<div className="chip">send inquiry</div>
						<div className="chip2">works demo</div>
					</div>
					{/* <div className="card-aside-raised"></div> */}
				</div>

				<footer>
					<p>Premium Digital Lab</p>
					<p>Made by A27-Web-Lab</p>
				</footer>
			</div>
			<Spotlight />
			<Footer />
		</section>
	);
}
