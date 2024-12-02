import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Let's Get in Touch
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="john@example.com" type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-4">
            <Button>Send Message</Button>
            <p className="text-sm text-muted-foreground">
              Have questions? We're here to help. Email us at support@blooddonation.com
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection

