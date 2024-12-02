import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10 px-4 md:px-20 mt-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Why Choose Our Blood Donation Management System?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <CardHeader>
              <CardTitle>Simplifying Blood Donation</CardTitle>
              <CardDescription>
                Fostering a healthier, more connected community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our platform simplifies the entire blood donation process,
                ensuring a seamless, user-friendly experience for everyone
                involved. From donor registration to efficient admin oversight,
                we're committed to making blood donation accessible and
                efficient.
              </p>
            </CardContent>
          </Card>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-lg"></div>
            <img
              src="/Download Man sitting in medical chair donating his blood_ Blood donation concept for free.jpg?height=400&width=600"
              alt="Digital dashboard showing analytics"
              className="rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
