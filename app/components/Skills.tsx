import Typography from "@/components/Typography";
import Bullet from "./Bullet";

export default function Skills() {
	return (
		<div>
			<Typography className="text-xl mt-4" weight="bold" element="h4">Skills</Typography>
			<ul>
				<li>
					<Bullet />
					<Typography>Web Development</Typography>
				</li>
				<li>
					<Bullet />
					<Typography>Git/SCM</Typography>
				</li>
			</ul>
		</div>
	);
}