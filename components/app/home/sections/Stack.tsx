"use client";

import { Wrench } from "lucide-react";
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

export function Stack() {
  return (
    <section className="mt-40 flex items-start gap-4">
      <div className="flex flex-col items-center h-full">
        <div className="p-2 border rounded-full flex flex-col gap-4">
          <Wrench size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="text-[16px] leading-[20px] tracking-[0px]">
          My stack
        </div>
        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] text-muted-foreground">
          I build stuff that works fast, doesn’t break, and looks good doing it.
          I’m all about keeping things simple, clean, and efficient – no fluff,
          just solid code that gets the job done.
        </div>
        <div className="flex gap-6 mt-4 flex-wrap">
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
    </section>
  );
}
