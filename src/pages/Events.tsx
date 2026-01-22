import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Filter, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const events = [
  {
    id: 1,
    title: "Weekly Quran Study Circle",
    description: "Join us for an in-depth study of Surah Al-Baqarah with Imam Abdullah",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    location: "Main Prayer Hall",
    attendees: 45,
    capacity: 100,
    type: "Education",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Community Iftar",
    description: "Break your fast with the community during the blessed month of Ramadan",
    date: "March 15, 2024",
    time: "6:30 PM",
    location: "Community Center",
    attendees: 200,
    capacity: 300,
    type: "Community",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Youth Basketball Tournament",
    description: "Annual youth basketball tournament for ages 12-18",
    date: "March 20, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Sports Hall",
    attendees: 32,
    capacity: 48,
    type: "Youth",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Marriage Seminar",
    description: "A comprehensive seminar on building strong Islamic marriages",
    date: "March 25, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Conference Room",
    attendees: 28,
    capacity: 50,
    type: "Family",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "New Muslim Support Group",
    description: "Weekly support and education session for new Muslims",
    date: "Every Wednesday",
    time: "7:30 PM - 9:00 PM",
    location: "Meeting Room 2",
    attendees: 12,
    capacity: 20,
    type: "Education",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Sisters Halaqah",
    description: "Weekly gathering for sisters to learn and connect",
    date: "Every Sunday",
    time: "11:00 AM - 1:00 PM",
    location: "Sisters Section",
    attendees: 35,
    capacity: 50,
    type: "Sisters",
    image: "/placeholder.svg",
  },
];

const eventTypes = ["All", "Education", "Community", "Youth", "Family", "Sisters"];

const Events = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredEvents = selectedType === "All" 
    ? events 
    : events.filter(event => event.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="gradient-primary py-16 pattern-islamic-gold">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
                Events & Programs
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Join our community events, educational programs, and social gatherings
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filter Tabs */}
            <div className="mb-8 flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4" variant="secondary">
                        {event.type}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {event.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} / {event.capacity} attending</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">
                        Register Now
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Monthly Calendar
              </h2>
              <p className="text-muted-foreground">
                View all upcoming events at a glance
              </p>
            </motion.div>

            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive calendar coming soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
