import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

const screenshots = [
  {
    src: "/World blood donor day background Design.jpg?height=400&width=600",
    alt: "Registration Page",
  },
  {
    src: "/World blood donor day background Design.jpg?height=400&width=600",
    alt: "Admin Dashboard",
  },
  {
    src: "/World blood donor day background Design.jpg?height=400&width=600",
    alt: "Notification System",
  },
  {
    src: "/World blood donor day background Design.jpg?height=400&width=600",
    alt: "Search Interface",
  },
];

const ScreenshotsSection: React.FC = () => {
  return (
    <section id="screenshots" className="py-20 px-4 md:px-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          See the Platform in Action
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-center mt-8">
          <Button size="lg">Explore these features today. Register now!</Button>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
