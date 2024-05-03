import HomeAbout from "@/components/home-about";
import HomeFeatures from "@/components/home-features";
import HomeHero from "@/components/home-hero";
import HomeKnowlageHub from "@/components/home-knowlage-hub";
import HomeTestimonial from "@/components/home-testimonial";

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col">
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeKnowlageHub />
      <HomeTestimonial />
    </main>
  );
}
