import aboutPic from '../assets/profile-pic.png'

export default function about() {
  return (
    <div className="about-container">
      <p id="about">Get To Know More</p>
      <h1>About Me</h1>
      <div className="aboutPic-container">
          <img src={aboutPic} className="about-pic" alt="Moiz Amjad profile picture"/>
      </div>
      <p className='description-text'>
        Hello! I'm Moiz Amjad, a passionate Computer Science major deeply immersed 
        in the realms of web development, Machine Learning, and Mobile Development. 
        My internship at Devsinc was a pivotal experience, where I crafted a responsive 
        website and implemented the Factory Design Pattern for a car manufacturing backend.
        Additionally, I developed a Burger Builder app with login authentication and a 
        simplified Splitwise for expense management.
      </p>
      <p className='description-text'>
        Currently serving as a Peer Tutor and Supplemental Instructor at UMB, 
        I provide personalized tutoring in Mathematics, Computer Science, Economics, 
        and Philosophy. My diverse skills extend to sports, having played Squash and soccer, 
        and esports games, particularly FIFA. Project-wise, I've created a Splitwise App 
        for seamless bill and payment tracking and a Burger Builder using React JS, 
        showcasing my proficiency in managing states and multiple users.
      </p>
      <p className='description-text'>
        Beyond the tech world, I bring a multi-lingual background (English, Arabic, Urdu, 
        Punjabi, Hindi) and a GPA of 3.76 in my pursuit of a BS in Computer Science at UMB.
        Currently on the lookout for exciting internship opportunities, I'm eager to apply 
        my skills and contribute to innovative projects. If you share my enthusiasm for web
        development, AI, and mobile development, let's connect and explore potential collaborations.
      </p>

    </div>
  )
}
