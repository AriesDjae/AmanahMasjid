import { motion } from "framer-motion";
import { Building2, Plus, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const facilities = [
  { id: 1, name: "Main Prayer Hall", capacity: 500, hourlyRate: 0, status: "available" },
  { id: 2, name: "Community Center", capacity: 200, hourlyRate: 50, status: "booked" },
  { id: 3, name: "Conference Room", capacity: 30, hourlyRate: 25, status: "available" },
  { id: 4, name: "Sports Hall", capacity: 100, hourlyRate: 40, status: "available" },
];

const DashboardFacilities = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Facilities</h1>
        <p className="text-muted-foreground mt-1">Manage mosque facilities and bookings</p>
      </div>
      <Button className="gap-2"><Plus className="h-4 w-4" />Add Facility</Button>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {facilities.map((f) => (
        <Card key={f.id} className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />{f.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">Capacity: {f.capacity}</p>
            <p className="text-sm text-muted-foreground">Rate: {f.hourlyRate === 0 ? "Free" : `$${f.hourlyRate}/hr`}</p>
            <Badge variant={f.status === "available" ? "default" : "secondary"}>{f.status}</Badge>
            <Button variant="outline" className="w-full mt-2">Book Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </motion.div>
);

export default DashboardFacilities;
