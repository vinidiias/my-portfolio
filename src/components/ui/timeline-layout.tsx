import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from '@/components/ui/timeline';

type TimelineItemType = {
  id: number;
  title: string;
  description?: string;
  time: string;
};

const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: 'Chapeiro',
    description:
      'Smoke Burguer',
    time: 'Mar/2020 - Mar/2021',
  },
  {
    id: 2,
    title: 'Assistente de TI e Marketing',
    description:
      'Iguacon Imobiliária',
    time: 'Set/2021 - Nov/2021',
  },
  {
    id: 3,
    title: 'Bolsista em Processamento de Áudio',
    description: 'Itaipu Parquetec',
    time: 'Jul/2024 - Out/2024',
  },
  {
    id: 4,
    title: 'Estágio em Processamento de Áudio',
    description: 'Itaipu Parquetec',
    time: 'Out/2024 - Jan/2025',
  },
  {
    id: 5,
    title: 'Estágio em Desenvolvimento Web',
    description: 'Universidade Estadual do Oeste do Paraná',
    time: 'Fev/2024 - Mar/2025',
  },
  {
    id: 6,
    title: 'Estágio em Desenvolvimento Web',
    description: 'Itaipu Parquetec',
    time: 'Jan/2025 - Atual',
  },
];

export const TimelineLayout = () => {
  return (
    <Timeline>
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
