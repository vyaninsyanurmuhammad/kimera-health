import HomeAbout from "@/components/home-about";
import HomeBackground from "@/components/home-background";
import HomeFeatures from "@/components/home-features";
import HomeHero from "@/components/home-hero";
import HomeKnowlageHub from "@/components/home-knowlage-hub";
import HomeTestimonial from "@/components/home-testimonial";

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
