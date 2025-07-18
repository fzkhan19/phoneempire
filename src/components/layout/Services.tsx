"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Gamepad, Laptop, Settings, Smartphone, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const getMobileServices = (t: ReturnType<typeof useTranslations>) => [
	{
		title: t("mobileServices.screenRepair"),
		image: "/services/screen-repair.jpg",
	},
	{
		title: t("mobileServices.waterDamage"),
		image: "/services/water-damage.jpg",
	},
	{
		title: t("mobileServices.cameraRepair"),
		image: "/services/camera-repair.jpg",
	},
	{
		title: t("mobileServices.batteryReplacement"),
		image: "/services/battery.jpg",
	},
	{
		title: t("mobileServices.buttonRepair"),
		image: "/services/button-repair.jpg",
	},
	{
		title: t("mobileServices.chargePortRepair"),
		image: "/services/charge-port.jpg",
	},
	{ title: t("mobileServices.speakerRepair"), image: "/services/speaker.jpg" },
	{
		title: t("mobileServices.carrierUnlock"),
		image: "/services/carrier-unlock.jpg",
	},
	{
		title: t("mobileServices.motherboardRepair"),
		image: "/services/motherboard.jpg",
	},
];

const getLaptopServices = (t: ReturnType<typeof useTranslations>) => [
	{
		title: t("laptopServices.hardwareUpgrades"),
		image: "/services/hardware-upgrade.jpg",
	},
	{
		title: t("laptopServices.batteryReplacement"),
		image: "/services/laptop-battery.jpg",
	},
	{
		title: t("laptopServices.hardDriveServices"),
		image: "/services/hard-drive.jpg",
	},
	{ title: t("laptopServices.ramUpgrade"), image: "/services/ram.jpg" },
];

const getSoftwareServices = (t: ReturnType<typeof useTranslations>) => [
	{
		title: t("softwareServices.virusRemoval"),
		image: "/services/virus-removal.jpg",
	},
	{
		title: t("softwareServices.softwareInstallation"),
		image: "/services/software.jpg",
	},
	{
		title: t("softwareServices.systemOptimization"),
		image: "/services/optimization.jpg",
	},
	{
		title: t("softwareServices.dataRecovery"),
		image: "/services/data-recovery.jpg",
	},
	{ title: t("softwareServices.osInstall"), image: "/services/os.jpg" },
	{
		title: t("softwareServices.diagnosticScan"),
		image: "/services/diagnostic.jpg",
	},
	{
		title: t("softwareServices.driverUpdates"),
		image: "/services/drivers.jpg",
	},
];

const getConsoleServices = (t: ReturnType<typeof useTranslations>) => [
	{
		title: t("consoleServices.playstationRepair"),
		image: "/services/playstation.jpg",
	},
	{
		title: t("consoleServices.nintendoRepair"),
		image: "/services/nintendo.jpg",
	},
];

const ServiceCarousel = ({
	title,
	icon: Icon,
	services,
	delay = 0,
}: {
	title: string;
	icon: React.ElementType;
	services: { title: string; image: string }[];
	delay?: number;
}) => (
	<div className="space-y-6">
		<h3 className="flex items-center gap-2 font-semibold text-lg text-primary tracking-tighter md:text-2xl">
			<Icon className="size-5 md:size-6" />
			{title}
		</h3>
		<Carousel
			opts={{ align: "start", loop: true }}
			plugins={[
				Autoplay({
					delay: delay,
				}),
			]}
			className="w-full"
		>
			<CarouselContent>
				{services.map((service, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
						<div className="p-2">
							<Card className="h-full rounded-none bg-white shadow-primary/20 shadow-sm">
								<CardContent className="flex flex-col items-center justify-center gap-2 px-0 text-center">
									<div className="flex h-[250px] w-full items-end md:h-[400px]">
										<Image
											src={service.image}
											alt={service.title}
											width={1024}
											height={1024}
											className="aspect-square w-full"
										/>
									</div>
									<p className="w-full font-semibold text-lg text-muted-foreground">
										{service.title}
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
);

export const Services = () => {
	const t = useTranslations("services");

	const mobileServices = getMobileServices(t);
	const laptopServices = getLaptopServices(t);
	const softwareServices = getSoftwareServices(t);
	const consoleServices = getConsoleServices(t);

	return (
		<div className="w-full bg-slate-50 py-20" id="services">
			<div className="container px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-semibold text-2xl text-primary tracking-tighter md:text-4xl">
						{t("title")}
					</h2>
					<p className="text-base text-muted-foreground md:text-lg">
						{t("subtitle")}
					</p>
				</div>
				<div className="space-y-16">
					<ServiceCarousel
						title={t("mobile")}
						icon={Smartphone}
						services={mobileServices}
						delay={1500}
					/>
					<ServiceCarousel
						title={t("laptop")}
						icon={Laptop}
						services={laptopServices}
						delay={1500}
					/>
					<ServiceCarousel
						title={t("software")}
						icon={Settings}
						services={softwareServices}
						delay={1500}
					/>
					<ServiceCarousel
						title={t("console")}
						icon={Gamepad}
						services={consoleServices}
						delay={1500}
					/>
				</div>
				<Link href="#contact">
					<div className="mt-12 text-center">
						<Button size="lg" className="gap-2">
							{t("bookService")} <Wrench className="h-4 w-4" />
						</Button>
					</div>
				</Link>
			</div>
		</div>
	);
};
