import NavLink from "./NavLink";
import { NavLinkDefinitions } from "./NavLinkDefinitions";

export default function LargeNavbar() {
    return (
        <ul className="flex-row gap-5 hidden sm:flex">
            {NavLinkDefinitions.map((link, i) => <NavLink key={i} {...link} />)}
        </ul>
    );
}