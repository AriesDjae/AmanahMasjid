import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Friday Jummah Prayer",
    date: "Jan 24, 2026",
    time: "1:00 PM",
    location: "Main Prayer Hall",
    attendees: 350,
    type: "Prayer",
  },
  {
    id: 2,
    title: "Youth Islamic Studies",
    date: "Jan 25, 2026",
    time: "10:00 AM",
    location: "Classroom A",
    attendees: 25,
    type: "Education",
  },
  {
    id: 3,
    title: "Community Iftar Prep Meeting",
    date: "Jan 26, 2026",
    time: "7:00 PM",
    location: "Conference Room",
    attendees: 12,
    type: "Meeting",
  },
  {
    id: 4,
    title: "Sisters' Halaqah",
    date: "Jan 27, 2026",
    time: "10:00 AM",
    location: "Sisters' Prayer Hall",
    attendees: 45,
    type: "Education",
  },
];

const UpcomingEvents = () => {
  return (
    <Card className="border-0 shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Upcoming Events
        </CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-foreground">{event.title}</h4>
                    <Badge variant={event.type === "Prayer" ? "default" : "secondary"} className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date} at {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {event.attendees} expected
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
