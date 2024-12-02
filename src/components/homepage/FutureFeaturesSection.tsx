import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Brain, FileText, Smartphone } from 'lucide-react';

const futureFeatures = [
  {
    title: "AI-Powered Matching",
    description: "Connecting donors with recipients based on real-time demand.",
    icon: Brain,
  },
  {
    title: "Donation History Reports",
    description: "Comprehensive logs of your donations.",
    icon: FileText,
  },
  {
    title: "Mobile App",
    description: "Manage everything on the go.",
    icon: Smartphone,
  },
];

const FutureFeaturesSection: React.FC = () => {
  return (
    <section id="future-features" className="py-20 px-4 md:px-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          What's Next for Our Platform?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {futureFeatures.map((feature, index) => (
            <Card key={index} className="bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0"></div>
              <CardHeader className="relative z-10">
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureFeaturesSection

