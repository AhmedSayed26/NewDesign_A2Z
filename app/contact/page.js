import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — A2Z",
  description:
    "Talk to A2Z Media, Production & Strategic Communication in Riyadh. Email, phone, WhatsApp or send us a message.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactHero />
      <section className="bg-paper py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
