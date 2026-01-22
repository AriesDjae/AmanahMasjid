import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Plus, Edit, Save, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialPrayerTimes = [
  { id: 1, date: "2024-03-15", fajr: "05:15", sunrise: "06:45", dhuhr: "12:30", asr: "15:45", maghrib: "18:20", isha: "19:50" },
  { id: 2, date: "2024-03-16", fajr: "05:14", sunrise: "06:44", dhuhr: "12:30", asr: "15:46", maghrib: "18:21", isha: "19:51" },
  { id: 3, date: "2024-03-17", fajr: "05:13", sunrise: "06:43", dhuhr: "12:29", asr: "15:47", maghrib: "18:22", isha: "19:52" },
];

const DashboardPrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState(initialPrayerTimes);
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Prayer Times Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and update prayer times for your mosque
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Times
        </Button>
      </div>

      {/* Today's Times */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Today's Prayer Times
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer, index) => (
              <div key={prayer} className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">{prayer}</p>
                <p className="text-xl font-bold text-foreground">
                  {Object.values(prayerTimes[0])[index + 2] as string}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prayer Times Table */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Fajr</TableHead>
                <TableHead>Sunrise</TableHead>
                <TableHead>Dhuhr</TableHead>
                <TableHead>Asr</TableHead>
                <TableHead>Maghrib</TableHead>
                <TableHead>Isha</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prayerTimes.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.date}</TableCell>
                  <TableCell>{row.fajr}</TableCell>
                  <TableCell>{row.sunrise}</TableCell>
                  <TableCell>{row.dhuhr}</TableCell>
                  <TableCell>{row.asr}</TableCell>
                  <TableCell>{row.maghrib}</TableCell>
                  <TableCell>{row.isha}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
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

export default DashboardPrayerTimes;
