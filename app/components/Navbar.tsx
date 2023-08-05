import Typography from "@/components/Typography";
import Link from "next/link";

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
            <Typography interactive size="2xl" color="info">
                <Link href={href}>{name}</Link>
            </Typography>
        </li>
    )
}

export default function Navbar() {
    return (
        <ul className="flex flex-row gap-5">
            {navLinks.map((link, i) => <NavLink key={i} {...link} />)}
        </ul>
    );
}