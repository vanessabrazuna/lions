"use client";

import { useState } from "react";
import Link from "next/link";
import { ActiveLink } from "../../active-link";
import { Logo } from "../../logo";
import { Button } from "../../ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
				<div className="flex h-16 items-center justify-between">
					<Logo />

					<nav className="hidden md:flex items-center gap-6">
						<ActiveLink href="/">Início</ActiveLink>
						<ActiveLink href="/estoque">Catálogo</ActiveLink>
						<Button variant="secondary" asChild>
							<Link href="/agende-uma-visita">Agende uma visita</Link>
						</Button>
					</nav>

					<button
						type="button"
						className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						onClick={toggleMenu}
					>
						{isOpen ? (
							<X size={24} className="text-zinc-100" />
						) : (
							<Menu size={24} className="text-zinc-100" />
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<nav className="md:hidden bg-background/95 border-t border-white/10 backdrop-blur p-4 flex flex-col gap-4">
					<ActiveLink href="/" onClick={() => setIsOpen(false)}>
						Início
					</ActiveLink>
					<ActiveLink href="/estoque" onClick={() => setIsOpen(false)}>
						Catálogo
					</ActiveLink>
					<Button variant="secondary" asChild>
						<Link href="/agende-uma-visita" onClick={() => setIsOpen(false)}>
							Agende uma visita
						</Link>
					</Button>
				</nav>
			)}
		</header>
	);
}
