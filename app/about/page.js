import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutExpertise from "@/components/about/AboutExpertise";

export const metadata = {
  title: "About A2Z",
  description:
    "A2Z is an integrated strategy, media and branding company focused on economic media services across Saudi Arabia, the Gulf and the Middle East.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutStory />
      <AboutExpertise />
    </main>
  );
}
