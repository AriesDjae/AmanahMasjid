import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PrayerTimesCard from "@/components/prayer/PrayerTimesCard";
import FeaturesSection from "@/components/home/FeaturesSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Prayer Times Section */}
        <section className="py-12 -mt-20 relative z-20">
          <div className="container mx-auto px-4">
            <PrayerTimesCard />
          </div>
        </section>
        
        <FeaturesSection />
        <StatsSection />
        <AnnouncementsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
