import { motion } from "framer-motion";
import QuickStats from "./QuickStats";
import PrayerTimesCard from "@/components/prayer/PrayerTimesCard";
import RecentDonations from "./RecentDonations";
import UpcomingEvents from "./UpcomingEvents";

const DashboardHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
          Welcome back, Admin
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening at your mosque today.
        </p>
      </div>

      {/* Quick Stats */}
      <QuickStats />

      {/* Prayer Times */}
      <PrayerTimesCard />

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        <RecentDonations />
        <UpcomingEvents />
      </div>
    </motion.div>
  );
};

export default DashboardHome;
