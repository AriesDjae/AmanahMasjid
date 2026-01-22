import { motion } from "framer-motion";
import { DollarSign, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  { id: 1, type: "income", description: "Donation - General Fund", amount: 500, date: "2024-03-15", donor: "Ahmad Khan" },
  { id: 2, type: "income", description: "Donation - Building Fund", amount: 1000, date: "2024-03-14", donor: "Fatima Ali" },
  { id: 3, type: "expense", description: "Utility Bills", amount: 450, date: "2024-03-13", donor: "-" },
  { id: 4, type: "income", description: "Donation - Education", amount: 250, date: "2024-03-12", donor: "Yusuf Ibrahim" },
  { id: 5, type: "expense", description: "Maintenance", amount: 200, date: "2024-03-11", donor: "-" },
  { id: 6, type: "income", description: "Donation - Youth Programs", amount: 750, date: "2024-03-10", donor: "Anonymous" },
];

const DashboardFinances = () => {
  const totalIncome = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Financial Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Track donations, expenses, and financial reports
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Report</Button>
          <Button className="gap-2">
            <DollarSign className="h-4 w-4" />
            Record Transaction
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Donations</p>
                <p className="text-3xl font-bold text-foreground">$125,000</p>
                <div className="flex items-center gap-1 text-xs text-primary mt-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% from last year
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ArrowUpRight className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Expenses</p>
                <p className="text-3xl font-bold text-foreground">$45,000</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <TrendingDown className="h-3 w-3" />
                  -5% from last month
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <ArrowDownRight className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Net Balance</p>
                <p className="text-3xl font-bold text-foreground">$80,000</p>
                <p className="text-xs text-muted-foreground mt-1">Current fiscal year</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Goal</p>
                <p className="text-3xl font-bold text-foreground">75%</p>
                <p className="text-xs text-primary mt-1">$15K of $20K target</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Donor/Payee</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.type === "income" ? "default" : "destructive"}>
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.donor}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className={`text-right font-medium ${
                    transaction.type === "income" ? "text-primary" : "text-destructive"
                  }`}>
                    {transaction.type === "income" ? "+" : "-"}${transaction.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardFinances;
