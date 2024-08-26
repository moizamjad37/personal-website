// import checkmarkGreen from "../assets/checkmark-green.png";
// import checkmarkBlue from "../assets/checkmark-blue.png";
// import checkmarkBlueGreen from "../assets/checkmark-bluegreen.png";
import Image from "next/image";

export default function experience() {
  interface Skill {
    name: string;
    experience: string;
    icon: string; // or the specific type if it's an imported image
  }

  const frontendSkills: Skill[] = [
    {
      name: "HTML",
      experience: "Experienced",
      icon: "/assets/checkmark-blue.png",
    },
    {
      name: "CSS",
      experience: "Experienced",
      icon: "/assets/checkmark-blue.png",
    },
    {
      name: "React JS/TS",
      experience: "Intermediate",
      icon: "/assets/checkmark-blue.png",
    },
    {
      name: "Material UI",
      experience: "Intermediate",
      icon: "/assets/checkmark-blue.png",
    },
  ];

  const backendSkills: Skill[] = [
    {
      name: "Python",
      experience: "Experienced",
      icon: "/assets/checkmark-green.png",
    },
    {
      name: "C",
      experience: "Intermediate",
      icon: "/assets/checkmark-green.png",
    },
    {
      name: "Java",
      experience: "Intermediate",
      icon: "/assets/checkmark-green.png",
    },
    {
      name: "Javascript",
      experience: "Experienced",
      icon: "/assets/checkmark-green.png",
    },
    {
      name: "Typescript",
      experience: "Basic",
      icon: "/assets/checkmark-green.png",
    },
    {
      name: "Dart",
      experience: "Basic",
      icon: "/assets/checkmark-green.png",
    },
  ];

  return (
    <div className="experience-container">
      <p id="experience">Explore My</p>
      <h1>Experience</h1>
      <div className="experience-container2">
        <div className="frontend-container">
          <h2 className="frontend-title">Frontend Development</h2>
          <div className="article-container">
            {frontendSkills.map((skill, index) => (
              <article key={index}>
                <Image
                  className="icon2"
                  src={skill.icon}
                  alt="Checkmark Icon"
                  width={"100"}
                  height={"100"}
                />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.experience}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="backend-container">
          <h2 className="backend-title">Backend Development</h2>
          <div className="article-container">
            {backendSkills.map((skill, index) => (
              <article key={index}>
                <Image
                  className="icon2"
                  src={skill.icon}
                  alt="Checkmark Icon"
                  width={"100"}
                  height={"100"}
                />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.experience}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
