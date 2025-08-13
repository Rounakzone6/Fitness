import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Team from "./components/Team";
import ClassSchedule from "./components/ClassSchedule";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PricingPlan from "./components/PricingPlan";
import Trainer from "./components/Trainer";
import About from "./components/About";
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
      <Footer />
    </div>
  );
};

export default App;
