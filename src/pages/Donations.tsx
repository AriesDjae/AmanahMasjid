import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, DollarSign, Building2, Book, Users, Utensils, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const donationTypes = [
  { id: "general", name: "General Fund", icon: Heart, description: "Support daily mosque operations" },
  { id: "building", name: "Building Fund", icon: Building2, description: "Expansion and maintenance" },
  { id: "education", name: "Education", icon: Book, description: "Islamic school programs" },
  { id: "youth", name: "Youth Programs", icon: Users, description: "Activities for young Muslims" },
  { id: "food", name: "Food Bank", icon: Utensils, description: "Community food assistance" },
];

const presetAmounts = [25, 50, 100, 250, 500, 1000];

const impactStats = [
  { value: "$125,000", label: "Raised This Year", description: "Community contributions" },
  { value: "500+", label: "Families Helped", description: "Through our food bank" },
  { value: "150", label: "Students Supported", description: "Islamic education" },
  { value: "24/7", label: "Mosque Operations", description: "Thanks to your donations" },
];

const Donations = () => {
  const [selectedType, setSelectedType] = useState("general");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

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
                Support Our Mosque
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Your generosity helps us serve our community and spread the message of Islam
              </p>
            </motion.div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Donation Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2"
              >
                <Card className="border-0 shadow-elevated">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Make a Donation</CardTitle>
                    <CardDescription>Choose how you'd like to contribute</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Donation Type */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Select Donation Type</Label>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {donationTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${
                              selectedType === type.id
                                ? "border-primary bg-accent"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <type.icon className={`h-6 w-6 mb-2 ${
                              selectedType === type.id ? "text-primary" : "text-muted-foreground"
                            }`} />
                            <p className="font-medium text-foreground">{type.name}</p>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Frequency */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Donation Frequency</Label>
                      <RadioGroup
                        value={frequency}
                        onValueChange={setFrequency}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <Label htmlFor="one-time">One-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Monthly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="weekly" />
                          <Label htmlFor="weekly">Weekly</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Select Amount</Label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                        {presetAmounts.map((amount) => (
                          <button
                            key={amount}
                            onClick={() => handleAmountSelect(amount)}
                            className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                              selectedAmount === amount
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50 text-foreground"
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="number"
                          placeholder="Enter custom amount"
                          className="pl-10"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button size="lg" className="w-full" disabled={!finalAmount || finalAmount <= 0}>
                      <Heart className="h-5 w-5 mr-2" />
                      Donate {finalAmount ? `$${finalAmount}` : ""} {frequency !== "one-time" ? frequency : ""}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      All donations are tax-deductible. You will receive a receipt via email.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Why Donate */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">Why Donate?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Support daily mosque operations",
                      "Fund educational programs",
                      "Help families in need",
                      "Maintain our facilities",
                      "Grow our community",
                    ].map((reason, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{reason}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="border-0 shadow-card gradient-primary">
                  <CardContent className="py-6 text-center">
                    <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-2">
                      Need Assistance?
                    </h4>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Contact our donations team
                    </p>
                    <Button variant="secondary" size="sm">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Your Impact
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how your donations make a difference in our community
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-card text-center">
                    <CardContent className="py-8">
                      <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                      <p className="font-medium text-foreground">{stat.label}</p>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donations;
