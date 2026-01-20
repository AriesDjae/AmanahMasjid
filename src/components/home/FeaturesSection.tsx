import { motion } from "framer-motion";
import { 
  Clock, 
  DollarSign, 
  Calendar, 
  Users, 
  BookOpen, 
  Building2,
  Bell,
  Calculator
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Prayer Times",
    description: "Accurate prayer times with notifications and Jummah schedules",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "Track donations, expenses, and generate transparent reports",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description: "Schedule and manage Islamic events, classes, and gatherings",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Community Directory",
    description: "Connect members and coordinate volunteer activities",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Share Islamic knowledge, lectures, and learning resources",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Building2,
    title: "Facility Booking",
    description: "Reserve mosque spaces for events and special occasions",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Bell,
    title: "Announcements",
    description: "Keep the community informed with important updates",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Calculator,
    title: "Zakat Calculator",
    description: "Calculate and track Zakat obligations accurately",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30 pattern-islamic">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Everything Your Mosque Needs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform designed to streamline mosque operations and strengthen community bonds
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-card hover:shadow-elevated transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
