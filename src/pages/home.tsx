import { AboutMe } from '@/components/home/about_me';
import { Experiences } from '@/components/home/experiences';
import { Projects } from '@/components/home/projects';
import { Technologies } from '@/components/home/technologies';
import { Separator } from '@/components/ui/separator';

export const Home: React.FC = () => {
    return (
      <div className="flex flex-col flex-1 gap-15 mt-10 py-10 lg:px-20">
        <AboutMe />
        <Separator />
        <Experiences />
        <Separator />
        <Technologies />
        <Separator />
        <Projects />
      </div>
    );
}