
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  studentId: z.string().min(5, {
    message: "Please enter a valid student ID.",
  }),
  major: z.string().min(1, {
    message: "Please select your major.",
  }),
  year: z.string().min(1, {
    message: "Please select your year of study.",
  }),
  skills: z.string().min(5, {
    message: "Please list at least a few of your skills.",
  }),
  interests: z.string().min(5, {
    message: "Please describe your interests.",
  }),
  expectations: z.string().min(5, {
    message: "Please describe what you expect from joining the club.",
  }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const JoinForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      studentId: "",
      major: "",
      year: "",
      skills: "",
      interests: "",
      expectations: "",
      termsAccepted: false,
    },
  });
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      toast.success("Application submitted successfully!", {
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join CodeCraft</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become part of our programming community! Fill out the form below to apply for membership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border sticky top-24">
              <h3 className="text-2xl font-semibold mb-6">Why Join Us?</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Skill Development</h4>
                  <p className="text-muted-foreground">Enhance your programming skills through workshops, projects, and peer learning.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Networking</h4>
                  <p className="text-muted-foreground">Connect with like-minded students, alumni, and industry professionals.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Projects</h4>
                  <p className="text-muted-foreground">Work on real-world projects to build your portfolio and gain practical experience.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Events</h4>
                  <p className="text-muted-foreground">Participate in hackathons, coding competitions, and tech events.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Resources</h4>
                  <p className="text-muted-foreground">Access to exclusive learning resources, tools, and mentorship.</p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Open to all students regardless of programming experience. We welcome beginners and experienced programmers alike!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-2xl font-semibold mb-6">Membership Application</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email address" {...field} />
                          </FormControl>
                          <FormDescription>Preferably your university email</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="studentId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Your student ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="major"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Major</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your major" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cs">Computer Science</SelectItem>
                              <SelectItem value="ce">Computer Engineering</SelectItem>
                              <SelectItem value="se">Software Engineering</SelectItem>
                              <SelectItem value="it">Information Technology</SelectItem>
                              <SelectItem value="ds">Data Science</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Study</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">First Year</SelectItem>
                              <SelectItem value="2">Second Year</SelectItem>
                              <SelectItem value="3">Third Year</SelectItem>
                              <SelectItem value="4">Fourth Year</SelectItem>
                              <SelectItem value="5+">Fifth Year or Beyond</SelectItem>
                              <SelectItem value="graduate">Graduate Student</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Programming Skills</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List the programming languages, frameworks, and tools you're familiar with"
                            className="resize-none min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          It's okay if you're a beginner! Just let us know your current skill level.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Areas of Interest</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What areas of programming or technology are you most interested in?"
                            className="resize-none min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          E.g., Web development, machine learning, game development, etc.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="expectations"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expectations</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What do you hope to gain from joining CodeCraft?"
                            className="resize-none min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the club's code of conduct and understand that active participation is expected.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
