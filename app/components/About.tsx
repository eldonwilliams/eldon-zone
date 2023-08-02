import Typography from "@/components/Typography";
import Bullet from "./Bullet";

export default function About() {
	return (
		<div>
			<Typography className="text-xl mt-4" weight="bold" element="h4">About Me</Typography>
			<ul className="">
				<li>
					<Bullet />
					<Typography>I love to learn;</Typography>
				</li>
				<li>
					<Bullet />
					<Typography>{"Tabs > Spaces;"}</Typography>
				</li>
			</ul>
		</div>
	);
}