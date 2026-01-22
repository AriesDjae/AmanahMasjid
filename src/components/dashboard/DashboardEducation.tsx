import { motion } from "framer-motion";
import { BookOpen, Plus, Users, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const courses = [
  { id: 1, name: "Quran Tajweed", instructor: "Sheikh Abdullah", students: 45, schedule: "Mon, Wed", time: "6:00 PM", progress: 65 },
  { id: 2, name: "Arabic for Beginners", instructor: "Ustadha Fatima", students: 32, schedule: "Tue, Thu", time: "7:00 PM", progress: 40 },
  { id: 3, name: "Islamic History", instructor: "Dr. Hassan", students: 28, schedule: "Saturday", time: "10:00 AM", progress: 80 },
  { id: 4, name: "Fiqh Fundamentals", instructor: "Imam Yusuf", students: 38, schedule: "Sunday", time: "11:00 AM", progress: 55 },
  { id: 5, name: "Youth Islamic Studies", instructor: "Br. Mohammed", students: 52, schedule: "Friday", time: "4:00 PM", progress: 30 },
];

const DashboardEducation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Education Programs
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage Islamic education courses and classes
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Course
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Courses", value: "15", icon: BookOpen },
          { label: "Total Students", value: "450", icon: Users },
          { label: "Instructors", value: "12", icon: Users },
          { label: "Weekly Classes", value: "28", icon: Calendar },
        ].map((stat) => (
          <Card key={stat.label} className="border-0 shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-0 shadow-card h-full">
              <CardHeader>
                <CardTitle className="text-lg">{course.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{course.instructor}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students} students</span>
                  </div>
                  <Badge variant="secondary">{course.schedule}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.time}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DashboardEducation;
