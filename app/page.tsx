import Typography from "@/components/Typography";
import Contact from "./components/Contact";
import About from "./components/About";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Improving from "./components/Improving";
import Bullet from "./components/Bullet";

export default function Home() {
	return (
		<>
			<div className="text-center p-2 px-4 rounded-full border dark:border-stone-500 dark:shadow-none dark:drop-shadow-none shadow-sm drop-shadow-sm m-2 w-max">
				<Typography className="hidden sm:block">
					✨ Hello Visitor! An update is coming later this year. Please check back to see it!
				</Typography>
				<Typography className="block sm:hidden">
					✨ Hello Visitor! An update is coming later this year.
				</Typography>
			</div>
			<div>
				<header className="max-w-max m-3">
					<Typography block element="h1" font="mono" weight="black" className="text-4xl -mb-1">Hello,&nbsp;World!</Typography>
					<Typography block element="h1" font="mono" weight="thin" className="text-2xl">
						<Bullet />
						<Typography>Eldon Williams</Typography>
						<Typography color="info">;</Typography>
					</Typography>
				</header>
				<main className="m-2 sm:mx-6 sm:flex sm:flex-row sm:flex-wrap sm:gap-4 sm:items-start sm:justify-center">
					<Contact />
					<About />
					<Languages />
					<Skills />
					<Improving />
				</main>
				<footer className="p-2 w-full sm:w-auto">
					<Typography className="text-center min-w-full" color="secondary" element="p">Made with ❤️ by Eldon and Clair Williams</Typography>
				</footer>
			</div>
		</>
	)
}
