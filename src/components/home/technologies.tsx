import LoopingContainer from "../ui/looping_container";
import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import js from "@/assets/js.svg";
import react from "@/assets/react.svg";
import ts from "@/assets/ts.svg";
import tailwindcss from "@/assets/tailwindcss.svg";
import bootstrap from "@/assets/bootstrap.svg";
import query from "@/assets/query.svg";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const items = [
  { id: 1, icon: html, title: "HTML" },
  { id: 2, icon: css, title: "CSS" },
  { id: 3, icon: js, title: "JavaScript" },
  { id: 4, icon: react, title: "React" },
  { id: 5, icon: ts, title: "Typescript" },
  { id: 6, icon: tailwindcss, title: "Tailwind CSS" },
  { id: 7, icon: bootstrap, title: "Bootstrap" },
  { id: 8, icon: query, title: "React Query" },
];

export const Technologies: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl text-center font-medium mb-4 tracking-tight">
        Tecnologias
      </h2>
      <div className="w-full">
        <LoopingContainer speed={100} className="py-4">
          {items.map((item) => (
            <Card className="text-center bg-transparent w-[200px] h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center" >
                <img src={item.icon} alt="" className="w-15 bg-color-white" />
              </CardContent>
            </Card>
          ))}
        </LoopingContainer>
      </div>
    </section>
  );
};
