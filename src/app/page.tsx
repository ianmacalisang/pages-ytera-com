import BookingForm from "@/components/booking-form";
import SocialButtons from "@/components/social-buttons";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center landing-bg">
        <div className="mx-auto max-w-5xl w-full p-4">
          <h2 className="text-2xl text-center xl:text-4xl text-white font-bold my-6">
            Mastering YouTube Marketing
            <br />
            for Financial Services - FREE BOOK!
          </h2>
          <p className="text-sm text-center xl:text-xl text-white/80 mb-6">
            Strategic Video Content For Your Authority, Credibility, Reach &
            Influence
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            <div className="order-2 xl:order-1">
              <BookingForm />
            </div>
            <div className="order-1 xl:order-2 flex items-center justify-center xl:justify-start">
              <Image
                src="/images/book-mockup.png"
                alt="e-book cover"
                width={420}
                height={420}
                className="aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-8">
            <Image
              src="/images/yt-era-logo.png"
              alt="YTEra logo"
              width={300}
              height={300}
              className="mb-6"
            />
            <h2 className="text-lg md:text-3xl text-red-600 mb-2 text-center">
              Meet Andrew Murdoc:
            </h2>
            <p className="text-white text-center max-w-2xl mx-auto mb-6 text-lg">
              YouTube marketing specialist helping financial advisors and
              professionals build their authority and reach through strategic
              video content.
            </p>
            <SocialButtons className="mb-4" />
          </div>
        </div>
      </section>
    </main>
  );
}
