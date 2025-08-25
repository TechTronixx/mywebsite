import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import VisitorCounter from "../VisitorCounter";

const Footer = ({}) => {
  return (
    <>
      <div className="p-2 mt-5 laptop:mt-40 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button
              type="primary"
              onClick={() => window.open("mailto:awais209@gmail.com")}
            >
              Hop in!
            </Button>
            <div className="mt-10">
              <Socials />
            </div>

            {/* visitor counter */}
            <VisitorCounter />
          </div>
        </div>
      </div>
      <h1 className="p-2 mt-2 text-sm text-bold laptop:mt-10 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="">
          <a className="underline underline-offset-1">Awais Rasheed</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
