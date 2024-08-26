"use client";
import "./main.css";
import "./navigationBar/navbarStyles.css";
import "./profile/profileStyles.css";
import "./about/aboutStyles.css";
import "./experience/experienceStyles.css";
import "./projects/projectStyles.css";
import "./contact/contactStyles.css";
import "./footer/footerStyles.css";
import Navbar from "./navigationBar/navbar";
import Profile from "./profile/profile";
import About from "./about/about";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
