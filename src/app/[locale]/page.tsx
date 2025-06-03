import HeroSection from "@/components/home/hero-section";
import ResourceHighlights from "@/components/home/resource-highlights";
import UpcomingEvents from "@/components/home/upcoming-events";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ResourceHighlights />
      <UpcomingEvents />
      {/* <div className="bg-emerald-900 h-32"> </div> */}
      {/* <div className="bg-[#2e6940] h-32"> </div> */}
    </>
  );
}
