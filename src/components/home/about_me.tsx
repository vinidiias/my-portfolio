import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import me_rounded from "@/assets/me_rounded.png";
import * as motion from "motion/react-client";
import { FiLinkedin } from "react-icons/fi";
import { useIntl } from "react-intl";

export const AboutMe: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="m-auto w-full max-w-[1000px]" id="about">
      <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="w-[100%] lg:w-[50%]"
        >
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
          className="w-[100%] max-md:flex max-md:flex-col max-md:justify-center max-md:items-center text-center md:text-justify lg:w-[50%]"
        >
          <div className="max-md:w-100">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
              Vinícius de Oliveira Dias
            </h1>
            <h2 className="scroll-m-20 text-skill border-b pb-2 text-2xl font-semibold tracking-tight">
              {intl.formatMessage({ id: 'dev' })}
            </h2>
            <p className="text-lg leading-8 [&:not(:first-child)]:mt-6 text-center md:text-justify">
              {intl.formatMessage({ id: 'welcome' })}
              <br />
              {intl.formatMessage({ id: 'iam' })}{" "}
              <span className="text-skill font-medium">React.js</span>,{" "}
              <span className="text-skill font-medium">Typescript</span> {intl.formatMessage({ id: 'and' })}{" "}
              {intl.formatMessage({ id: 'modern_frameworks' })}.
              <br />
              {intl.formatMessage({ id: 'strong_skills' })}{" "}
              <span className="text-skill font-medium">React.js</span>,{" "}
              <span className="text-skill font-medium">TypeScript</span>,{" "}
              <span className="text-skill font-medium">Tailwind CSS</span>,{" "}
              <span className="text-skill font-medium">Material-UI</span> {intl.formatMessage({id: 'and'})}{" "}
              <span className="text-skill font-medium">Node.js</span>.
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center md:justify-start mt-5">
            <Button className="bg-skill" asChild>
              <a href="/CV_ViniDias.pdf" download>
                Download CV
              </a>
            </Button>
            <Button variant={"outline"} className="bg-[#fffa]" asChild>
              <a href="https://wa.me/5545991330882" target="_blank">
                {intl.formatMessage({ id: 'get_in_touch' })}
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/vinicius-diass/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
