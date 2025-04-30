import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
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
import cw from '../../assets/screenshots/cw-screenshot.png'
import todo_list from '../../assets/screenshots/todo-list-screenshot.png'
import e_market from '../../assets/screenshots/emarket-screenshot.png'
import evento from '../../assets/screenshots/eventos-screenshots.png'
import croche from '../../assets/screenshots/croche-screenshot.png'
import netflix from '../../assets/screenshots/netflix-screenshot.png'
import social_media from '../../assets/screenshots/social-media-screenshot.png'
import smart_soft from '../../assets/screenshots/smart-soft-screenshot.png'
import recipe from '../../assets/screenshots/recipe-screenshot.png'
import { VscDebugStart } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { useState } from "react";
import { ProjectDialog } from "../ui/project_dialog";
import { ProjecInfo } from "@/types/project";

const projects: ProjecInfo[] = [
  { title: 'Calisthenics Workout', photo: cw, link: 'https://calisthenics-workout-knqn.vercel.app', github: 'https://github.com/vinidiias/calisthenics-workout', tech: [react, material_ui, tailwindcss, query, jotai, node, mongoDB], about: 'Calisthenics Workout é uma rede social voltada para entusiastas da calistenia, onde os usuários podem criar, agendar e participar de treinos com data e hora marcadas. Além disso, a plataforma permite seguir outros usuários, incentivando a interação e o engajamento entre praticantes.' },
  { title: 'Todo-List', photo: todo_list, link: 'https://todo-list-omega-sooty.vercel.app/login', github: 'https://github.com/vinidiias/todo-list', tech: [react, node, mongoDB], about: 'Todo List é uma aplicação full stack de gerenciamento de tarefas que permite aos usuários realizar operações completas de CRUD (criar, ler, atualizar e deletar tarefas). Além disso, as tarefas podem ser marcadas como finalizadas. A aplicação conta com autenticação de usuário, garantindo que cada pessoa tenha acesso apenas às suas próprias tarefas.' },
  { title: 'E-Market', photo: e_market, link: 'https://e-market-iota.vercel.app', github: 'https://github.com/vinidiias/e-market', tech: [html, css, js, bootstrap], about: 'E-Market é um mercadinho online onde os usuários podem visualizar, adicionar e remover produtos, além de adicionar itens ao carrinho de compras. O projeto simula operações de um e-commerce básico, utilizando o JSON-Server como banco de dados, oferecendo uma experiência de front-end integrada com uma API fake para persistência dos dados.' },
  { title: 'Sistema de Gestão de Eventos', photo: evento, link: 'https://sistema-gestao-de-eventos.vercel.app/login', github: 'https://github.com/vinidiias/sistema-gestao-de-eventos', tech: [react], about: 'Sistema de Gestão de Eventos é uma aplicação front-end que permite aos usuários criar e participar de eventos, oferecendo uma interface intuitiva para o gerenciamento de atividades. O foco está na experiência do usuário ao interagir com eventos, seja como organizador ou participante.' },
  { title: 'Catalogo Crochê', photo: croche, link: 'https://catalogo-croche.vercel.app', github: 'https://github.com/vinidiias/catalogo_croche', tech: [react, node, mongoDB], about: 'Catálogo de Crochê é um sistema full stack que funciona como uma vitrine online de produtos de crochê à venda. Os clientes podem navegar pelos itens disponíveis, selecionar um produto e ser redirecionados para o WhatsApp com a informação do item escolhido para facilitar a compra. Apenas o administrador tem permissão para cadastrar e remover produtos, garantindo controle sobre o catálogo.' },
  { title: 'Netflix for my GF', photo: netflix, link: 'https://netfix-mylove.vercel.app', github: 'https://github.com/vinidiias/netfix_girlfriend', tech: [react], about: 'Netflix Romântico é um projeto front-end criado como homenagem personalizada, inspirado na interface da Netflix. Desenvolvido especialmente para a minha namorada, o projeto simula uma plataforma de streaming com uma temática romântica, oferecendo uma experiência visual envolvente e afetiva.' },
  { title: 'Social Media', photo: social_media, link: 'https://social-media-react-seven.vercel.app', github: 'https://github.com/vinidiias/social-media-react', tech: [react], about: 'Social Media é um projeto front-end simples e direto, criado para exibir de forma organizada os links das minhas redes sociais. Ideal para uso como cartão de visita digital ou landing page pessoal, facilitando o acesso aos meus perfis online.' },
  { title: 'Smart Soft Auth', photo: smart_soft, link: 'https://login-screen-smart-soft.vercel.app', github: 'https://github.com/vinidiias/login-screen-smart-soft', tech: [html, css, js], about: 'Smart Soft Auth é um projeto front-end desenvolvido com HTML, CSS e JavaScript, que apresenta uma interface de login e registro de usuários. Com um design limpo e responsivo, o sistema é ideal como base para aplicações que requerem autenticação.' },
  { title: 'Recipe Page', photo: recipe, link: 'https://recipe-page-main-eosin.vercel.app', github: 'https://github.com/vinidiias/recipe-page-main', tech: [html, css], about: 'Recipe Page é um design de site que exibe uma única receita, com todos os detalhes necessários, como ingredientes, modo de preparo e imagens. O layout foi criado para ser simples e direto, destacando a receita de forma clara e atraente, ideal para um blog ou página dedicada a um prato específico.' },
];

export const Projects = () => {
    const [projectselected, setProjectSelected] = useState<ProjecInfo | null>(null)
    const [open, setOpen] = useState(false)

    const handleClick = (project: ProjecInfo): void => {
      console.log(project)
        setOpen(true)
        setProjectSelected({...project})
    }

    return (
      <section className="w-full" id="projects">
        <ProjectDialog project={projectselected} open={open} handleClose={() => setOpen(false)}  />
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-3xl text-center font-semibold mb-4 tracking-tight">
            Projetos
          </h2>
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-15 max-w-[1200px]">
            {projects.map((project, index) => (
              <Card key={index} className="w-[350px] max-md:w-[300px] gap-0">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
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
                    <Button onClick={() => handleClick(project)}>Saiba mais</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-1">
                <a href={project.link} target="_blank"><Button variant='ghost' size='default'>Start<VscDebugStart /></Button></a>
                <a href={project.github} target="_blank"><Button variant='ghost' size='icon'><FaGithub size='large' /></Button></a>
              </CardFooter>
            </Card>
            ))}
          </div>
        </div>
      </section>
    );
}