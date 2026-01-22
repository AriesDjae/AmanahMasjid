import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  { name: "Monthly Financial Report", period: "March 2024", type: "Financial" },
  { name: "Attendance Summary", period: "Q1 2024", type: "Analytics" },
  { name: "Donation Report", period: "YTD 2024", type: "Financial" },
  { name: "Event Performance", period: "March 2024", type: "Analytics" },
];

const DashboardReports = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Reports</h1>
      <p className="text-muted-foreground mt-1">Generate and download reports</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {reports.map((report, i) => (
        <Card key={i} className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2"><FileText className="h-5 w-5 text-primary" />{report.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div><p className="text-sm text-muted-foreground">{report.period}</p><p className="text-xs text-muted-foreground">{report.type}</p></div>
            <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" />Download</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </motion.div>
);

export default DashboardReports;
