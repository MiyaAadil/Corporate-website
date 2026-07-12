import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MissionVision from "../components/MissionVision";
import WhyChooseUs from "../components/WhyChooseUs";
import Team from "../components/Team";
import CTA from "../components/CTA";

import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <>
    <PageTransition>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhyChooseUs />
      <Team />
      <CTA />
    </PageTransition>
      
    </>
  );
};

export default About;
