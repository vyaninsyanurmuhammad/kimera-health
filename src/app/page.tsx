import HomeAbout from "@/components/home-about";
import HomeBackground from "@/components/home-background";
import HomeFeatures from "@/components/home-features";
import HomeHero from "@/components/home-hero";
import HomeKnowlageHub from "@/components/home-knowlage-hub";
import HomeTestimonial from "@/components/home-testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kimera Health - Home",
  description:
    "We help you to find the best health product that suite your Bussiness",
};

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col relative">
      <HomeBackground />
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeKnowlageHub />
      <HomeTestimonial />
    </main>
  );
}
