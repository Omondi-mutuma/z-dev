import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Compare } from "./ui/compare";

const Showcase = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-20 p-4">
      <HoverBorderGradient
        containerClassName="rounded-3xl"
        as="div"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <div className="p-4 border rounded-3xl dark:bg-background bg-background  border-neutral-200 dark:border-emerald-800/30 px-4">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[300px] md:h-[400px] md:w-[500px] lg:h-[400px] lg:w-[1000px]"
            slideMode="hover"
          />
        </div>
      </HoverBorderGradient>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-10">
        The best remote teams love Teki
      </h4>
    </section>
  );
};

export default Showcase;
