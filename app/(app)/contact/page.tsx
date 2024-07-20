import ContactForm from "@/components/ContactForm";
import ImageSection from "@/components/ImageSection";
import { getContactPage } from "@/lib/globals";

export default async function ContactPage() {
  const contactPage = await getContactPage();

  if (typeof contactPage.featuredImage === "string") {
    return;
  }

  return (
    <main>
      <ImageSection
        image={contactPage.featuredImage}
        navbar
        objectPosition="object-[37%_center]"
        bgClassName="bg-gradient-to-b from-black to-transparent to-20% opacity-50"
      />
      <div className="w-full flex flex-col justify-center items-center text-slate-600 py-12">
        <div className="w-full max-w-lg px-16">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
