import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const steps = [
  {
    title: "Register on the platform",
    description: "Create your account and join our community of donors and administrators.",
  },
  {
    title: "Fill in your details",
    description: "Provide necessary information as a donor or admin to get started.",
  },
  {
    title: "Receive timely updates",
    description: "Stay informed about blood donation drives and important notifications.",
  },
  {
    title: "Manage data securely",
    description: "Admins can efficiently manage data and send notifications to users.",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/10 px-4 md:px-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          How Our System Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection

