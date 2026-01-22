import { motion } from "framer-motion";
import { Settings, User, Bell, Shield, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DashboardSettings = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Settings</h1>
      <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-0 shadow-card">
        <CardHeader><CardTitle className="flex items-center gap-2"><User className="h-5 w-5 text-primary" />Profile</CardTitle></CardHeader>
        <CardContent><Button variant="outline">Edit Profile</Button></CardContent>
      </Card>
      <Card className="border-0 shadow-card">
        <CardHeader><CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5 text-primary" />Notifications</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between"><Label>Email notifications</Label><Switch defaultChecked /></div>
          <div className="flex items-center justify-between"><Label>Prayer reminders</Label><Switch defaultChecked /></div>
        </CardContent>
      </Card>
      <Card className="border-0 shadow-card">
        <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" />Security</CardTitle></CardHeader>
        <CardContent><Button variant="outline">Change Password</Button></CardContent>
      </Card>
      <Card className="border-0 shadow-card">
        <CardHeader><CardTitle className="flex items-center gap-2"><Palette className="h-5 w-5 text-primary" />Appearance</CardTitle></CardHeader>
        <CardContent><div className="flex items-center justify-between"><Label>Dark mode</Label><Switch /></div></CardContent>
      </Card>
    </div>
  </motion.div>
);

export default DashboardSettings;
