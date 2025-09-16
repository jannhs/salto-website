import HeroSection from "@/components/home/hero-section/HeroSection";
import ResourceHighlights from "@/components/home/resource-highlights";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ResourceHighlights />
      <UpcomingEvents />
    </>
  );
}
