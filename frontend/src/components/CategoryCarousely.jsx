import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];
const CategoryCarousely = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {
            Category.map((cat,index)=>(
              <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
                <Button variant="outline" className='rounded-full'>{cat}</Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default CategoryCarousely;
