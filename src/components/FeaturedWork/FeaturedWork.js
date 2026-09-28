"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import SectionNav from "@/components/SectionNav/SectionNav";
import SectionFooter from "@/components/SectionFooter/SectionFooter";
import styles from "./FeaturedWork.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARD_Y_OFFSET = 5;
const CARD_SCALE_STEP = 0.075;

const PROJECTS = [
	{
		name: "Cardio Cult",
		description:
			"We designed and developed a high-performing, high-converting platform for run clubs to monetize memberships, with 2-way sync automations and engaging gamification features that attract 50-100 new members per club each week.",
		tags: ["Frontend", "Automations"],
		image: "/images/featured-work/featured_work_1.png",
		color: "var(--base-400)",
	},
	{
		name: "Active Tulum",
		description:
			"We developed a modern website that mimics the experience of the original magazine, with content management capabilities and an email list sign-up.",
		tags: ["Frontend", "CMS"],
		image: "/images/featured-work/featured_work_3.png",
		color: "var(--base-800)",
	},
	{
		name: "Samadhi Retreats",
		description:
			"We created an attractive multipage website to convert visitors from social media ads into clients and followers, successfully filling all spaces in the current year's retreats.",
		tags: ["Frontend", "Web Strategy"],
		image: "/images/featured-work/featured_work_22.png",
		color: "var(--base-600)",
	},
	{
		name: "Footy Dreams",
		description:
			"We designed and developed a clean portfolio website with e-commerce elements to clearly convey the author's visual story while selling their products.",
		tags: ["Frontend", "CMS"],
		image: "/images/featured-work/featured_work_44.png",
		color: "var(--base-900)",
	},
];

export default function FeaturedWork() {
	const sectionRef = useRef(null);
	const cardsRef = useRef([]);

	useLenis(() => {
		ScrollTrigger.update();
	});

	useGSAP(
		() => {
			const section = sectionRef.current;
			const cards = cardsRef.current.filter(Boolean);
			if (!section || cards.length === 0) return;

			const totalCards = cards.length;
			const segmentSize = 1 / totalCards;

			// Match original init — only position + scale
			cards.forEach((card, i) => {
				gsap.set(card, {
					xPercent: -50,
					yPercent: -50 + i * CARD_Y_OFFSET,
					scale: 1 - i * CARD_SCALE_STEP,
				});
			});

			ScrollTrigger.create({
				trigger: section,
				start: "top top",
				end: () => `+=${window.innerHeight * 4}`,
				pin: true,
				pinSpacing: true,
				scrub: 1,
				invalidateOnRefresh: true,
				onUpdate: (self) => {
					const progress = self.progress;
					const activeIndex = Math.min(
						Math.floor(progress / segmentSize),
						totalCards - 1,
					);
					const segProgress =
						(progress - activeIndex * segmentSize) / segmentSize;

					cards.forEach((card, i) => {
						if (i < activeIndex) {
							gsap.set(card, {
								yPercent: -250,
								rotationX: 35,
							});
						} else if (i === activeIndex) {
							gsap.set(card, {
								yPercent: gsap.utils.interpolate(-50, -200, segProgress),
								rotationX: gsap.utils.interpolate(0, 35, segProgress),
								scale: 1,
							});
						} else {
							const behindIndex = i - activeIndex;
							gsap.set(card, {
								yPercent: -50 + (behindIndex - segProgress) * CARD_Y_OFFSET,
								rotationX: 0,
								scale: 1 - (behindIndex - segProgress) * CARD_SCALE_STEP,
							});
						}
					});
				},
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section
			className={styles.stickyCards}
			ref={sectionRef}
		>
			<div className={styles.sectionNav}>
				<SectionNav
					left="Roll Through"
					right="Smooth Sailing"
				/>
			</div>

			{PROJECTS.map((project, i) => (
				<article
					key={project.name}
					className={styles.card}
					style={{ backgroundColor: project.color }}
					ref={(el) => {
						cardsRef.current[i] = el;
					}}
				>
					<div className={styles.col}>
						<div className={styles.colTop}>
							<p className={`mono ${styles.tags} sm`}>
								{project.tags.join(" / ")}
							</p>
							<h6>{project.name}</h6>
						</div>
						<p className={styles.description}>{project.description}</p>
					</div>
					<div className={`${styles.col} ${styles.colMedia}`}>
						<img
							src={project.image}
							alt={project.name}
						/>
					</div>
				</article>
			))}

			<div className={styles.sectionFooter}>
				<SectionFooter
					left="Sharp expertise"
					right="Peak performance"
				/>
			</div>
		</section>
	);
}
