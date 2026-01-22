import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Plus, Edit, Trash2, Users, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const events = [
  { id: 1, title: "Weekly Quran Study", type: "Education", date: "2024-03-16", time: "10:00 AM", location: "Main Hall", attendees: 45, status: "upcoming" },
  { id: 2, title: "Community Iftar", type: "Community", date: "2024-03-20", time: "6:30 PM", location: "Community Center", attendees: 200, status: "upcoming" },
  { id: 3, title: "Youth Basketball", type: "Youth", date: "2024-03-22", time: "2:00 PM", location: "Sports Hall", attendees: 32, status: "upcoming" },
  { id: 4, title: "Marriage Seminar", type: "Family", date: "2024-03-25", time: "7:00 PM", location: "Conference Room", attendees: 28, status: "upcoming" },
  { id: 5, title: "Sisters Halaqah", type: "Sisters", date: "2024-03-10", time: "11:00 AM", location: "Sisters Section", attendees: 35, status: "completed" },
];

const DashboardEvents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Events Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Create and manage mosque events and programs
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Event
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Events", value: "24", change: "+3 this month" },
          { label: "Upcoming", value: "8", change: "Next 7 days" },
          { label: "Total Attendees", value: "1,250", change: "+15%" },
          { label: "Avg. Attendance", value: "85%", change: "+5%" },
        ].map((stat) => (
          <Card key={stat.label} className="border-0 shadow-card">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-primary mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Events Table */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            All Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Attendees</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{event.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      {event.date} at {event.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      {event.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      {event.attendees}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardEvents;
