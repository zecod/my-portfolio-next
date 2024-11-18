"use client";

import React from "react";
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

export default function Page({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id as keyof typeof projectDetails];

  if (!project) {
    React.useEffect(() => {
      window.location.assign("/404");
    }, []);

    return null;
  }

  return <div>{project}</div>;
}
