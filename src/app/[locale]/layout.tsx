import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { usePathname } from "@/i18n/navigation";
import { siteMetadata } from "@/lib/siteMetaData";

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	setRequestLocale(locale);

	return (
		<>
			<head>
				{routing.locales.map((loc) => (
					<link
						key={loc}
						rel="alternate"
						hrefLang={loc}
						href={`${siteMetadata.siteUrl}/${loc}${usePathname()}`}
					/>
				))}
				<link
					rel="alternate"
					hrefLang="x-default"
					href={`${siteMetadata.siteUrl}/${routing.defaultLocale}${usePathname()}`}
				/>
			</head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
