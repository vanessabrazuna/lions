"use client";

import Link from "next/link";
import { Logo } from "../../logo";
import { useSocialProviders } from "@/hooks/use-social-providers";

export function Footer() {
	const socialProviders = useSocialProviders();

	const shareConfig = {
		url: "https://lionsseminovos.com.br",
		title: "Lions Seminovos",
	};

	return (
		<footer className="bg-gray-500">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
					<Logo />

					<nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-red-400">
						<Link href="/termos-de-uso" className="hover:text-red-300">
							Termos de uso
						</Link>
						<Link
							href="/parceiro-de-negocio"
							className="hover:text-red-300"
						>
							Parceiro de negócio
						</Link>
						<Link href="/trabalhe-conosco" className="hover:text-red-300">
							Trabalhe conosco
						</Link>
					</nav>

					<div className="flex items-center gap-3">
						{Object.entries(socialProviders).map(([key, provider]) => (
							<a
								key={key}
								href={provider.shareUrl(shareConfig)}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={provider.name}
								className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-700 transition hover:text-red-300"
							>
								{provider.icon}
							</a>
						))}
					</div>
				</div>

				<div className="border-t border-gray-400 py-4 text-center">
					<span className="text-xs text-gray-300">
						Lions Seminovos © {new Date().getFullYear()}
					</span>
				</div>
			</div>
		</footer>
	);
};
