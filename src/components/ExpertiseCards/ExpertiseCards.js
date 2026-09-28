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
		tagline: "Whole universes from one weird doodle",
		title: "Worldbuilding",
		href: "https://www.cardiocult.co/",
		link: "cardiocult.co",
		description:
			"We take a single strange idea and grow it into a full illustrated world, complete with rules, residents, and enough chaos to keep people digging.",
		image: "/images/expertise/expertise_card_4.jpg",
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
