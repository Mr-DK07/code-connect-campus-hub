
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About CodeCraft</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 2018, CodeCraft is the premier programming club at University College, dedicated to fostering a community of passionate coders, innovators, and problem solvers.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to provide a platform for students to enhance their programming skills, collaborate on projects, and prepare for tech industry challenges through hands-on learning experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="text-primary font-medium text-sm">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Skill Development</h3>
                  <p className="text-muted-foreground">Providing resources and mentorship to enhance programming skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="text-primary font-medium text-sm">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Community Building</h3>
                  <p className="text-muted-foreground">Creating a supportive network of like-minded tech enthusiasts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="text-primary font-medium text-sm">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Industry Readiness</h3>
                  <p className="text-muted-foreground">Preparing students for tech careers through practical projects</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              <div className="aspect-video rounded-md overflow-hidden bg-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="italic text-muted-foreground">
                    "To create a vibrant tech ecosystem where every student can discover their potential in programming and contribute to technological innovation."
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Members</span>
                  <span className="font-semibold">200+</span>
                </div>
                <div className="w-full bg-primary/10 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="w-full bg-primary/10 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Events Hosted</span>
                  <span className="font-semibold">30+</span>
                </div>
                <div className="w-full bg-primary/10 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-primary/5 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
