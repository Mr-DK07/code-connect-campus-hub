
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop",
    alt: "Hackathon participants working together",
    title: "Annual Hackathon 2024",
    description: "Students working on innovative solutions during our 24-hour hackathon."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop",
    alt: "Workshop session",
    title: "Web Development Workshop",
    description: "Hands-on learning session on modern web technologies."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
    alt: "Team coding session",
    title: "Collaborative Coding Session",
    description: "Members collaborating on a project during our weekly coding meetup."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2670&auto=format&fit=crop",
    alt: "Guest speaker presentation",
    title: "Tech Talk by Industry Expert",
    description: "Learning from professionals about the latest trends in technology."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
    alt: "Club meeting",
    title: "General Club Meeting",
    description: "Planning future events and discussing ongoing projects."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop",
    alt: "Award ceremony",
    title: "Competition Awards Ceremony",
    description: "Celebrating the achievements of our members at the annual coding competition."
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    alt: "Networking event",
    title: "Tech Networking Event",
    description: "Connecting with industry professionals and alumni."
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    alt: "Team celebration",
    title: "Project Launch Celebration",
    description: "Celebrating the successful completion of a major club project."
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  
  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of memories from our events, workshops, and activities.
          </p>
        </div>
        
        {/* Featured gallery carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Featured Moments</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.slice(0, 4).map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div 
                      className="relative aspect-square rounded-md overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity">
                        <h4 className="text-white font-semibold">{image.title}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="aspect-square relative rounded-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity">
                <h4 className="text-white font-semibold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal for viewing selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 z-10 bg-background/50 hover:bg-background/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-background/50 hover:bg-background/70"
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
                  setSelectedImage(galleryImages[prevIndex]);
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-background/50 hover:bg-background/70"
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
                  setSelectedImage(galleryImages[nextIndex]);
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
