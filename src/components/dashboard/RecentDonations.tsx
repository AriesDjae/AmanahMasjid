import { motion } from "framer-motion";
import { DollarSign, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const donations = [
  { id: 1, name: "Ahmed Hassan", amount: 500, type: "Zakat", time: "2 hours ago" },
  { id: 2, name: "Fatima Ali", amount: 100, type: "Sadaqah", time: "5 hours ago" },
  { id: 3, name: "Omar Khan", amount: 250, type: "Building Fund", time: "1 day ago" },
  { id: 4, name: "Aisha Rahman", amount: 75, type: "General", time: "1 day ago" },
  { id: 5, name: "Anonymous", amount: 1000, type: "Zakat", time: "2 days ago" },
];

const RecentDonations = () => {
  return (
    <Card className="border-0 shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-secondary" />
          Recent Donations
        </CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {donations.map((donation, index) => (
            <motion.div
              key={donation.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-accent text-primary text-sm font-medium">
                    {donation.name === "Anonymous" ? "?" : donation.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{donation.name}</p>
                  <p className="text-sm text-muted-foreground">{donation.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">${donation.amount}</p>
                <p className="text-xs text-muted-foreground">{donation.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentDonations;
