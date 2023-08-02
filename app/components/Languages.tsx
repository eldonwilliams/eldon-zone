import Typography from "@/components/Typography";
import Rating from "./Rating";

export default function Languages() {
	return (
		<div>
			<Typography className="text-xl mt-4" weight="bold" element="h4">Coding Languages</Typography>
			<ul>
				<li>
					<Rating rating={5} />
					<Typography>TypeScript</Typography>
				</li>
				<li>
					<Rating rating={3} />
					<Typography>C#</Typography>
				</li>
				<li>
					<Rating rating={3} />
					<Typography>Python</Typography>
				</li>
				<li>
					<Rating rating={2} />
					<Typography>Java</Typography>
				</li>
				<li>
					<Rating rating={1} />
					<Typography>C++</Typography>
					<Typography color="secondary">, I am learning...</Typography>
				</li>
			</ul>
		</div>
	);
}