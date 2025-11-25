"use client";

import { ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

/**
 * MarketingBanner component displays a sticky banner at the top of the viewport.
 * It includes a link to a web development portfolio and a call to action for a 50% sale.
 */
const MarketingBanner = () => {
	const t = useTranslations("marketingBanner");
	const [isVisible, setIsVisible] = useState(true); // State to control banner visibility

	// Handler for dismissing the banner
	const handleDismiss = () => {
		setIsVisible(false); // Hide the banner
	};

	// Don't render the banner if it's not vdawisible
	if (!isVisible) {
		return null;
	}

	return (
		<div className="relative z-50 flex items-center justify-between gap-x-6 bg-dark px-6 py-3 sm:pr-3.5 lg:pl-8">
			<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-light text-sm leading-6">
				<p className="text-sm md:text-base">
					{t("message")}
					<span className="mx-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 font-bold text-primary text-xs ring-1 ring-primary/20 ring-inset md:text-sm">
						{t("sale")}
					</span>
					{t("callToAction")}
				</p>

				<Link
					href="https://faiz-khan.com"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-x-1 whitespace-nowrap font-semibold text-primary transition-colors hover:text-primary-foreground"
				>
					{t("portfolioLink")}
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Link>
			</div>

			<div className="flex flex-none justify-end">
				<button
					type="button"
					onClick={handleDismiss}
					className="-m-2.5 p-2.5 text-light hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
					aria-label={t("dismiss")}
				>
					<span className="sr-only">{t("dismiss")}</span>
					<X className="h-5 w-5" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
};

export default MarketingBanner;
