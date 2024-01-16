import profilePic from "../assets/about-pic.png";
import linkedInIcon from "../assets/linkedin.png";
import myResume from "../assets/Resume-Moiz.pdf";
import githubIcon from "../assets/github.png";

export default function profile() {

  return (
    <div className="profile-section">
        <div className="mobView-text-container">
            <p className="text1-2"><b> Hi, I'm </b></p>
            <h1 className="my-name-2">Moiz Amjad</h1>
            <p className="title-2"><b> Software Developer </b></p>
        </div>
        
        <div className="pic-container">
            <img src={profilePic} className="profile-pic" alt="Moiz Amjad profile picture"/>
        </div> 

        <div className="text-container">
            <p className="text1"><b> Hi, I'm </b></p>
            <h1 className="my-name">Moiz Amjad</h1>
            <p className="title"><b> Software Developer </b></p>

            <div className="btn-container">
              <a href={myResume} download="Moiz_Amjad_Resume.pdf">
                <button className="btn btn-cv"> Download CV </button>
              </a>
              <button className="btn btn-contact" 
               onClick={() => window.location.href = "./#contact"}
              >
                Contact Info
              </button>
            </div>

            <div className="icons-container">
              <img src={linkedInIcon} alt="My LinkedIn profile" 
               className="icon" onClick={() => location.href=
               "https://www.linkedin.com/in/moiz-amjad-047632227/"}
              />
              <img src={githubIcon} alt="My Github profile" 
               className="icon" onClick={() => location.href=
               "https://github.com/moizamjad37"}
              />
            </div>

        </div>
    </div>
  )
}
