"use client";

import Image from "next/image";
import { TrafficCone } from "lucide-react";
import { ReactNode } from "react";
import { SiJquery, SiReact } from "react-icons/si";
import { useRouter } from 'next/navigation'

interface ProjectType {
  title: string;
  description: string;
  imgSrc: string;
  icon: ReactNode;
  link: string;
}

export function Projects() {
  const projectData: ProjectType[] = [
    {
      title: "Verceli",
      description: "AI-powered text-to-speech platform for lifelike audio.",
      imgSrc:
        "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/verceli-lights.png",
      icon: <SiReact size={18} />,
      link: "/projects/verceli",
    },
    {
      title: "Genio Mind",
      description:
        "Chatbot for generating SaaS ideas with memory registration for fine-tuning.",
      imgSrc:
        "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/genio-mind.png",
      icon: <SiReact size={18} />,
      link: "/projects/genio",
    },
    {
      title: "Next Web",
      description:
        "A web development agency concept built with a Moroccan team, just for fun.",
      imgSrc:
        "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/NextWeb.png",
      icon: <SiReact size={18} />,
      link: "/projects/next",
    },
    {
      title: "Rona Li",
      description:
        "Platform for file uploads, URL shortening, and note-taking.",
      imgSrc:
        "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/rona-li.png",
      icon: <SiJquery size={18} />,
      link: "/projects/rona",
    },
  ];
  const router = useRouter()

  return (
    <section className="mt-40 flex items-start gap-4 mb-[200px]">
      <div className="flex flex-col items-center h-full">
        <div className="p-2 border rounded-full flex flex-col gap-4">
          <TrafficCone size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full">
        <div className="text-[16px] leading-[20px] tracking-[0px]">
          Projects
        </div>
        <p className="font-extralight text-pretty text-[16.5px] leading-[27px] tracking-[0px] text-muted-foreground mt-2">
          A few things I’ve built and worked on.
        </p>

        <div className="mt-4 flex flex-col gap-5 w-full">
          {projectData.map((project, index) => (
              <div
                  key={index}
                  className="border rounded-lg cursor-pointer flex flex-col md:flex-row w-full h-[120px]"
                  onClick={() => router.push(project.link)}
              >
                {/* Image Section */}
                <div className="hidden md:block relative  w-1/3 m-3">
                  <Image
                      src={project.imgSrc}
                      alt={project.title}
                      layout="fill"
                      className="object-contain rounded-lg border"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-black w-8 h-8 flex items-center justify-center text-white rounded-md">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col gap-2 w-full justify-center">
                  <h3 className="text-md font-semibold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
}
