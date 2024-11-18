import { Docks } from "@/components/app/home/Dock";
import { About } from "@/components/app/home/sections/About";
import { Experience } from "@/components/app/home/sections/Expirence";
import { Hero } from "@/components/app/home/sections/Hero";
import { Stack } from "@/components/app/home/sections/Stack";

export default function Home() {
  return (
    <div className={` max-w-[800px] m-auto`}>
      <div className="p-5">
        <Hero />
        <About />
        <Stack />
        <Experience />
      </div>
    </div>
  );
}
