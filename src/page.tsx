import { Helmet } from "react-helmet";

import { BackgroundBeams } from "./components/background-beams";
import { HoverEffect } from "./components/card-hover-effect";
// import { FollowerPointerCard } from "./components/following-pointer";
import { HoverBorderGradient } from "./components/hover-border-gradient";

import { IoArrowDown } from "react-icons/io5";

import { contacts, meta } from "./data";

const HomePage = () => {
  const date: Date = new Date();

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.linkCanonical} />
        <meta name="description" content={meta.description} />
        <meta name="theme-color" content={meta.themeColor} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <FollowerPointerCard className="z-10 overflow-hidden"> */}
      <div className="md:h-[100vh] w-full bg-zinc-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex flex-row justify-center items-center">
            <h1 className="relative z-20 text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-600 text-center font-grotesk font-bold leading-normal md:leading-relaxed py-1">
              Comingsoon!
            </h1>
          </div>
          <p className="text-zinc-400 font-grotesk max-w-lg mx-auto text-sm text-center relative z-30">
            Web is under development, If you're interested in connecting with
            me, feel free to reach out! 🙂
          </p>
          <div className="flex justify-center mt-6">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-zinc-200 text-black dark:text-zinc-200 hover:shadow-sm hover:shadow-zinc-200 transition-all ease-in duration-200 flex items-center space-x-2"
            >
              <span className="font-grotesk dark:text-zinc-200">Hire me!</span>
              <IoArrowDown />
            </HoverBorderGradient>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto md:px-8 z-40">
            <HoverEffect items={contacts} />
          </div>
        </div>
        <BackgroundBeams />
        <footer className="text-center mx-auto p-4">
          <span className="text-sm text-zinc-200 font-grotesk">
            © {date.getFullYear()}&nbsp;
            <span className="italic underline underline-offset-4">
              ardy.lol
            </span>
          </span>
        </footer>
      </div>
      {/* </FollowerPointerCard> */}
    </>
  );
};

export default HomePage;
