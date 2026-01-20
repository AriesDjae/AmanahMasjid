import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QuickStats from "@/components/dashboard/QuickStats";
import PrayerTimesCard from "@/components/prayer/PrayerTimesCard";
import RecentDonations from "@/components/dashboard/RecentDonations";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0">
        <DashboardSidebar />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -264 }}
            animate={{ x: 0 }}
            exit={{ x: -264 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 bottom-0 z-50 lg:hidden"
          >
            <DashboardSidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="lg:ml-64">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-6">
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
