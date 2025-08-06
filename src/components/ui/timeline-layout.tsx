import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/ui/timeline";
import { useIntl } from "react-intl";

export const TimelineLayout = () => {
  const intl = useIntl();

  return (
    <Timeline>
      {Array.from({ length: 7 }).map((_, index) => {
        const dateFrom = intl.formatMessage({
          id: `experience${index + 1}.date.from`,
        });
        const dateTo = intl.formatMessage({
          id: `experience${index + 1}.date.to`,
        });

        return (
          <TimelineItem key={index}>
            <TimelineHeader>
              <TimelineTime>
                {intl
                  .formatDate(new Date(dateFrom), {
                    year: "numeric",
                    month: "short",
                  })
                  .replace(". de ", " ")}
                {" - "}
                {dateTo !== "present"
                  ? intl
                      .formatDate(new Date(dateTo), {
                        year: "numeric",
                        month: "short",
                      })
                      .replace(". de ", " ")
                  : intl.formatMessage({ id: dateTo })}
              </TimelineTime>
              <TimelineTitle>
                {intl.formatMessage({ id: `experience${index + 1}.title` })}
              </TimelineTitle>
            </TimelineHeader>
            <TimelineDescription>
              {intl.formatMessage({ id: `experience${index + 1}.enterprise` })}
            </TimelineDescription>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
