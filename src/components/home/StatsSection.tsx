import { motion } from "framer-motion";
import { Users, DollarSign, Calendar, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1,250+",
    label: "Community Members",
    description: "Active congregation",
  },
  {
    icon: DollarSign,
    value: "$125K",
    label: "Donations This Year",
    description: "Community generosity",
  },
  {
    icon: Calendar,
    value: "48",
    label: "Events Hosted",
    description: "This month",
  },
  {
    icon: BookOpen,
    value: "15",
    label: "Weekly Classes",
    description: "Educational programs",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 pattern-islamic-gold opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                <stat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <p className="text-4xl font-bold text-primary-foreground mb-1">{stat.value}</p>
              <p className="text-lg font-medium text-primary-foreground/90">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
