import { Hero } from "@/components/layout/Hero";
import { PriceList } from "@/components/layout/PriceList";
import { Services } from "@/components/layout/Services";
import { Contact } from "@/components/layout/contact";
import Testimonial from "@/components/testimonial-04/testimonial-04";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export const runtime = "edge";
export default function Home() {
	return (
		<article className="flex min-h-[100dvh] flex-col space-y-8 pt-4 pb-40 md:px-6 md:pt-12">
			<div className="mx-auto w-full max-w-2xl md:max-w-max">
				<Hero />
				<Services />
				<PriceList />
				<Testimonial />
				<Contact />
				<Link
					href="http://wa.me/4917670440689"
					target="_blank"
					className={cn(
						"absolute right-8 bottom-4 z-50 rounded-full bg-green-600 p-3 transition-all hover:scale-110",
					)}
				>
					<IconBrandWhatsapp size={34} className="text-white" />
				</Link>
			</div>
		</article>
	);
}
