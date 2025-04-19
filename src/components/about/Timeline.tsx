
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2018",
    title: "Club Foundation",
    description: "PTSC was founded by a group of passionate CS students with the vision to create a coding community."
  },
  {
    year: "2019",
    title: "First Hackathon",
    description: "Successfully organized our first 24-hour hackathon with over 100 participants from various colleges."
  },
  {
    year: "2020",
    title: "Virtual Transition",
    description: "Adapted to online workshops and virtual coding sessions during the pandemic, expanding our reach."
  },
  {
    year: "2021",
    title: "Industry Partnerships",
    description: "Established partnerships with tech companies for workshops, mentorship, and internship opportunities."
  },
  {
    year: "2022",
    title: "Open Source Contributions",
    description: "Initiated our first open source project that received contributions from students across the country."
  },
  {
    year: "2023",
    title: "National Recognition",
    description: "Won the 'Best College Coding Club' award at the National Tech Clubs Summit."
  },
  {
    year: "2024",
    title: "Expansion & Growth",
    description: "Expanded to include specialized interest groups for AI, web development, cybersecurity, and more."
  }
];

const Timeline = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to a thriving community - explore the milestones that have shaped PTSC.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 md:pl-0 pl-12 relative">
                  {/* Circle on timeline for mobile */}
                  <div className="md:hidden absolute left-0 top-0 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  
                  <div className={`bg-card p-6 rounded-lg shadow-sm border border-border max-w-md ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="text-primary font-semibold text-lg mb-2">{event.year}</div>
                    <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                
                {/* Circle on timeline for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
