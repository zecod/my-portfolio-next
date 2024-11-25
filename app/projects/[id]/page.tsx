"use client";

import React, { useEffect, useState } from "react";
import { Verceli } from "@/components/app/home/projects/projects-page/Verceli";
import { Genio } from "@/components/app/home/projects/projects-page/GenioMind";
import { NextWeb } from "@/components/app/home/projects/projects-page/Next";
import { RonaLi } from "@/components/app/home/projects/projects-page/RonaLi";
import { use } from "react";

const projectDetails = {
  verceli: <Verceli />,
  genio: <Genio />,
  next: <NextWeb />,
  rona: <RonaLi />,
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [redirecting, setRedirecting] = useState(false);

  const project =
    projectDetails[unwrappedParams.id as keyof typeof projectDetails];

  useEffect(() => {
    if (!project) {
      setRedirecting(true);
      window.location.assign("/404");
    }
  }, [project]);

  if (redirecting) return null;

  return <div>{project}</div>;
}
