// COMPONENTS
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
// LOGOS
import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import js from "@/assets/js.svg";
import react from "@/assets/react.svg";
import tailwindcss from "@/assets/tailwindcss.svg";
import bootstrap from "@/assets/bootstrap.svg";
import query from "@/assets/query.svg";
import jotai from "@/assets/jotai.svg";
import jotai_black from "@/assets/jotai_black.svg";
import material_ui from "@/assets/material-ui.svg";
import node from "@/assets/node.svg";
import mongoDB from "@/assets/mongoDB.svg";
import docker from "@/assets/docker.svg";
import next_white from "@/assets/next_white.svg";
import next_black from "@/assets/next_black.svg";
import shadcn from "@/assets/shadcn-ui.svg";
// SCREENSHOTS
import cw from "../../assets/screenshots/cw-screenshot.png";
import todo_list from "@/assets/screenshots/todo-list-screenshot.png";
import e_market from "@/assets/screenshots/emarket-screenshot.png";
import evento from "@/assets/screenshots/eventos-screenshots.png";
import croche from "@/assets/screenshots/croche-screenshot.png";
import netflix from "@/assets/screenshots/netflix-screenshot.png";
import social_media from "@/assets/screenshots/social-media-screenshot.png";
import smart_soft from "@/assets/screenshots/smart-soft-screenshot.png";
import recipe from "@/assets/screenshots/recipe-screenshot.png";
import ts from "@/assets/ts.svg";
import smoke_burguer from "../../assets/screenshots/smoke-burguer-screenshot.png"
import { VscDebugStart } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { useMemo, useState } from "react";
import { ProjectDialog } from "../ui/project_dialog";
import { ProjecInfo } from "@/types/project";
import { UseMediaQuery } from "@/hooks/use_media_query";
import { useIntl } from "react-intl";
import { useTheme } from "@/hooks/useTheme";

export const Projects = () => {
  const [projectselected, setProjectSelected] = useState<ProjecInfo | null>(null);
  const [open, setOpen] = useState(false);

  const { theme } = useTheme();

  const intl = useIntl();

  const isDesktop = UseMediaQuery("(min-width: 768px)");

  const handleClick = (project: ProjecInfo): void => {
    setOpen(true);
    setProjectSelected({ ...project });
  };

  const projects: ProjecInfo[] = useMemo(() => [
  {
    title: "projects1.title",
    photo: cw,
    link: "https://calisthenics-workout-knqn.vercel.app",
    github: "https://github.com/vinidiias/calisthenics-workout",
    tech: [
      react,
      material_ui,
      tailwindcss,
      query,
      theme === 'dark' ? jotai : jotai_black,
      node,
      mongoDB,
      docker,
    ],
    about: 'projects1.about',
  },
  {
    title: "projects2.title",
    photo: smoke_burguer,
    link: "https://smoke-burguer-2ywq.vercel.app/",
    github: "https://github.com/vinidiias/smoke-burguer",
    tech: [
      react,
      ts,
      theme === 'dark' ? next_white : next_black,
      shadcn,
      tailwindcss,
      theme === 'dark' ? jotai : jotai_black,
    ],
    about: 'projects2.about',
  },
  {
    title: "projects3.title",
    photo: todo_list,
    link: "https://todo-list-omega-sooty.vercel.app/login",
    github: "https://github.com/vinidiias/todo-list",
    tech: [react, node, mongoDB],
    about:
      "projects3.about",
  },
  {
    title: "projects4.title",
    photo: e_market,
    link: "https://e-market-iota.vercel.app",
    github: "https://github.com/vinidiias/e-market",
    tech: [html, css, js, bootstrap],
    about:
      "projects4.about",
  },
  {
    title: "projects5.title",
    photo: evento,
    link: "https://sistema-gestao-de-eventos.vercel.app/login",
    github: "https://github.com/vinidiias/sistema-gestao-de-eventos",
    tech: [react],
    about:
      "projects5.about",
  },
  {
    title: "projects6.title",
    photo: croche,
    link: "https://catalogo-croche.vercel.app",
    github: "https://github.com/vinidiias/catalogo_croche",
    tech: [react, node, mongoDB],
    about:
      "projects6.about",
  },
  {
    title: "projects67.title",
    photo: netflix,
    link: "https://netfix-mylove.vercel.app",
    github: "https://github.com/vinidiias/netfix_girlfriend",
    tech: [react],
    about:
      "projects7.about",
  },
  {
    title: "projects8.title",
    photo: social_media,
    link: "https://social-media-react-seven.vercel.app",
    github: "https://github.com/vinidiias/social-media-react",
    tech: [react],
    about:
      "projects8.about",
  },
  {
    title: "projects9.title",
    photo: smart_soft,
    link: "https://login-screen-smart-soft.vercel.app",
    github: "https://github.com/vinidiias/login-screen-smart-soft",
    tech: [html, css, js],
    about:
      "projects9.about",
  },
  {
    title: "projects10.title",
    photo: recipe,
    link: "https://recipe-page-main-eosin.vercel.app",
    github: "https://github.com/vinidiias/recipe-page-main",
    tech: [html, css],
    about:
      "projects10.about",
  },
], [theme])

  return (
    <section className="w-full" id="projects">
      <ProjectDialog
        project={projectselected}
        open={open}
        handleClose={() => setOpen(false)}
      />
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-3xl text-center font-semibold mb-4 tracking-tight">
          {intl.formatMessage({ id: 'projects_title' })}
        </h2>
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-15 max-w-[1200px]">
          {projects.map((project, index) => (
            <Card key={index} className="w-[350px] max-md:w-[300px] gap-0">
              <CardHeader>
                <CardTitle>{intl.formatMessage({ id: project.title })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col group relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={project.photo}
                      alt="a"
                      className="w-full h-full object-contain"
                    />
                  </AspectRatio>
                  {isDesktop && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out">
                      <Button
                        onClick={() => handleClick(project)}
                        variant="secondary"
                      >
                        {intl.formatMessage({ id: 'learn_more' })}
                      </Button>
                    </div>
                  )}

                  {!isDesktop && (
                    <Button
                      onClick={() => handleClick(project)}
                      variant="secondary"
                    >
                      {intl.formatMessage({ id: 'learn_more' })}
                    </Button>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-1">
                <a href={project.link} target="_blank">
                  <Button variant="ghost" size="default">
                    Start
                    <VscDebugStart />
                  </Button>
                </a>
                <a href={project.github} target="_blank">
                  <Button variant="ghost" size="icon">
                    <FaGithub size="large" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
