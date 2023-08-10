import Typography from "@/components/Typography";
import Link from "next/link";

export type NavLinkDefinition = {
    name: string;
    href: string;
}

export default function NavLink({ name, href }: NavLinkDefinition) {
    return (
        <li>
            <Typography underline interactive size="2xl" color="info">
                <Link href={href}>{name}</Link>
            </Typography>
        </li>
    )
}