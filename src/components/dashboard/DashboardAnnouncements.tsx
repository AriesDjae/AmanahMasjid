import { motion } from "framer-motion";
import { Bell, Plus, Edit, Trash2, Pin, Eye } from "lucide-react";
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

const announcements = [
  { id: 1, title: "Ramadan Schedule Announcement", category: "important", publishedAt: "2024-03-15", isPinned: true, views: 450 },
  { id: 2, title: "Youth Basketball Tournament Registration", category: "events", publishedAt: "2024-03-14", isPinned: false, views: 230 },
  { id: 3, title: "New Islamic School Registration Open", category: "education", publishedAt: "2024-03-12", isPinned: true, views: 380 },
  { id: 4, title: "Friday Prayer Time Change", category: "prayer", publishedAt: "2024-03-10", isPinned: false, views: 520 },
  { id: 5, title: "Community Food Drive", category: "community", publishedAt: "2024-03-08", isPinned: false, views: 180 },
];

const categoryColors: Record<string, string> = {
  important: "bg-destructive text-destructive-foreground",
  events: "bg-primary text-primary-foreground",
  education: "bg-secondary text-secondary-foreground",
  prayer: "bg-accent text-accent-foreground",
  community: "bg-muted text-muted-foreground",
};

const DashboardAnnouncements = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Announcements
          </h1>
          <p className="text-muted-foreground mt-1">
            Create and manage community announcements
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Announcement
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Announcements", value: "48" },
          { label: "Published", value: "42" },
          { label: "Pinned", value: "5" },
          { label: "Total Views", value: "12.5K" },
        ].map((stat) => (
          <Card key={stat.label} className="border-0 shadow-card">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Announcements Table */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            All Announcements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Pinned</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {announcements.map((announcement) => (
                <TableRow key={announcement.id}>
                  <TableCell className="font-medium">{announcement.title}</TableCell>
                  <TableCell>
                    <Badge className={categoryColors[announcement.category]}>
                      {announcement.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{announcement.publishedAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3 text-muted-foreground" />
                      {announcement.views}
                    </div>
                  </TableCell>
                  <TableCell>
                    {announcement.isPinned && (
                      <Pin className="h-4 w-4 text-primary" />
                    )}
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

export default DashboardAnnouncements;
