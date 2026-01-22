import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardHome from "@/components/dashboard/DashboardHome";
import DashboardPrayerTimes from "@/components/dashboard/DashboardPrayerTimes";
import DashboardEvents from "@/components/dashboard/DashboardEvents";
import DashboardFinances from "@/components/dashboard/DashboardFinances";
import DashboardMembers from "@/components/dashboard/DashboardMembers";
import DashboardAnnouncements from "@/components/dashboard/DashboardAnnouncements";
import DashboardEducation from "@/components/dashboard/DashboardEducation";
import DashboardFacilities from "@/components/dashboard/DashboardFacilities";
import DashboardZakat from "@/components/dashboard/DashboardZakat";
import DashboardReports from "@/components/dashboard/DashboardReports";
import DashboardSettings from "@/components/dashboard/DashboardSettings";

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
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="prayer-times" element={<DashboardPrayerTimes />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="finances" element={<DashboardFinances />} />
            <Route path="members" element={<DashboardMembers />} />
            <Route path="announcements" element={<DashboardAnnouncements />} />
            <Route path="education" element={<DashboardEducation />} />
            <Route path="facilities" element={<DashboardFacilities />} />
            <Route path="zakat" element={<DashboardZakat />} />
            <Route path="reports" element={<DashboardReports />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
