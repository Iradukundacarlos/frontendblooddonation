import React from 'react';
import { Card, CardFooter, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const testimonials = [
  {
    quote: "This platform has made blood donation so easy and accessible. I love how streamlined it is!",
    name: "Jane Doe",
    role: "Donor",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "Managing records and sending updates has never been simpler. It's a game changer.",
    name: "John Smith",
    role: "Admin",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "The notification system keeps me informed about donation opportunities. It's fantastic!",
    name: "Emily Johnson",
    role: "Regular Donor",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/10 px-4 md:px-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          What People Are Saying
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection

