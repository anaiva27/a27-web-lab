import Copy from "@/components/Copy";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<div className="container">
				<div className="page-header">
					<Copy delay={0.3}>
						<Link href="/">BACK</Link> <br />
						<br />
						<h1>Projects coming soon</h1>
					</Copy>
				</div>
			</div>
		</>
	);
}
