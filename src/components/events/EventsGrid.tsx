
import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/sonner";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: "upcoming" | "past";
  registrationOpen?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    date: "April 25, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Science Lab 101",
    description: "A comprehensive one-day bootcamp covering HTML, CSS, and JavaScript fundamentals. Build your first responsive website from scratch!",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2574&auto=format&fit=crop",
    category: "upcoming",
    registrationOpen: true
  },
  {
    id: 2,
    title: "Competitive Programming Contest",
    date: "May 10, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Virtual Event",
    description: "Test your algorithm and data structure skills in this intense programming competition. Prizes for top performers!",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2670&auto=format&fit=crop",
    category: "upcoming",
    registrationOpen: true
  },
  {
    id: 3,
    title: "AI/ML Workshop Series",
    date: "May 15-17, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Engineering Building, Room 202",
    description: "A three-day workshop on machine learning basics, neural networks, and practical applications using Python and TensorFlow.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2574&auto=format&fit=crop",
    category: "upcoming",
    registrationOpen: false
  },
  {
    id: 4,
    title: "Hackathon 2025",
    date: "June 5-6, 2025",
    time: "10:00 AM - 10:00 AM (24 hours)",
    location: "University Center",
    description: "Our annual 24-hour hackathon where teams build innovative projects from scratch. Network with industry sponsors and showcase your skills!",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
    category: "upcoming",
    registrationOpen: false
  },
  {
    id: 5,
    title: "Introduction to Blockchain",
    date: "March 12, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Computer Science Department",
    description: "An introductory session on blockchain technology, cryptocurrencies, and smart contracts. Learn about the technology powering Web3.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2532&auto=format&fit=crop",
    category: "past"
  },
  {
    id: 6,
    title: "Mobile App Development Workshop",
    date: "February 20, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Engineering Building, Room 101",
    description: "Hands-on workshop on developing mobile applications using React Native. Build your first cross-platform mobile app!",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop",
    category: "past"
  },
  {
    id: 7,
    title: "Game Development Showcase",
    date: "January 15, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Student Union",
    description: "A showcase of games developed by club members using Unity and Unreal Engine. Play the games and learn about game development!",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
    category: "past"
  },
  {
    id: 8,
    title: "Tech Industry Panel",
    date: "December 5, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Virtual Event",
    description: "A panel discussion with industry professionals from top tech companies sharing insights on career paths, interview preparation, and industry trends.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop",
    category: "past"
  }
];

const EventsGrid = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  
  const filteredEvents = events.filter(event => event.category === activeTab);
  
  const handleRegister = (eventId: number, eventTitle: string) => {
    toast.success("Registration successful", {
      description: `You've registered for ${eventTitle}. Check your email for details.`
    });
  };
  
  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting events to enhance your skills and connect with fellow programmers.
          </p>
          
          <div className="flex justify-center mt-8 border-b border-border">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 text-lg font-medium border-b-2 ${
                activeTab === "upcoming" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-3 text-lg font-medium border-b-2 ${
                activeTab === "past" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter>
                  {activeTab === "upcoming" && (
                    <Button 
                      onClick={() => handleRegister(event.id, event.title)} 
                      className="w-full"
                      disabled={!event.registrationOpen}
                    >
                      {event.registrationOpen ? "Register Now" : "Registration Opening Soon"}
                    </Button>
                  )}
                  {activeTab === "past" && (
                    <Button variant="outline" className="w-full">
                      View Gallery
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
