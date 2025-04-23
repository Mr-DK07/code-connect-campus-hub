import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const coreTeam: TeamMember[] = [
  {
    id: 1,
    name: "Himanshu Dubey",
    role: "Joint Secretary",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    description:
      "Associate Professor in Computer Science with expertise in AI and Machine Learning. Guides the club's academic direction and industry connections.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "jane.smith@university.edu",
  },
  {
    id: 2,
    name: "Aditya Kumar Singh",
    role: "Comptetive Programming Head",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    description:
      "4th year Computer Science student passionate about full-stack development and open source. Leads club initiatives and coordinates with faculty.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "michael.chen@university.edu",
  },
  {
    id: 3,
    name: "Abhishek Yadav",
    role: "Comptetive Programming Head",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    description:
      "3rd year Software Engineering student specializing in mobile development. Organizes workshops and manages club operations.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "priya.sharma@university.edu",
  },
  {
    id: 4,
    name: "Vivek Tripathi",
    role: "Web Dev Head",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    description:
      "4th year Computer Engineering student with expertise in backend development and system architecture. Oversees club projects and technical workshops.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "david.wilson@university.edu",
  },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of students and faculty who make PTSC possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <div className="flex mt-4 space-x-3">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                      title="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      title="LinkedIn Profile"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      title="Email"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for detailed member info */}
        {selectedMember && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg shadow-lg border border-border max-w-2xl w-full overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-auto md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="font-bold text-2xl">{selectedMember.name}</h3>
                  <p className="text-primary font-medium mb-4">
                    {selectedMember.role}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {selectedMember.description}
                  </p>
                  <div className="flex space-x-4 mb-6">
                    {selectedMember.github && (
                      <a
                        href={selectedMember.github}
                        target="_blank"
                        title="GitHub Profile"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        title="LinkedIn Profile"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {selectedMember.email && (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        title="Email"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
