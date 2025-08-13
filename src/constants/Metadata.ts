import { siteMetadata } from "@/lib/siteMetaData";
import type { Metadata } from "next";

export const METADATA: Metadata = {
	title: siteMetadata.title,
	description: siteMetadata.description,
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	keywords: siteMetadata.keywords,
	manifest: siteMetadata.manifest,
	alternates: {
		canonical: siteMetadata.siteUrl,
	},
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/favicon/android-icon-192x192.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicon/favicon-96x96.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "57x57",
			url: "/favicon/apple-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "60x60",
			url: "/favicon/apple-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "72x72",
			url: "/favicon/apple-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "76x76",
			url: "/favicon/apple-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "114x114",
			url: "/favicon/apple-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "120x120",
			url: "/favicon/apple-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "144x144",
			url: "/favicon/apple-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "152x152",
			url: "/favicon/apple-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/favicon/apple-icon-180x180.png",
		},
	],

	openGraph: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		siteName: siteMetadata.siteName,
		url: siteMetadata.siteUrl,
		images: [
			{
				url: siteMetadata.socialBanner,
				width: 1200,
				height: 630,
			},
		],
		type: "website",
		locale: siteMetadata.locale,
		countryName: siteMetadata.countryName,
		emails: siteMetadata.email ? [siteMetadata.email] : undefined,
		phoneNumbers: siteMetadata.phone ? [siteMetadata.phone] : undefined,
		ttl: 60,
	},
	twitter: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		card: "summary_large_image",
		creator: siteMetadata.twitterHandle,
		creatorId: siteMetadata.twitterId,
		images: [
			{
				url: siteMetadata.socialBanner,
				width: 1200,
				height: 630,
			},
		],
		site: siteMetadata.siteUrl,
	},
	category: siteMetadata.category,
	other: {
		url: siteMetadata.siteUrl,
	},
	publisher: siteMetadata.author,
	creator: siteMetadata.author,
};

export const JSON_LD = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: siteMetadata.siteName,
	image: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
	"@id": siteMetadata.siteUrl,
	url: siteMetadata.siteUrl,
	telephone: siteMetadata.phone,
	address: {
		"@type": "PostalAddress",
		streetAddress: "Kaiserstraße 22",
		addressLocality: "Landstuhl",
		postalCode: "66849",
		addressCountry: "DE",
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "10:15",
			closes: "19:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Saturday",
			opens: "10:15",
			closes: "17:00",
		},
	],
	hasMap:
		"https://www.google.com/maps/place/Phone+Empire/@49.4005852,7.568393,17z/data=!3m1!4b1!4m6!3m5!1s0x47963b516f4e64f7:0x5e7c8a6c8e3b3a6c!8m2!3d49.4005852!4d7.5709679!16s%2Fg%2F11b65v7y23?entry=ttu",
	priceRange: "$$",
	sameAs: siteMetadata.socialLinks,
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.5",
		reviewCount: "100",
	},
};
