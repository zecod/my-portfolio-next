import { Separator } from "@/components/ui/separator";
import {
  SiGithub,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { NavLinks } from "@/components/ui/nav-links";

export default function Home() {
  return (
    <div
      className={`max-w-[650px] m-auto font-[family-name:var(--font-geist-sans)] px-5 mb-20`}
    >
      <div className="mt-10 font-[family-name:var(--font-geist-mono)]">
        <NavLinks />
        <div>
          <div className="text-[28px] leading-[26px] tracking-[-0.4px]">
            Hi, I'm Yassine
          </div>
          <div className="mt-4 font-[family text-muted-foreground">
            Always curious, I love figuring out how things work.
          </div>
        </div>
        <Separator className="mt-20" />
        <div className="mt-20">
          <div className="mt-10 text-[18px] leading-[20px] tracking-[0px] text-muted-foreground">
            About me:
          </div>
          <div className="mt-2 text-[16.5px] leading-[27px] tracking-[0px]">
            I’m from Italy, working on{" "}
            <span className="text-primary">front-end</span> and{" "}
            <span className="text-primary">back-end</span> projects. I enjoy
            learning new technologies and have a passion for{" "}
            <span className="text-primary">cybersecurity</span>, focusing on
            finding and fixing vulnerabilities.
          </div>
        </div>
        <Separator className="my-20" />
        <div>
          <div className="mt-10 text-[18px] leading-[20px] tracking-[0px] text-muted-foreground">
            Tools I Use:
          </div>
          <div className="mt-2 text-[16.5px] leading-[27px] tracking-[0px]  ">
            I create things that are fast, reliable, and easy on the eyes. My
            focus is on keeping it simple, clean, and efficient—no extras, just
            solid code that works.
          </div>
          <div className="flex gap-6 mt-8 flex-wrap">
            <SiPostgresql size={32} className="text-[#336791]" />
            <SiNextdotjs size={32} />
            <SiTypescript size={32} className="text-[#3178C6]" />
            <SiGithub size={32} />
            <SiReact size={32} className="text-[#61DAFB]" />
            <SiTailwindcss size={32} className="text-[#38BDF8]" />
            <SiNodedotjs size={32} className="text-[#68A063]" />
            <SiMongodb size={32} className="text-[#4DB33D]" />
            <SiLinux size={32} />
            <SiSupabase size={32} className="text-[#3FCF8E]" />
          </div>
        </div>
        <Separator className="my-20" />
        <div className="mt-20">
          <div className="mt-10 text-[18px] leading-[20px] tracking-[0px] text-muted-foreground">
            Where I’m Heading:
          </div>
          <div className="mt-2 text-[16.5px] leading-[27px] tracking-[0px]">
            Currently exploring the world of entrepreneurship with{" "}
            <span className="text-primary">Suonora</span>, an AI-powered
            text-to-speech platform.
          </div>
        </div>
      </div>
    </div>
  );
}
