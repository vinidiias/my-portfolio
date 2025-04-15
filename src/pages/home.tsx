import { AboutMe } from '@/components/home/about_me';
import { Technologies } from '@/components/home/technologies';
import { Separator } from '@/components/ui/separator';

export const Home: React.FC = () => {
    return (
      <div className="flex flex-col flex-1 gap-15 mt-10 py-10">
        <AboutMe />
        <Separator />
       <Technologies />
      </div>
    );
}