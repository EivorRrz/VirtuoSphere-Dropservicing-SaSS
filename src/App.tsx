import Hero from "./components/base/Hero";
import Brands from "./components/base/Brands";
import Features from "./components/base/Features";
import Pricing from "./components/base/Pricing";
import Newsletter from "./components/base/Newsletter";
import FAQSection from "./components/base/FAQSection";

import OurTeam from "./components/base/AboutMe";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Hero />

        <Brands />
        <Features />
        <Pricing />
        <Newsletter />
        <FAQSection />
        <OurTeam />
      </div>
    </div>
  );
};

export default App;