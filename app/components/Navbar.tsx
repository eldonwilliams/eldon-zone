import Typography from "@/components/Typography";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export type NavLinkDefinition = {
    name: string;
    href: string;
}

const navLinks: NavLinkDefinition[] = [
    {
        name: "Home",
        href: "/#"
    },
    {
        name: "About",
        href: "/#about"
    },
    {
        name: "Projects",
        href: "/#projects"
    }
];

function NavLink({ name, href }: NavLinkDefinition) {
    return (
        <li>
            <Typography underline interactive size="2xl" color="info">
                <Link href={href}>{name}</Link>
            </Typography>
        </li>
    )
}

const LargeNavbar = () => (
    <ul className="flex-row gap-5 hidden sm:flex">
        {navLinks.map((link, i) => <NavLink key={i} {...link} />)}
    </ul>
);

const SmallNavbar = () => {
    return (
        <button className="sm:hidden  text-4xl">
            <BiMenu />
        </button>
    );
}

export default function Navbar() {
    return (
        <>
            <LargeNavbar />
            <SmallNavbar />
        </>
    );
}