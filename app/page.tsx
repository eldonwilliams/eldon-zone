import Typography from "@/components/Typography";
import Header from "./components/Header";
import Card from "@/components/Card/Card";
import HorizontalGroup from "@/components/HorizontalGroup";
import Link from "next/link";
import TypographyGroup from "@/components/TypographyGroup";

export default function Home() {
	return (
		<>
			<Header />
			<main className="m-5 min-h-screen justify-center flex">
				<div className="max-w-[500px] flex flex-col gap-3">
					<Typography bold>I like computer science, math, and random facts.</Typography>
					<Card shadow="sm" className="p-3 flex flex-col items-center">
						<Typography bold>Work Experience</Typography>
						<ul>
							<li>
								{/* SEO Makes me wanna KMS, Acronyms too. Why not just throw in a Typography component? */}
								<Typography>&#8226; Grayson County High School</Typography>
							</li>
						</ul>
						<Typography color="secondary">Are you recruiting? <Link href="/#contact" className="text-blue-500 hover:underline">Let's talk!</Link></Typography>
					</Card>
				</div>
			</main>
			<Card element="footer" className="rounded-none p-2 flex flex-col items-center bottom-0 w-full border-0 border-t">
				<Typography>Made with 💜 by Eldon.</Typography>
				<Typography>
					<Typography color="secondary">Curious how </Typography>
					<Link href="/behind-the-scenes">
						<Typography underline interactive color="info">this site works?</Typography>
					</Link>
				</Typography>
			</Card>
		</>
	)
}
