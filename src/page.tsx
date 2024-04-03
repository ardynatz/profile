import { Helmet } from "react-helmet";

import { BackgroundBeams } from "./components/background-beams";
import { HoverEffect } from "./components/card-hover-effect";
import { FollowerPointerCard } from "./components/following-pointer";
import { HoverBorderGradient } from "./components/hover-border-gradient";

import { IoArrowDown } from "react-icons/io5";

import { contacts, meta } from "./data";
import reactSvg from "./assets/react.svg";

const HomePage = () => {
  const date: Date = new Date();

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.linkCanonical} />
        <meta name="description" content={meta.description} />
        <meta name="theme-color" content={meta.themeColor} />
      </Helmet>
      <FollowerPointerCard className="z-10 overflow-hidden">
        <div className="md:h-[100vh] w-full rounded-md bg-zinc-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-3xl mx-auto p-4">
            <div className="flex flex-row justify-center items-center">
              <h1 className="relative z-20 text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-500 text-center font-sans font-bold">
                Oops!&nbsp;
                <span className="italic">ardy.lol</span>
              </h1>
            </div>
            <p className="text-zinc-400 max-w-lg mx-auto my-2 text-sm text-center relative z-30">
              Web is under construction, If you're interested in connecting with
              me, feel free to reach out! 🙂
            </p>
            <div className="flex justify-center mt-6">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white hover:shadow-sm hover:shadow-white transition-all ease-in duration-200 flex items-center space-x-2 cursor-none"
              >
                <span>Hire Me!</span>
                <IoArrowDown />
              </HoverBorderGradient>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8 z-40">
              <HoverEffect items={contacts} />
            </div>
          </div>
          <BackgroundBeams />
          <footer className="text-center p-4">
            <span>
              <img
                className="animate-bounce rounded-full hover:shadow-md hover:shadow-[#00d8ff] p-1 flex mx-auto"
                src={reactSvg}
              />
            </span>
            © {date.getFullYear()}&nbsp;
            <span className="italic underline underline-offset-4">
              ardy.lol
            </span>
          </footer>
        </div>
      </FollowerPointerCard>
    </>
  );
};

export default HomePage;
