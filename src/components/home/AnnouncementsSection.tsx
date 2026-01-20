import { motion } from "framer-motion";
import { Bell, ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const announcements = [
  {
    id: 1,
    title: "Ramadan Preparation Program",
    description: "Join us for our annual Ramadan preparation workshop. Learn tips for spiritual growth and community iftar planning.",
    date: "January 25, 2026",
    category: "Event",
    isNew: true,
  },
  {
    id: 2,
    title: "Youth Islamic Studies Class",
    description: "New semester begins for youth ages 12-18. Register now for weekly Quran and Islamic studies.",
    date: "January 22, 2026",
    category: "Education",
    isNew: true,
  },
  {
    id: 3,
    title: "Community Fundraising Dinner",
    description: "Annual fundraising dinner to support mosque expansion project. Tickets available at the office.",
    date: "February 5, 2026",
    category: "Fundraising",
    isNew: false,
  },
];

const upcomingEvents = [
  { name: "Friday Jummah", time: "1:00 PM", date: "Every Friday" },
  { name: "Quran Study Circle", time: "7:00 PM", date: "Tuesdays" },
  { name: "Sisters' Halaqah", time: "10:00 AM", date: "Saturdays" },
  { name: "Youth Group Meeting", time: "5:00 PM", date: "Sundays" },
];

const AnnouncementsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Bell className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  Announcements
                </h2>
              </div>
              <Button variant="ghost" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-soft hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge 
                              variant={announcement.category === "Event" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {announcement.category}
                            </Badge>
                            {announcement.isNew && (
                              <Badge variant="outline" className="text-xs border-secondary text-secondary">
                                New
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg text-foreground mb-2">
                            {announcement.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {announcement.description}
                          </p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {announcement.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-card sticky top-24">
              <CardHeader className="gradient-primary rounded-t-lg">
                <CardTitle className="text-primary-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={event.name}
                      className="p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <p className="font-medium text-foreground">{event.name}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <p className="text-sm font-medium text-primary">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 pt-2">
                  <Button variant="outline" className="w-full">
                    View Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
