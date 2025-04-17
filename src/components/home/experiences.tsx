import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type ExperincesType = {
  title: string;
  description: string;
  enterprise: 'Itaipu Parquetec' | 'Unioeste' | 'Smoke Burguer'
  period: string;
}
const experiences: ExperincesType[] = [
  {
    title: "Estágio em Desenvolvimento Web",
    enterprise: "Itaipu Parquetec",
    period: "Jan/2025 - Atual",
    description:
      "Desenvolvi componentes reutilizáveis utilizando React.js e TypeScript seguinte boas práticas, organização de código e padrões de desenvolvimento de software da empresa. Trabalhei com diversas bibliotecas do ecossistema React e controlei versões no GitHub.",
  },
  {
    title: "Estágio em Desenvolvimento Web",
    enterprise: "Unioeste",
    period: "Fev/2024 - Mar/2025",
    description:
      "Realizei análises de requisitos com o cliente e desenvolvi o sistema de agendamento de consultas para a clínica de psicologia da universidade utilizando React.js e bibliotecas do ecossistema. Trabalhei na prototipação e validação da telas. Implemente a integração entre o front-end e back-end utilizando Axios.",
  },
];
export const Experiences: React.FC = () => {
    return (
      <section className="w-full">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-3xl font-semibold mb-4 tracking-tight">
            Experiências
          </h2>
          <div>
            <Tabs defaultValue="exp 1" className="w-[900px]">
              <TabsList className="grid w-full grid-cols-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <TabsTrigger value={`exp ${index + 1}`}>{`Experiência ${
                    index + 1
                  }`}</TabsTrigger>
                ))}
              </TabsList>
              {experiences?.map((item, index) => (
                <TabsContent key={index} value={`exp ${index + 1}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {item.title} -{" "}
                        <span className="font-normal text-xl dark:text-[#BDBEBF]">{item.period}</span>
                      </CardTitle>
                      <CardDescription className="text-xl text-skill">{item.enterprise}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-lg dark:text-[#BDBEBF]">{item.description}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    );
}