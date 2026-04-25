"use client";
import { useTranslations } from "next-intl";

export const PriceList = () => {
	const t = useTranslations("prices");

	return (
		<div className="my-0 w-full bg-slate-50 py-20" id="prices">
			<div className="container px-4">
				<div className="text-center">
					<h2 className="mb-4 font-semibold text-3xl text-primary tracking-tighter md:text-5xl">
						{t("title")}
					</h2>
					<p className="mb-12 text-base text-muted-foreground md:text-lg">
						{t("subtitle")}
					</p>
					
					<div className="relative overflow-hidden rounded-3xl bg-white p-12 shadow-xl shadow-primary/5 ring-1 ring-primary/10">
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
						<div className="relative z-10 flex flex-col items-center justify-center space-y-4">
							<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									width="32" 
									height="32" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									strokeWidth="2" 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									className="animate-pulse"
									aria-hidden="true"
								>
									<path d="M12 2v4" />
									<path d="m16.2 7.8 2.9-2.9" />
									<path d="M18 12h4" />
									<path d="m19.1 16.2 2.9 2.9" />
									<path d="M12 18v4" />
									<path d="m4.9 19.1 2.9-2.9" />
									<path d="M2 12h4" />
									<path d="m7.8 4.9 2.9 2.9" />
								</svg>
							</div>
							<p className="max-w-md font-semibold text-primary text-2xl md:text-3xl">
								{t("comingSoon")}
							</p>
							<p className="max-w-xs text-muted-foreground text-sm md:text-base">
								{t("comingSoonDesc")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
