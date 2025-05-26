import BookingForm from "@/components/booking-form";
import SocialButtons from "@/components/social-buttons";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center landing-bg">
        <div className="mx-auto max-w-5xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="order-2 lg:order-1 flex justify-center">
              <BookingForm />
            </div>
            <div className="p-3 order-1 lg:order-2 text-center md:text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">
                Mastering YouTube Marketing for Financial Services - FREE BOOK!
              </h2>
              <p className="text-lg md:text-xl text-white/80">
                Strategic Video Content For Your Authority, Credibility, Reach &
                Influence
              </p>

              <Image
                src="/images/book-mockup.png"
                alt="e-book cover"
                width={280}
                height={280}
                className="aspect-square object-cover mx-auto md:mx-auto lg:mx-0 my-4"
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
              className="mb-4"
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
