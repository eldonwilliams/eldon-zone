import Typography from "@/components/Typography";
import Bullet from "./Bullet";

export default function Improving() {
	return (
		<div>
			<Typography className="text-xl mt-4" weight="bold" element="h4">Skills I&apos;m Improving</Typography>
			<ul>
				<li>
					<Bullet />
					<Typography>UI Design</Typography>
				</li>
			</ul>
		</div>
	);
}