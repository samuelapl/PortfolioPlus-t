import React from "react";
import Header from "../components/Header";
import SamuelSection from "../components/SamuelSection";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import ChatModal from "../components/ChatModal";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header  />
      <SamuelSection/>
      <AboutSection/>
      <ResumeSection/>
      <ProjectsSection/>
      <ServicesSection/>

      <ChatModal/>
      <Footer/>
   
   
    </div>
  );
};

export default HomePage;
