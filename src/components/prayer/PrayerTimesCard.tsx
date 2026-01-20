import { motion } from "framer-motion";
import { Clock, Sun, Sunrise, Sunset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PrayerTime {
  name: string;
  nameArabic: string;
  time: string;
  isNext?: boolean;
  icon: React.ReactNode;
}

const prayerTimes: PrayerTime[] = [
  { name: "Fajr", nameArabic: "الفجر", time: "05:15", icon: <Sunrise className="h-5 w-5" /> },
  { name: "Sunrise", nameArabic: "الشروق", time: "06:45", icon: <Sun className="h-5 w-5" /> },
  { name: "Dhuhr", nameArabic: "الظهر", time: "12:30", isNext: true, icon: <Sun className="h-5 w-5" /> },
  { name: "Asr", nameArabic: "العصر", time: "15:45", icon: <Sun className="h-5 w-5" /> },
  { name: "Maghrib", nameArabic: "المغرب", time: "18:20", icon: <Sunset className="h-5 w-5" /> },
  { name: "Isha", nameArabic: "العشاء", time: "19:50", icon: <Clock className="h-5 w-5" /> },
];

const PrayerTimesCard = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hijriDate = "15 Jumada al-Awwal 1446"; // This would be calculated dynamically

  return (
    <Card className="overflow-hidden shadow-card border-0">
      <div className="gradient-primary px-6 py-4 pattern-islamic-gold">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-primary-foreground font-heading text-2xl font-bold">Prayer Times</h3>
            <p className="text-primary-foreground/80 text-sm mt-1">{currentDate}</p>
          </div>
          <div className="text-right">
            <p className="text-primary-foreground/90 font-heading text-lg">{hijriDate}</p>
            <p className="text-primary-foreground/70 text-sm">Hijri Calendar</p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-border">
          {prayerTimes.map((prayer, index) => (
            <motion.div
              key={prayer.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 text-center transition-colors ${
                prayer.isNext
                  ? "bg-accent"
                  : "hover:bg-muted/50"
              }`}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 ${
                prayer.isNext
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {prayer.icon}
              </div>
              <p className="text-sm text-muted-foreground">{prayer.name}</p>
              <p className="font-heading text-sm text-muted-foreground/80 mb-1">{prayer.nameArabic}</p>
              <p className={`text-xl font-semibold ${
                prayer.isNext ? "text-primary" : "text-foreground"
              }`}>
                {prayer.time}
              </p>
              {prayer.isNext && (
                <span className="inline-block mt-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Next
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PrayerTimesCard;
