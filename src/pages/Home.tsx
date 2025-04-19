
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CountdownTimer from "@/components/home/CountdownTimer";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  // Example date for the next event
  const nextEventDate = new Date("2025-05-15T14:00:00");
  
  return (
    <div>
      <Hero />
      <Features />
      <div className="bg-card/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Next Upcoming Event</h2>
          <CountdownTimer targetDate={nextEventDate} eventName="AI/ML Workshop Series" />
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
