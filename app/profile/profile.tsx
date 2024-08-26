// import profilePic from "../assets/about-pic.png";
// import linkedInIcon from "../assets/linkedin.png";
// import myResume from "../assets/Resume-Moiz.pdf";
// import githubIcon from "../assets/github.png";
import Image from "next/image";

export default function profile() {
  return (
    <div className="profile-section">
      <div className="mobView-text-container">
        <p className="text1-2">
          <b> Hi, I&apos;m </b>
        </p>
        <h1 className="my-name-2">Moiz Amjad</h1>
        <p className="title-2">
          <b> Software Developer </b>
        </p>
      </div>

      <div className="pic-container">
        <Image
          src={"/assets/about-pic.png"}
          className="profile-pic"
          alt="Moiz Amjad profile picture"
          width={"100"}
          height={"100"}
        />
      </div>

      <div className="text-container">
        <p className="text1">
          <b> Hi, I&apos;m </b>
        </p>
        <h1 className="my-name">Moiz Amjad</h1>
        <p className="title">
          <b> Software Developer </b>
        </p>

        <div className="btn-container">
          <a href={"myResume"} download="Moiz_Amjad_Resume.pdf">
            <button className="btn btn-cv"> Download CV </button>
          </a>
          <button
            className="btn btn-contact"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>

        <div className="icons-container">
          <Image
            src={"/assets/linkedin.png"}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              (location.href =
                "https://www.linkedin.com/in/moiz-amjad-047632227/")
            }
            width={"100"}
            height={"100"}
          />
          <Image
            src={"/assets/github.png"}
            alt="My Github profile"
            className="icon"
            onClick={() => (location.href = "https://github.com/moizamjad37")}
            width={"100"}
            height={"100"}
          />
        </div>
      </div>
    </div>
  );
}
