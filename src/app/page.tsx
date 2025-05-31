import BookingForm from "@/components/booking-form";
import SocialButtons from "@/components/social-buttons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center landing-bg">
        <div className="mx-auto max-w-5xl w-full p-4">
          <h2 className="text-3xl text-center xl:text-4xl text-white font-bold my-6">
            Mastering YouTube Marketing
            <br />
            for Financial Services - FREE BOOK!
          </h2>
          <p className="text-lg text-center xl:text-xl text-white/80 mb-6">
            Strategic Video Content For Your Authority, Credibility, Reach &
            Influence
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            <div className="order-2 xl:order-1">
              <BookingForm />
            </div>
            <div className="order-1 xl:order-2 flex items-center justify-center xl:justify-start xl:w-[310px]">
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
            <h2 className="font-bold text-lg md:text-3xl text-red-600 mb-2 text-center">
              Meet Andrew Murdoc:
            </h2>

            <SocialButtons className="mt-6 mb-5" />
          </div>
          <hr className="border-white/80" />
        </div>
        <div className="flex gap-2 justify-between items-center max-w-md mx-auto px-4 my-6">
          <Link
            className="text-white/80 hover:text-white underline underline-offset-2 text-base md:text-2xl"
            href="https://tunny-round-4flj.squarespace.com/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-white/80 hover:text-white underline underline-offset-2 text-base md:text-2xl"
            href="https://tunny-round-4flj.squarespace.com/terms-of-service"
          >
            Terms of Service
          </Link>
        </div>
      </section>
    </main>
  );
}
