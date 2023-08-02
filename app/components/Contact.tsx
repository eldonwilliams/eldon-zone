import Typography from "@/components/Typography";
import Link from "next/link";
import { VscLinkExternal } from "react-icons/vsc";
import Bullet from "./Bullet";

export default function Contact() {
	return (
		<div>
			<Typography className="text-xl sm:mt-4" weight="bold" element="h4">Contact Me</Typography>
			<ul>
				<li>
					<Typography>
						<Bullet />
						<Typography font="mono">+1 (270)-589-2949 📱</Typography>
					</Typography>
				</li>
				<li>
					<Typography>
						<Bullet />
						<Typography>@eldonw Discord</Typography>
					</Typography>
				</li>
				<li>
					<Typography className="flex flex-row gap-2 mt-1">
						<Bullet />

						<Typography className="font-medium flex items-center justify-center rounded-full text-xs px-1 border border-blue-400 whitespace-nowrap" element="span" color="primary" interactive>
							<Link href="https://github.com/eldonwilliams">GitHub</Link>
							<VscLinkExternal className="m-1 mr-0.5" />
						</Typography>
					</Typography>
				</li>
				<li>
					<Typography className="flex flex-row gap-2 mt-1">
						<Bullet />

						<Typography className="font-medium flex items-center justify-center rounded-full text-xs px-1 border border-blue-400 whitespace-nowrap" element="span" color="primary" interactive>
							<Link href="mailto:eldon@eldon.zone">eldon@eldon.zone</Link>
							<VscLinkExternal className="m-1 mr-0.5" />
						</Typography>
					</Typography>
				</li>
			</ul>
		</div>
	);
}