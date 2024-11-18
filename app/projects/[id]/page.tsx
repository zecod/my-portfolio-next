"use client";

import { use } from "react";
import { Verceli } from "@/components/app/home/projects/projects-page/Verceli";
import { Genio } from "@/components/app/home/projects/projects-page/GenioMind";
import { NextWeb } from "@/components/app/home/projects/projects-page/Next";
import { RonaLi } from "@/components/app/home/projects/projects-page/RonaLi";

const projectDetails = {
  verceli: <Verceli />,
  genio: <Genio />,
  next: <NextWeb />,
  rona: <RonaLi />,
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params); // Unwrap the promise
  const project =
    projectDetails[unwrappedParams.id as keyof typeof projectDetails];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <div>{project}</div>;
}
