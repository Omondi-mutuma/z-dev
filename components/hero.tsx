import Badge from "@/components/ui/badge";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center py-3 px-4 gap-7 mx-auto">
      <Badge />
      <div className="flex flex-col justify-center items-center max-w-3xl text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl">
          Next-Level Websites for Forward-Thinking Brands
        </h1>
        <p className="leading-7 max-w-2xl [&:not(:first-child)]:mt-6">
          At Teki Technologies, we partner with visionary brands to craft
          websites that are not just ahead of the curve—they set the curve.
        </p>
      </div>
      <div className="flex gap-5">
        <Button variant="default" className="gap-2 items-center group">
          Request a quote
          <SendIcon
            size={16}
            className="transition-transform group-hover:animate-spinOnce"
          />
        </Button>
        <Button variant="ghost">Learn more</Button>
      </div>
    </section>
  );
};

export default Hero;
