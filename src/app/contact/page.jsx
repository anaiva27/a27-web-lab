"use client";
import ContactCards from "@/components/ContactCards/ContactCards";
import SectionNav from "@/components/SectionNav/SectionNav";
import SectionFooter from "@/components/SectionFooter/SectionFooter";
import Callout from "@/components/Callout/Callout";
import styles from "./contact.module.css";
import Copy from "@/components/Copy/Copy";

export default function ContactPage() {
	return (
		<main className={styles.page}>
			<section className={styles.hero}>
				<Copy
					animateOnScroll={false}
					delay={1.125}
				>
					<h1>
						We Would Love to Chat
						<Callout
							className={styles.calloutDesktop}
							label="Say Hello"
							rotation={20}
							top="0em"
							right="0.25em"
							variant={3}
						/>
						<Callout
							className={styles.calloutMobile}
							label="Cards Below"
							rotation={-15}
							top="-.2em"
							left="-0.8em"
							variant={1}
						/>
					</h1>
				</Copy>

				<div className={styles.sectionFooter}>
					<SectionFooter
						left={
							<Copy
								variant="scramble"
								animateOnScroll={false}
								delay={1.25}
							>
								<span>Let's connect</span>
							</Copy>
						}
						right={
							<Copy
								variant="scramble"
								animateOnScroll={false}
								delay={1.25}
							>
								<span>Don't be shy</span>
							</Copy>
						}
					/>
				</div>
			</section>

			<ContactCards />
		</main>
	);
}
