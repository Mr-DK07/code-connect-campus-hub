
import { Code, Users, Calendar, BookOpen, Gift, Medal } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Weekly Coding Sessions",
    description: "Regular hands-on coding sessions focusing on different technologies and programming concepts."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Collaborative Projects",
    description: "Work with peers on real-world projects to gain practical experience and build your portfolio."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Hackathons & Competitions",
    description: "Participate in hackathons, coding competitions, and challenges to test your skills."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Learning Resources",
    description: "Access to curated resources, tutorials, and materials for different programming domains."
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: "Workshops & Seminars",
    description: "Regular workshops and seminars by industry experts and alumni on emerging technologies."
  },
  {
    icon: <Medal className="h-10 w-10 text-primary" />,
    title: "Recognition & Growth",
    description: "Showcase your talents, gain recognition, and boost your resume with club achievements."
  }
];

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="p-6 rounded-lg bg-card shadow-sm hover:shadow-md border border-border transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our club and benefit from a range of activities designed to enhance your programming skills and career prospects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
