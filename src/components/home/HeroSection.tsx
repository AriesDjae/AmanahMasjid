import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-islamic opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Welcome to our community</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Building a{" "}
              <span className="text-primary">Stronger</span>{" "}
              Community{" "}
              <span className="text-gradient-gold">Together</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              AmanahMasjid provides a comprehensive platform for mosque management, 
              connecting our community through faith, education, and service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/dashboard">
                  Enter Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/prayer-times">View Prayer Times</Link>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">123 Main Street</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <p className="font-medium text-foreground">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Open Daily</p>
                  <p className="font-medium text-foreground">5am - 10pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-8 rounded-full border-2 border-secondary/30" />
              <div className="absolute inset-16 rounded-full border-2 border-primary/20" />
              
              {/* Center content */}
              <div className="absolute inset-24 rounded-full gradient-primary flex items-center justify-center shadow-elevated">
                <div className="text-center">
                  <p className="font-heading text-6xl text-primary-foreground mb-2">ا</p>
                  <p className="text-primary-foreground/80 text-sm">أمانة</p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 bg-card shadow-card p-4 rounded-xl"
              >
                <p className="text-sm font-medium text-foreground">Next Prayer</p>
                <p className="text-2xl font-bold text-primary">12:30</p>
                <p className="text-xs text-muted-foreground">Dhuhr</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 left-10 bg-card shadow-card p-4 rounded-xl"
              >
                <p className="text-sm font-medium text-foreground">Community</p>
                <p className="text-2xl font-bold text-secondary">1,250+</p>
                <p className="text-xs text-muted-foreground">Members</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
