import ImageSection from "@/components/ImageSection";
import { getContactPage } from "@/lib/globals";

export default async function ContactPage() {
  const contactPage = await getContactPage();

  if (typeof contactPage.featuredImage === "string") {
    return;
  }

  return (
    <main>
      <ImageSection image={contactPage.featuredImage} navbar />
      <ImageSection
        noTopPadding
        bgClassName="bg-stone-100"
        halfHeight
        variableHeightOnMobile
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-slate-600 py-20">
          <div className="w-full max-w-lg px-16">
            <h1 className="text-4xl my-8">Let&apos;s Chat!</h1>
            <label className="block my-4">
              <p className="mb-1 font-bold">Name</p>
              <input className="border-slate-600 border p-2 w-full" type="text" name="name" />
            </label>
            <label className="block my-4">
              <p className="mb-1 font-bold">Email</p>
              <input className="border-slate-600 border p-2 w-full" type="text" name="email" />
            </label>
            <label className="block my-4">
              <p className="mb-1 font-bold">Message</p>
              <textarea className="border-slate-600 border p-2 w-full" name="message" rows={5} />
            </label>
            <button className="border border-slate-600 hover:bg-slate-600 hover:text-stone-100 transition py-3 px-5 text-sm my-4 block">
              Submit
            </button>
          </div>
        </div>
      </ImageSection>
    </main>
  );
}
