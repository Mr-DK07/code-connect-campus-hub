
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
  image: string;
}

const resources: Resource[] = [
  // Web Development
  {
    id: 1,
    title: "Frontend Mastery",
    description: "Comprehensive resources for HTML, CSS, JavaScript, and modern frontend frameworks like React, Vue, and Angular.",
    link: "https://example.com",
    category: "web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Learn server-side programming with Node.js, Express, Django, Flask, and database integration.",
    link: "https://example.com",
    category: "web",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Full Stack Projects",
    description: "Step-by-step guides to building complete web applications from frontend to backend.",
    link: "https://example.com",
    category: "web",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop"
  },
  
  // Mobile Development
  {
    id: 4,
    title: "Android Development",
    description: "Resources for building Android apps using Java, Kotlin, and the latest Android development tools.",
    link: "https://example.com",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "iOS Development",
    description: "Learn to build iOS applications using Swift, UIKit, and SwiftUI frameworks.",
    link: "https://example.com",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Cross-Platform Development",
    description: "Build mobile apps for multiple platforms using React Native, Flutter, and other cross-platform frameworks.",
    link: "https://example.com",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1596742578450-9e630ed7449f?q=80&w=2670&auto=format&fit=crop"
  },
  
  // AI & Machine Learning
  {
    id: 7,
    title: "Machine Learning Fundamentals",
    description: "Introduction to machine learning concepts, algorithms, and mathematical foundations.",
    link: "https://example.com",
    category: "ai",
    image: "https://images.unsplash.com/photo-1677442135156-8d34c5295959?q=80&w=2632&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Deep Learning and Neural Networks",
    description: "Comprehensive resources on neural networks, deep learning architectures, and applications.",
    link: "https://example.com",
    category: "ai",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Natural Language Processing",
    description: "Learn to build applications that can understand, interpret, and generate human language.",
    link: "https://example.com",
    category: "ai",
    image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=2574&auto=format&fit=crop"
  },
  
  // Competitive Programming
  {
    id: 10,
    title: "Algorithm Design",
    description: "Master fundamental algorithms and data structures used in competitive programming and technical interviews.",
    link: "https://example.com",
    category: "competitive",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2650&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Problem Solving Techniques",
    description: "Advanced problem-solving strategies and approaches for competitive programming contests.",
    link: "https://example.com",
    category: "competitive",
    image: "https://images.unsplash.com/photo-1694286056744-b8ee6d95c8bf?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Contest Preparation",
    description: "Practice resources, mock contests, and tips for succeeding in programming competitions like ICPC, Google Kickstart, and more.",
    link: "https://example.com",
    category: "competitive",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
  }
];

const categoryOptions = [
  { value: "all", label: "All Resources" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Development" },
  { value: "ai", label: "AI & Machine Learning" },
  { value: "competitive", label: "Competitive Programming" }
];

const ResourcesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);
  
  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated resources to help you master various programming domains and technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categoryOptions.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="m-1"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>
                    {categoryOptions.find(cat => cat.value === resource.category)?.label}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      Access Resource
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
