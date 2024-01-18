import aboutPic from '../assets/profile-pic.png'

export default function about() {
  return (
    <div className="about-container">
      <p>Get To Know More</p>
      <h1>About Me</h1>
      <div className="aboutPic-container">
            <img src={aboutPic} className="about-pic" alt="Moiz Amjad profile picture"/>
        </div> 
    </div>
  )
}
