import Typography from "@/components/Typography";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="m-3 mt-0 px-5 py-2 rounded-lg backdrop-blur-sm shadow-lg dark:shadow-none dark:bg-gray-800 bg-opacity-0 dark:!bg-opacity-30 border border-black dark:border-white border-opacity-10 dark:border-opacity-10 sticky top-3 flex justify-between items-center">
            <div>
                <Typography element="h3" size="xl" weight="light" className="dark:!text-blue-400">Hello, I Am...</Typography>
                <Typography element="h1" size="4xl" weight="black" className="-mb-1">Eldon Williams</Typography>
                <Typography element="h3" weight="medium" className="tracking-widest dark:!text-gray-500">I Make Things.</Typography>
            </div>
            <Navbar />
        </header>
    );
}