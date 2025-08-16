import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Team from "./components/Team";
import ClassSchedule from "./components/ClassSchedule";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PricingPlan from "./components/PricingPlan";
import Trainer from "./components/Trainer";
import About from "./components/About";
import Contact from "./components/Contact";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Statistics />
      <Team />
      <ClassSchedule />
      <PricingPlan />
      <Trainer />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
