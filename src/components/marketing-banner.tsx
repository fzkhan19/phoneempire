"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * MarketingBanner component displays a sticky banner at the top of the viewport.
 * It includes a link to a web development portfolio and a call to action for a 50% sale.
 * The banner can be dismissed by the user and its dismissal status persists across sessions using localStorage.
 */
const MarketingBanner = () => {
	const t = useTranslations("marketingBanner");
	const [isVisible, setIsVisible] = useState(true); // State to control banner visibility

	// Handler for dismissing the banner
	const handleDismiss = () => {
		setIsVisible(false); // Hide the banner
	};

	// Don't render the banner if it's not visible
	if (!isVisible) {
		return null;
	}

	return (
		<div className="relative z-50 flex items-center justify-center bg-dark p-3 text-center text-base text-light md:text-lg">
			<p className="mr-4">
				{t("message")}{" "}
				<span className="mr-1 font-extrabold text-primary text-xl md:text-2xl">
					{t("sale")}
				</span>{" "}
				{t("callToAction")}{" "}
				<Link
					href="https://your-web-dev-portfolio.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary underline hover:text-primary-foreground"
				>
					{t("portfolioLink")}
				</Link>{" "}
				{t("consultation")}
				<br />
				{t("contactDetails")}:{" "}
				<a
					href={`mailto:${t("email")}`}
					className="text-primary underline hover:text-primary-foreground"
				>
					{t("email")}
				</a>{" "}
				|{" "}
				<a
					href={`tel:${t("phone")}`}
					className="text-primary underline hover:text-primary-foreground"
				>
					{t("phone")}
				</a>
			</p>
			<button
				type="button"
				onClick={handleDismiss}
				className="-translate-y-1/2 absolute top-1/2 right-2 rounded-full p-1 text-light hover:bg-gray focus:outline-none focus:ring-2 focus:ring-light"
				aria-label={t("dismiss")}
			>
				<svg
					className="h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>{t("dismiss")}</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	);
};

export default MarketingBanner;
