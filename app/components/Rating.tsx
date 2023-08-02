import Typography from "../../components/Typography";

export type RatingProps = {
	rating: number;
}

export default function Rating(props: RatingProps) {
	return (
		<Typography>
			{'⭐'.repeat(props.rating)}
		</Typography>
	);
}