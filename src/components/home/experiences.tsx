import { TimelineLayout } from "../ui/timeline-layout";
import * as motion from "motion/react-client"

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