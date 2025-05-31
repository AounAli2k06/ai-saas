'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-50">
            {/* Mobile Menu Button */}
            <div className="flex items-center justify-between md:hidden px-4 py-3">
                <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                    <Menu size={32} />
                </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
                {navItems.map(({ label, href }) => (
                    <Link
                        href={href}
                        key={label}
                        className={cn(
                            pathname === href && 'text-primary font-semibold'
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Fullscreen Mobile Nav */}
            <div className={cn(
                "fixed inset-0 text-black bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <button
                    className="absolute top-6 right-6"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={36} />
                </button>

                {navItems.map(({ label, href }) => (
                    <Link
                        href={href}
                        key={label}
                        className={cn(
                            "text-5xl",
                            pathname === href && "text-primary font-semibold underline"
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavItems;
