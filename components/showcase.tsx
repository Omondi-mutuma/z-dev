import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Compare } from "./ui/compare";
import Clients from "./ui/clients";

const Showcase = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-20 p-4">
      <HoverBorderGradient
        containerClassName="rounded-3xl"
        as="div"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <div className=" border rounded-3xl dark:bg-background bg-background  border-neutral-200 dark:border-background p-4">
          <Compare
            firstImage="/problem-screenshot.png"
            secondImage="/solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[300px] md:h-[400px] md:w-[500px] lg:h-[400px] lg:w-[1000px]"
            slideMode="drag"
            autoplay
          />
        </div>
      </HoverBorderGradient>
      <div className="w-full text-center lg:h-[180px]">
        <h4 className="scroll-m-20 text-lg font-normal tracking-tight mt-10">
          The best brands love to stand out
        </h4>
        <div className="">
          <Clients />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
