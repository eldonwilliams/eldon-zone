import Typography from "@/components/Typography";
import Header from "./components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<main className="m-5 min-h-screen">
				<Typography className="py-[100vh]">Hi</Typography>
			</main>
			<footer className="flex justify-center bottom-0 w-full h-10 bg-gray-800 p-2">
				<Typography>The footer</Typography>
			</footer>
		</>
	)
}
