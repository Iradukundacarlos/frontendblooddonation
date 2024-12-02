import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { UserPlus, Bell, Globe, Heart, LayoutDashboard, FileEdit, Send, FileUp } from 'lucide-react';

const features = [
  {
    title: "Register as a Donor",
    description: "Create your profile and join the life-saving community.",
    icon: UserPlus,
  },
  {
    title: "Receive Notifications",
    description: "Stay updated on donation events and reminders.",
    icon: Bell,
  },
  {
    title: "Language Preferences",
    description: "Choose a language for personalized accessibility.",
    icon: Globe,
  },
  {
    title: "Rest After Donation",
    description: "Safety tips and support post-donation.",
    icon: Heart,
  },
  {
    title: "Dashboard Management",
    description: "Oversee donor data and manage system activity effortlessly.",
    icon: LayoutDashboard,
  },
  {
    title: "CRUD Operations",
    description: "Add, edit, view, or remove records with ease.",
    icon: FileEdit,
  },
  {
    title: "Send Notifications",
    description: "Communicate updates and reminders to donors.",
    icon: Send,
  },
  {
    title: "File Management",
    description: "Securely upload and download important documents.",
    icon: FileUp,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 md:px-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Powerful Features for Donors and Admins
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection

