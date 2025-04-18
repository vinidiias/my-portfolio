import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TimelineLayout } from "../ui/timeline-layout";
import * as motion from "motion/react-client"

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
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <TimelineLayout />
          </motion.div>
        </div>
      </section>
    );
}