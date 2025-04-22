import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import cw from '../../assets/screenshots/cw-screenshot.png'
import todo_list from '../../assets/screenshots/todo-list-screenshot.png'
import e_market from '../../assets/screenshots/emarket-screenshot.png'
import evento from '../../assets/screenshots/eventos-screenshots.png'
import croche from '../../assets/screenshots/croche-screenshot.png'
import netflix from '../../assets/screenshots/netflix-screenshot.png'
import social_media from '../../assets/screenshots/social-media-screenshot.png'
import smart_soft from '../../assets/screenshots/smart-soft-screenshot.png'
import recipe from '../../assets/screenshots/recipe-screenshot.png'
import { AspectRatio } from "../ui/aspect-ratio";
import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import js from "@/assets/js.svg";
import react from "@/assets/react.svg";
import ts from "@/assets/ts.svg";
import tailwindcss from "@/assets/tailwindcss.svg";
import bootstrap from "@/assets/bootstrap.svg";
import query from "@/assets/query.svg";
import hook_form from "@/assets/hook-form.png";
import jotai from "@/assets/jotai.svg";
import jotai_dark from "@/assets/jotai_black.svg";
import material_ui from "@/assets/material-ui.svg";
import shadcn_ui from "@/assets/shadcn-ui.svg";
import node from "@/assets/node.svg";
import express_white from "@/assets/express_white.svg";
import express_black from "@/assets/express_black.svg";
import mongoDB from "@/assets/mongoDB.svg";
import docker from "@/assets/docker.svg";
import git from "@/assets/git.svg";
import github_black from "@/assets/github_black.svg";
import github_white from "@/assets/github_white.svg";
import vercel_black from "@/assets/vercel_black.svg";
import vercel_white from "@/assets/vercel_white.svg";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Button } from "../ui/button";

const projects = [
  { title: 'Calisthenics Workout', photo: cw },
  { title: 'Todo-List', photo: todo_list },
  { title: 'E-Market', photo: e_market },
  { title: 'Sistema de Gestão de Eventos', photo: evento },
  { title: 'Catalogo Crochê', photo: croche },
  { title: 'Netflix for my GF', photo: netflix },
  { title: 'Social Media', photo: social_media },
  { title: 'Smart Soft Auth', photo: smart_soft },
  { title: 'Recipe Page', photo: recipe },
];

export const Projects = () => {
    const [projectselected, setProjectSelected] = useState(null)

    return (
      <section className="w-full">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-3xl text-center font-semibold mb-4 tracking-tight">
            Projetos
          </h2>
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-15 max-w-[1200px]">
            {projects.map((project, index) => (
              <Card className="w-[350px] gap-0">
              <CardHeader>
                <CardTitle>Calisthenics {project.title}</CardTitle>
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
                  <div className="absolute inset-0 flex items-center justify-center bg-background opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out">
                    <Button>Saiba mais</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </section>
    );
}