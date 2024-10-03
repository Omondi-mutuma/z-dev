import Features from "@/components/features";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <main className="min-h-screen w-full border flex flex-col justify-center items-center px-4 pt-[72px] lg:px-[74px] ">
      <Hero />
      <Showcase />
      <Features />
    </main>
  );
}
