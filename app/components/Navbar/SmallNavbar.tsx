"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";

function NavModal() {
    
}

export default function SmallNavbar() {
    const [open, setOpen] = useState(false);
    const [ref, setRef] = useState<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (open) {

        }
    });

    return (
        <motion.button
            className="sm:hidden text-4xl"
            onClick={() => setOpen(!open)}
            variants={{
                open: {
                    rotate: 90,
                    scale: 0.8,
                },
                closed: {
                    rotate: 0,
                    scale: 1,
                },
            }}
            initial="closed"
            animate={open ? "open" : "closed"}
            ref={setRef}
        >
            <BiMenu />
        </motion.button>
    );
}