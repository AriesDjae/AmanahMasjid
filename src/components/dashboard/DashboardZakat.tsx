import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DashboardZakat = () => {
  const [assets, setAssets] = useState({ cash: "", gold: "", silver: "", investments: "", property: "" });
  const [zakat, setZakat] = useState<number | null>(null);

  const calculateZakat = () => {
    const total = Object.values(assets).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
    setZakat(total * 0.025);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Zakat Calculator</h1>
        <p className="text-muted-foreground mt-1">Calculate your annual Zakat obligation</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5 text-primary" />Enter Your Assets</CardTitle>
            <CardDescription>All values should be in USD</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[{ key: "cash", label: "Cash & Bank Balances" }, { key: "gold", label: "Gold Value" }, { key: "silver", label: "Silver Value" }, { key: "investments", label: "Investments & Stocks" }, { key: "property", label: "Business Assets" }].map((item) => (
              <div key={item.key} className="space-y-2">
                <Label>{item.label}</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="number" className="pl-10" value={assets[item.key as keyof typeof assets]} onChange={(e) => setAssets({ ...assets, [item.key]: e.target.value })} placeholder="0.00" />
                </div>
              </div>
            ))}
            <Button onClick={calculateZakat} className="w-full">Calculate Zakat</Button>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card gradient-primary">
          <CardContent className="py-12 text-center">
            <h3 className="font-heading text-xl text-primary-foreground mb-4">Your Zakat Amount</h3>
            <p className="text-5xl font-bold text-primary-foreground mb-4">${zakat !== null ? zakat.toFixed(2) : "0.00"}</p>
            <p className="text-primary-foreground/80 text-sm">2.5% of your eligible assets</p>
            {zakat !== null && zakat > 0 && <Button variant="secondary" className="mt-6">Pay Zakat Now</Button>}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default DashboardZakat;
