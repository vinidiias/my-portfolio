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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { useTheme } from "@/hooks/useTheme";
import { useMemo } from "react";
import * as motion from "motion/react-client"

export const Technologies: React.FC = () => {
  const { theme } = useTheme()
  console.log(theme)
  const items = useMemo(
    () => [
      { id: 1, icon: html, title: "HTML", x: 300 },
      { id: 2, icon: css, title: "CSS", x: 300 },
      { id: 3, icon: js, title: "JavaScript", x: 300 },
      { id: 4, icon: react, title: "React", x: 300 },
      { id: 5, icon: ts, title: "Typescript", x: 300 },
      { id: 6, icon: tailwindcss, title: "Tailwind CSS", x: 300 },
      { id: 7, icon: bootstrap, title: "Bootstrap", x: 300 },
      { id: 8, icon: query, title: "React Query", x: 300 },
      { id: 9, icon: hook_form, title: "React Hook Form", x: 300 },
      { id: 10, icon: theme === "dark" ? jotai : jotai_dark, title: "Jotai", x: 300 },
      { id: 11, icon: material_ui, title: "Material UI", x: 300 },
      { id: 12, icon: shadcn_ui, title: "Shadcn UI", x: 300 },
      { id: 13, icon: node, title: "Node.js", x: 300 },
      { id: 14, icon: theme === "dark" ? express_white : express_black, title: "Express.js", x: 300 },
      { id: 15, icon: mongoDB, title: "MongoDB", x: 300 },
      { id: 16, icon: docker, title: "Docker", x: 300 },
      { id: 17, icon: git, title: "Git", x: 300 },
      { id: 18, icon: theme === 'dark' ? github_white : github_black, title: "GitHub", x: 300 },
      { id: 19, icon: theme === 'dark' ? vercel_black : vercel_white, title: "Vercel", x: 300 },
    ],
    [theme]
  );

  return (
    <section className="w-full">
        <div className="flex flex-col items-center gap-5 py-5">
          <h2 className="text-3xl text-center font-semibold mb-4 tracking-tight">
            Tecnologias
          </h2>
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-15 max-w-[1000px]">
            <TooltipProvider>
              {items.map((item) => (
                <motion.div
                  className="border-1 border-gray bg-card flex items-center p-3 px-4 rounded shadow"
                  whileHover={{
                    scale: [null, 1.2, 1.2],
                    transition: {
                      duration: 0.5,
                      times: [0, 0.6, 1],
                      ease: ["easeInOut", "easeOut"],
                    },
                  }}
                  initial={{ opacity: 0, x: item.x }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img src={item.icon} alt={item.title} className="w-15" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </TooltipProvider>
          </div>
        </div>
    </section>
  );
};
