import Slider from "../assets/Component/Slider.jsx";
import ThinkBhizComponent from "../assets/Component/ThinkBhizComponent.jsx";
import ServiceCard from "../assets/Component/ServiceCard.jsx";
import Vision from "../assets/Component/Vision.jsx";
import RatingSection from "../assets/Component/RatingSection.jsx";
import ProjectCounter from "../assets/Component/ProjectCounter.jsx";
import WhyChoose from "../assets/Component/Whychoose.jsx";

const Home = () => {
  const homeStats = [
    { value: 250, title: "Projects Completed" },
    { value: 180, title: "Happy Clients" },
    { value: 50, title: "Team Members" },
    { value: 7, title: "Years of Experience" },
    { value: 25, title: "Ongoing Projects" },
    { value: 10, title: "Awards Won" },
    { value: 5, title: "Global Offices" },
    { value: 5, title: "Countries Active" },
  ];
  return (
    <>
      <Slider />
      <ServiceCard />
      <Vision />
      <RatingSection />
      <ProjectCounter counters={homeStats} />
      <WhyChoose />
      <ThinkBhizComponent />
    </>
  );
};

export default Home;
