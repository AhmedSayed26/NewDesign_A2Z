import VisionHero from "@/components/vision/VisionHero";
import VisionStatement from "@/components/vision/VisionStatement";
import VisionValues from "@/components/vision/VisionValues";
import VisionGoals from "@/components/vision/VisionGoals";

export const metadata = {
  title: "Our Vision — A2Z",
  description:
    "To be the leading company in strategy, media, economics and branding in the region, recognized for innovation, excellence and transformative impact.",
};

export default function VisionPage() {
  return (
    <main className="flex-1">
      <VisionHero />
      <VisionStatement />
      <VisionValues />
      <VisionGoals />
    </main>
  );
}
