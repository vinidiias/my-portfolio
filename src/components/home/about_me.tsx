import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"
import me_rounded from '@/assets/me_rounded.png'
import * as motion from 'motion/react-client'

export const AboutMe: React.FC = () => {
    return (
      <section className="flex justify-center w-full">
        <div className="flex gap-5 max-w-[1000px] w-full">
          <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="w-[50%]">
            <AspectRatio ratio={1 / 1}>
              <img
                src={me_rounded}
                alt="Image Vini Dias"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </motion.div>
          <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
           className="w-[50%]">
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight"
            >
              Vinícius de Oliveira Dias
            </h1>
            <h2 className="scroll-m-20 text-skill border-b pb-2 text-2xl font-semibold tracking-tight">
              Desenvolvedor Front-End
            </h2>
            <p className="text-lg leading-8 [&:not(:first-child)]:mt-6 text-justify">
              Seja bem vindo ao meu portfólio!
              <br />
              Sou Desenvolvedor Front-End focado no uso de{" "}
              <span className="text-skill font-medium">React.js</span>,{" "}
              <span className="text-skill font-medium">Typescript</span> e
              frameworks modernos.
              <br />
              Tenho fortes habilidades nas tecnologias como{" "}
              <span className="text-skill font-medium">React.js</span>,{" "}
              <span className="text-skill font-medium">TypeScript</span>,{" "}
              <span className="text-skill font-medium">Tailwind CSS</span>,{" "}
              <span className="text-skill font-medium">Material-UI</span> e{" "}
              <span className="text-skill font-medium">Node.js</span>.
            </p>
            <div className="flex gap-5 items-center mt-5">
              <Button className="bg-skill">Download CV</Button>
              <Button variant={"outline"}>Entrar em contato</Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
}