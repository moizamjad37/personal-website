import burgerBuilderPic from '../assets/burger.png';
import splitwisePic from '../assets/splitwise-logo.png';

export default function projects() {
  return (
    <div className="projects-container">
        <p id="projects">Browse My Recent</p>
        <h1>Projects</h1>
        <div className="projects-container2">
          
          <div className="burgerBuilder-container">
            
            <div className="burgerBuilder-imageContainer">
              <img src={burgerBuilderPic} className="burgerBuilder-image" alt="Picture of a Burger" />
            </div>
            <h2>Burger Builder</h2>
            <div className="button-container">
              <button className="project-button" 
                onClick={() => location.href = "https://github.com/moizamjad37/burger-builder"}
              >
                Github
              </button>
              <button className="project-button"
                onClick={() => location.href = "https://burgerbuilder2023.netlify.app/"}
              > 
                Live Demo 
              </button>
              </div>
          </div>
          
          <div className="splitwise-container">
            
            <div className="splitwise-imageContainer">
              <img src={splitwisePic} className="splitwise-image" alt="Picture of a Burger" />
            </div>
            <h2>Splitwise App</h2>
            <div className="button-container">
              <button className="project-button" 
                onClick={() => location.href = "https://github.com/moizamjad37/splitwise-app"}
              >
                Github
              </button>
              <button className="project-button"
                onClick={() => location.href = "https://splitwiseapp2023.netlify.app/"}
              > 
                Live Demo 
              </button>
              </div>
          </div>

          
            
        
      </div>
    
    </div>
  )
}
