import ClassSchedule from "./components/ClassSchedule";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PricingPlan from "./components/PricingPlan";
import Trainer from "./components/Trainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ClassSchedule />
      <PricingPlan />
      <Trainer />
      <Footer />
    </div>
  );
};

export default App;
