import { motion } from "framer-motion";
import { Clock, Sun, Sunrise, Sunset, MapPin, Bell } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const prayerTimes = [
  { name: "Fajr", nameArabic: "الفجر", adhan: "05:15", iqamah: "05:30", icon: Sunrise },
  { name: "Sunrise", nameArabic: "الشروق", adhan: "06:45", iqamah: "-", icon: Sun },
  { name: "Dhuhr", nameArabic: "الظهر", adhan: "12:30", iqamah: "12:45", icon: Sun, isNext: true },
  { name: "Asr", nameArabic: "العصر", adhan: "15:45", iqamah: "16:00", icon: Sun },
  { name: "Maghrib", nameArabic: "المغرب", adhan: "18:20", iqamah: "18:25", icon: Sunset },
  { name: "Isha", nameArabic: "العشاء", adhan: "19:50", iqamah: "20:05", icon: Clock },
];

const jumahTimes = [
  { name: "First Khutbah", time: "12:15 PM", language: "English" },
  { name: "Second Khutbah", time: "1:30 PM", language: "Arabic/English" },
];

const PrayerTimes = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hijriDate = "15 Jumada al-Awwal 1446";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="gradient-primary py-16 pattern-islamic-gold">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
                Prayer Times
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-2">{currentDate}</p>
              <p className="text-primary-foreground/70 font-heading text-xl">{hijriDate}</p>
            </motion.div>
          </div>
        </section>

        {/* Prayer Times Grid */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <Card className="border-0 shadow-elevated overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                  {prayerTimes.map((prayer, index) => (
                    <motion.div
                      key={prayer.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 text-center border-r border-b last:border-r-0 border-border ${
                        prayer.isNext ? "bg-accent" : ""
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                        prayer.isNext ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        <prayer.icon className="h-6 w-6" />
                      </div>
                      <p className="font-medium text-foreground">{prayer.name}</p>
                      <p className="text-sm text-muted-foreground font-heading mb-2">{prayer.nameArabic}</p>
                      <p className={`text-2xl font-bold ${prayer.isNext ? "text-primary" : "text-foreground"}`}>
                        {prayer.adhan}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Iqamah: {prayer.iqamah}</p>
                      {prayer.isNext && (
                        <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Next Prayer
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Jummah Times */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-card h-full">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary-foreground" />
                      </div>
                      Jummah Prayer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {jumahTimes.map((jummah, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">{jummah.name}</p>
                          <p className="text-sm text-muted-foreground">{jummah.language}</p>
                        </div>
                        <p className="text-xl font-bold text-primary">{jummah.time}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-card h-full">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-foreground" />
                      </div>
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Map placeholder</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">AmanahMasjid Islamic Center</p>
                      <p className="text-muted-foreground">123 Main Street, City, State 12345</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notification CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="border-0 gradient-primary shadow-elevated pattern-islamic-gold">
              <CardContent className="py-12 text-center">
                <Bell className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                  Never Miss a Prayer
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                  Sign up for prayer time notifications and stay connected with our community
                </p>
                <Button variant="secondary" size="lg">
                  Enable Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrayerTimes;
