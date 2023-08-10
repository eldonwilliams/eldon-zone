import Typography from "@/components/Typography";
import Navbar from "./Navbar";
import Card from "@/components/Card/Card";

export default function Header() {
    return (
        <header className="m-3 mt-0 top-3 sticky justify-center flex">
            <Card shadow="lg" radius="lg" className="px-5 py-2 max-w-[600px] w-full backdrop-blur-sm flex justify-between items-center bg-white bg-opacity-30 dark:bg-gray-800 dark:!bg-opacity-30">
                <div>
                    <Typography element="h3" size="xl" weight="light" className="dark:!text-blue-400">Hello, I Am...</Typography>
                    <Typography element="h1" size="4xl" weight="black" className="-mb-1">Eldon Williams</Typography>
                    <Typography element="h3" weight="medium" className="tracking-widest dark:!text-gray-500">I Make Things.</Typography>
                </div>
                <Navbar />
            </Card>
        </header>
    );
}