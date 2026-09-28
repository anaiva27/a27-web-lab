"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import styles from "./ExpertiseCards.module.css";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EXPERTISE = [
	{
		tagline: "Multi-user platform for run clubs to connect",
		title: "CardioCult",
		href: "https://www.cardiocult.co/",
		link: "cardiocult.co",
		description:
			"We designed and developed a high-performing, high-converting platform for run clubs to monetize memberships, with 2-way sync automations and engaging gamification features that attract 50-100 new members per club each week.",
		image: "/images/expertise/exp-1.png",
		color: "var(--base-800)",
	},
	{
		tagline: "Engaging, easy to manage online magazine.",
		title: "Active Tulum",
		href: "https://www.activetulum.com/",
		link: "activetulum.com",
		description:
			"We developed a modern website that mimics the experience of the original magazine, with content management capabilities and an email list sign-up.",
		image: "/images/expertise/exp-2.png",
		color: "var(--base-800)",
	},
	{
		tagline: "A coffee table bookA Global Visual Series by Cairo Salvatierra",
		title: "Footy Dreams",
		href: "https://www.footydreams.co/",
		link: "footydreams.co",
		description:
			"We designed and developed a clean portfolio website with e-commerce elements to clearly convey the author's visual story while selling their products.",
		image: "/images/expertise/exp-33.png",
		color: "var(--base-800)",
	},
	{
		tagline: "Welcome to women’s retreat at the magical land of Peru.",
		title: "Samadhi Retreats",
		href: "https://www.samadhi-sistarhood.com/",
		link: "samadhi-sistarhood.com",
		description:
			"We created an attractive multipage website to convert visitors from social media ads into clients and followers, successfully filling all spaces in the current year's retreats.",
		image: "/images/expertise/exp-4.png",
		color: "var(--base-800)",
	},
	{
		tagline: "Ford™ Motor Company sponsors college athletes in Texas",
		title: "Ford™ Player",
		href: "https://fordplayeroftheweek.com/",
		link: "fordplayeroftheweek.com",
		description:
			"Anastasia developed a portal (backend and frontend) for Ford™ to be able to manage a weekly submissions of athletes in Texas.",
		image: "/images/expertise/exp-5.png",
		color: "var(--base-800)",
	},
	{
		tagline: "Ford™ sponsors female college athletes in Texas",
		title: "Ford™ Athlete",
		href: "https://fordathleteofthemonth.com/",
		link: "fordathleteofthemonth.com",
		description:
			"Anastasia developed a portal (backend and frontend) for Ford™ to be able to manage a monthly submissions of female athletes in Texas.",
		image: "/images/expertise/exp-6.png",
		color: "var(--base-800)",
	},
	{
		tagline: "A 3D show-off project",
		title: "iPhone Ad Clone",
		href: "https://anaiva27.github.io/apple-clone/",
		link: "github/apple-clone.com",
		description:
			"Anastasia developed an interactive 3D playground to visualize an iPhone model in different colors and sizes.",
		image: "/images/expertise/exp-7.png",
		color: "var(--base-800)",
	},
	{
		tagline: "A Barre boutique studio in San Diego",
		title: "Beyond Barre",
		href: "https://beyond-barre.vercel.app/",
		link: "beyond-barre.app",
		description:
			"We created a website for a barre studio to highlight the benefits of the classes as well as it's coach.",
		image: "/images/expertise/exp-8.png",
		color: "var(--base-800)",
	},
];

export default function ExpertiseCards() {
	const sectionRef = useRef(null);
	const cardRefs = useRef([]);
	const cardInnerRefs = useRef([]);

	useLenis(() => {
		ScrollTrigger.update();
	});

	useGSAP(
		() => {
			const cards = cardRefs.current.filter(Boolean);
			const inners = cardInnerRefs.current.filter(Boolean);

			cards.forEach((card, index) => {
				if (index >= cards.length - 1) return;

				const cardInner = inners[index];
				if (!cardInner) return;

				gsap.fromTo(
					cardInner,
					{
						y: "0%",
						z: 0,
						rotationX: 0,
					},
					{
						y: "-50%",
						z: -250,
						rotationX: 45,
						scrollTrigger: {
							trigger: cards[index + 1],
							start: "top 85%",
							end: "top -75%",
							scrub: true,
							pin: card,
							pinSpacing: false,
						},
					},
				);

				gsap.to(cardInner, {
					"--after-opacity": 1,
					scrollTrigger: {
						trigger: cards[index + 1],
						start: "top 75%",
						end: "top -25%",
						scrub: true,
					},
				});
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section
			className={styles.stickyCards}
			ref={sectionRef}
		>
			{EXPERTISE.map((item, index) => (
				<div
					key={item.title}
					className={styles.card}
					ref={(el) => {
						cardRefs.current[index] = el;
					}}
				>
					<div
						className={styles.cardInner}
						style={{ backgroundColor: item.color }}
						ref={(el) => {
							cardInnerRefs.current[index] = el;
						}}
					>
						<div className={styles.cardInfo}>
							<p className="mono sm">{item.tagline}</p>
						</div>
						<div className={styles.cardTitle}>
							<h1>{item.title}</h1>
						</div>
						<div className={styles.cardDescription}>
							<Link
								href={item.href}
								target="_blank"
							>
								{item.link}{" "}
								<TiLocationArrow
									className={styles.arrow}
									aria-hidden="true"
								/>
							</Link>
						</div>
						<div className={styles.cardDescription}>
							<p>{item.description}</p>
						</div>
						<div className={styles.cardImg}>
							<img
								src={item.image}
								alt={item.title}
							/>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
