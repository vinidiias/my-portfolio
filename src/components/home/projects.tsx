import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
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

const projects = [
  { title: 'Calisthenics Workout', photo: cw, link: 'https://calisthenics-workout-knqn.vercel.app', github: 'https://github.com/vinidiias/calisthenics-workout' },
  { title: 'Todo-List', photo: todo_list, link: 'https://todo-list-omega-sooty.vercel.app/login', github: 'https://github.com/vinidiias/todo-list' },
  { title: 'E-Market', photo: e_market, link: 'https://e-market-iota.vercel.app', github: 'https://github.com/vinidiias/e-market' },
  { title: 'Sistema de Gestão de Eventos', photo: evento, link: 'https://sistema-gestao-de-eventos.vercel.app/login', github: 'https://github.com/vinidiias/sistema-gestao-de-eventos' },
  { title: 'Catalogo Crochê', photo: croche, link: 'https://catalogo-croche.vercel.app', github: 'https://github.com/vinidiias/catalogo_croche' },
  { title: 'Netflix for my GF', photo: netflix, link: 'https://netfix-mylove.vercel.app', github: 'https://github.com/vinidiias/netfix_girlfriend' },
  { title: 'Social Media', photo: social_media, link: 'https://social-media-react-seven.vercel.app', github: 'https://github.com/vinidiias/social-media-react' },
  { title: 'Smart Soft Auth', photo: smart_soft, link: 'https://login-screen-smart-soft.vercel.app', github: 'https://github.com/vinidiias/login-screen-smart-soft' },
  { title: 'Recipe Page', photo: recipe, link: 'https://recipe-page-main-eosin.vercel.app', github: 'https://github.com/vinidiias/recipe-page-main' },
];

export const Projects = () => {
    //const [projectselected, setProjectSelected] = useState(null)

    return (
      <section className="w-full">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-3xl text-center font-semibold mb-4 tracking-tight">
            Projetos
          </h2>
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-15 max-w-[1200px]">
            {projects.map((project, index) => (
              <Card key={index} className="w-[350px] gap-0">
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
                    <Button>Saiba mais</Button>
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