
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Computer Science, 3rd Year",
    image: "https://i.pravatar.cc/100?img=1",
    quote: "Joining CodeCraft was the best decision I made in college. The workshops and hackathons helped me secure an internship at a top tech company."
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Data Science, 4th Year",
    image: "https://i.pravatar.cc/100?img=5",
    quote: "The machine learning projects we worked on at CodeCraft gave me practical experience that courses alone couldn't provide. The mentoring from seniors was invaluable."
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Software Engineering, 2nd Year",
    image: "https://i.pravatar.cc/100?img=8",
    quote: "From a beginner with minimal coding experience to developing full-stack applications, CodeCraft provided the perfect learning environment and community support."
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "UI/UX Design, 3rd Year",
    image: "https://i.pravatar.cc/100?img=9",
    quote: "As a design student, I was worried about fitting in a programming club, but CodeCraft's inclusive environment helped me blend design with coding skills."
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the students who have been part of our programming community.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl shadow-lg p-8 md:p-12 text-center border border-border"
            >
              <div className="absolute top-6 left-6 text-primary opacity-20">
                <Quote size={48} />
              </div>
              <div className="mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary/20 object-cover"
                />
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
              <p className="text-lg italic relative z-10">"{testimonials[currentIndex].quote}"</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
