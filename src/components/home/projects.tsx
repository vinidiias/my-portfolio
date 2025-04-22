import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
            </Card>
            ))}
          </div>
        </div>
      </section>
    );
}