
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/../public/hero.png";
import ThemeToggle from "./theme-toggle";
import ShinyButton from "./logo";
import AuthButtons from "./auth-buttons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



export default async function Hero() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <div className="relative flex items-center justify-between w-full px-8 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center size-10 rounded-md bg-blue-500 text-white">
              <ShinyButton />
            </div>
            <h4 className="md:text-3xl font-bold ml-2 hidden sm:text-2xl sm:block!">
              Blog<span className="text-blue-500">Tenants</span>
            </h4>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex! items-center! gap-4! hidden!">
            <ThemeToggle />
          </div>
          <AuthButtons isLoggedIn={!!user} />
        </div>
      </div>

      <section className="relative flex items-center justify-center">
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-xs text-primary tracking-tight bg-primary/10 px-4 py-2 rounded-full font-semibold border border-primary">
              Multi Tenant Blog Application
            </span>

            <h1 className="mt-8! text-4xl! sm:text-6xl! md:text-7xl! lg:text-8xl! font-medium! leading-none!">
              Setup your Blog{" "}
              <span className="block text-primary">in Minutes!</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-text-muted tracking-tighter">
              Setting up your blog is hard and time consuming. We make it easy
              for you to create a blog in minutes
            </p>

            <div className="flex items-center gap-x-5 w-full justify-center mt-5 ">
              <AuthButtons isLoggedIn={!!user} />
            </div>
          </div>

          <div className="relative! items-center! w-full! py-12! mx-auto! mt-12! -z-10">
            <svg
              className="absolute! -mt-24! blur-3xl!"
              fill="none"
              viewBox="0 0 400 400"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path
                    d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                    fill="#03FFE0"
                  ></path>
                  <path
                    d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                    fill="#7C87F8"
                  ></path>
                  <path
                    d="M320 400H400V78.75L106.2 134.75L320 400Z"
                    fill="#4C65E4"
                  ></path>
                  <path
                    d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                    fill="#043AFF"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="720.666"
                  id="filter0_f_10_20"
                  width="720.666"
                  x="-160.333"
                  y="-160.333"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_10_20"
                    stdDeviation="80.1666"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>

            <Image
              src={HeroImage}
              alt="Hero image"
              priority
              className="relative! object-cover! w-full! border! rounded-lg! shadow-2xl! lg:rounded-2xl!"
            />
          </div>
        </div>
      </section>
    </>
  );
}