
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background code effect */}
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden text-[8px] text-foreground/50 font-mono leading-tight">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {`function init() { const programmingClub = new Club('CodeCraft'); programmingClub.init(); const members = await getMembers(); members.forEach(member => { member.enhanceSkills(); member.createProjects(); member.collaborateWith(team); }); }`
              .repeat(3)}
          </div>
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-primary">&lt;</span> CodeCraft <span className="text-primary">/&gt;</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">Programming Club</p>
            <p className="text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Where coding meets creativity and innovation. Join us to enhance your programming skills, collaborate on exciting projects, and connect with like-minded tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-base">
                <Link to="/join">Join Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/events">Explore Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-full h-full max-w-md mx-auto rounded-lg bg-card p-6 shadow-lg border border-border">
              <pre className="text-xs md:text-sm overflow-x-auto text-code-foreground font-mono">
                <code>{`import { ProgrammingClub } from 'university';

class CodeCraft extends ProgrammingClub {
  constructor() {
    super('CodeCraft');
    this.vision = 'Empower students through code';
    this.skills = [
      'Web Development', 
      'App Development',
      'Machine Learning', 
      'Competitive Programming',
      'Open Source'
    ];
  }

  async joinClub(student) {
    await this.validateInterest(student);
    this.members.push(student);
    this.enhanceSkills(student);
    return this.welcomeMessage;
  }
}

const club = new CodeCraft();
club.initialize();`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
