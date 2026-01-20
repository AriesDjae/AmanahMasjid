import { motion } from "framer-motion";
import { Users, DollarSign, Calendar, Clock, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    label: "Total Members",
    value: "1,247",
    change: "+12%",
    trend: "up",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    label: "Monthly Donations",
    value: "$24,350",
    change: "+8%",
    trend: "up",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Calendar,
    label: "Upcoming Events",
    value: "12",
    change: "+3",
    trend: "up",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    label: "Prayer Attendance",
    value: "485",
    change: "-5%",
    trend: "down",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const QuickStats = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-0 shadow-soft hover:shadow-card transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === "up" ? "text-primary" : "text-destructive"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickStats;
