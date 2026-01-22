import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Users, Heart, BookOpen, Building2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const leadership = [
  {
    name: "Imam Abdullah Hassan",
    role: "Head Imam",
    description: "Leading our community in prayers and spiritual guidance for over 15 years",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Fatima Ahmad",
    role: "Education Director",
    description: "Overseeing our Islamic school and educational programs",
    image: "/placeholder.svg",
  },
  {
    name: "Brother Yusuf Ali",
    role: "Community Coordinator",
    description: "Managing community events and volunteer activities",
    image: "/placeholder.svg",
  },
  {
    name: "Sister Khadija Omar",
    role: "Women's Programs Director",
    description: "Leading sisters' halaqahs and women-focused initiatives",
    image: "/placeholder.svg",
  },
];

const values = [
  {
    icon: Heart,
    title: "Community",
    description: "Building a supportive environment where everyone feels welcome and valued",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Providing authentic Islamic knowledge for all ages and backgrounds",
  },
  {
    icon: Users,
    title: "Service",
    description: "Serving our neighbors and contributing to the greater good of society",
  },
  {
    icon: Building2,
    title: "Excellence",
    description: "Striving for excellence in all aspects of mosque management and programs",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="gradient-primary py-20 pattern-islamic-gold">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
                About AmanahMasjid
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Established in 1995, AmanahMasjid has been a beacon of faith, knowledge, and community 
                service. Our mission is to provide a welcoming space for worship, education, and 
                community building in accordance with Islamic principles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-card h-full">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To serve as a spiritual home for Muslims in our community, providing authentic 
                      Islamic education, fostering unity among believers, and reaching out to our 
                      neighbors with compassion and understanding. We aim to develop well-rounded 
                      Muslims who contribute positively to society while maintaining their Islamic identity.
                    </p>
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
                    <CardTitle className="font-heading text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To be a model Islamic center that inspires spiritual growth, intellectual 
                      excellence, and community service. We envision a thriving community where 
                      Muslims of all backgrounds unite in worship, learning, and good deeds, making 
                      a positive impact on the broader society.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30 pattern-islamic">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-card text-center h-full">
                    <CardContent className="pt-8">
                      <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Our Leadership
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated individuals guiding our community
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-card overflow-hidden h-full">
                    <div className="aspect-square bg-muted">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {leader.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">{leader.role}</p>
                      <p className="text-muted-foreground text-sm">{leader.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Visit Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        123 Main Street<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (234) 567-8900</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">info@amanahmasjid.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Hours</h4>
                      <p className="text-muted-foreground">
                        Open daily: 5:00 AM - 10:00 PM<br />
                        Office: Mon-Fri, 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="mt-8">
                  Get Directions
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-card h-full">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Map placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
