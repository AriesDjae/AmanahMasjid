import { motion } from "framer-motion";
import { Users, Plus, Search, Mail, Phone, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const members = [
  { id: 1, name: "Ahmad Khan", email: "ahmad@email.com", phone: "+1 234 567 8901", role: "admin", joinDate: "2020-01-15", status: "active" },
  { id: 2, name: "Fatima Ali", email: "fatima@email.com", phone: "+1 234 567 8902", role: "committee", joinDate: "2021-03-20", status: "active" },
  { id: 3, name: "Yusuf Ibrahim", email: "yusuf@email.com", phone: "+1 234 567 8903", role: "congregation", joinDate: "2022-06-10", status: "active" },
  { id: 4, name: "Khadija Omar", email: "khadija@email.com", phone: "+1 234 567 8904", role: "imam", joinDate: "2019-08-05", status: "active" },
  { id: 5, name: "Mohammed Hassan", email: "mohammed@email.com", phone: "+1 234 567 8905", role: "congregation", joinDate: "2023-01-12", status: "inactive" },
];

const roleColors: Record<string, string> = {
  admin: "bg-primary text-primary-foreground",
  imam: "bg-secondary text-secondary-foreground",
  committee: "bg-accent text-accent-foreground",
  congregation: "bg-muted text-muted-foreground",
};

const DashboardMembers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Member Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage community members and their roles
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Members", value: "1,250", icon: Users },
          { label: "Active", value: "1,180", icon: Users },
          { label: "New This Month", value: "45", icon: Users },
          { label: "Staff", value: "12", icon: Shield },
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

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search members..." className="pl-10" />
        </div>
      </div>

      {/* Members Table */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle>All Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        {member.email}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {member.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={roleColors[member.role]}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{member.joinDate}</TableCell>
                  <TableCell>
                    <Badge variant={member.status === "active" ? "default" : "secondary"}>
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
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

export default DashboardMembers;
