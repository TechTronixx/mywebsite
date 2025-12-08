import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import VisitorCounter from "../components/VisitorCounter";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="mt-10 laptop:mt-20">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="w-4/5 p-1 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl tablet:p-2 text-bold mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="w-full p-1 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl tablet:p-2 text-bold laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="w-full p-1 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl tablet:p-2 text-bold laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="w-full p-1 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl tablet:p-2 text-bold laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <div className="p-2 mt-10 laptop:mt-40 laptop:p-0" ref={aboutRef}>
            <h1 className="text-2xl tablet:m-10 text-bold">About.</h1>
            <p className="w-full mt-2 text-lg whitespace-pre-line opacity-50 tablet:m-10 laptop:text-3xl laptop:w-3/5">
              {data.aboutpara}
            </p>
            {"  "}
            <a
              href="https://tinyurl.com/4x99s453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-1 px-4 py-2 m-1 mt-1 text-sm transition-all duration-300 ease-out rounded-lg text-slate-500 tablet:text-base laptop:p-2 laptop:m-2 hover:bg-slate-100 hover:scale-105 active:scale-100 tablet:first:ml-0"
            >
              Resume
            </a>
          </div>

          {/* /Check Click Stats
          https://app.rebrandly.com/public/links/share?href=rb.gy/{code}/ */}

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="p-2 mt-10 laptop:mt-30 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects.</h1>

          <div className="grid grid-cols-1 gap-4 mt-5 laptop:mt-10 tablet:grid-cols-2">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                videoSrc={project.videoSrc}
                isVideo={project.isVideo}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="p-2 mt-10 laptop:mt-30 laptop:p-0">
          <h1 className="text-2xl tablet:m-10 text-bold">Services.</h1>
          <div className="grid grid-cols-1 gap-6 mt-5 tablet:m-10 laptop:grid-cols-2">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        {/* <div className="p-2 mt-10 laptop:mt-40 laptop:p-0" ref={aboutRef}>
          <h1 className="text-2xl tablet:m-10 text-bold">About.</h1>
          <p className="w-full mt-2 text-[0.2rem] opacity-50 tablet:m-10 laptop:text-3xl laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
