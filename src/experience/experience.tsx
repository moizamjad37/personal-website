import checkmarkGreen from "../assets/checkmark-green.png";
import checkmarkBlue from "../assets/checkmark-blue.png";
import checkmarkBlueGreen from "../assets/checkmark-bluegreen.png";


export default function experience() {
  return (
    <div className="experience-container">
        <p id="experience">Explore My</p>
        <h1>Experience</h1>
        <div className="experience-container2">
            
            <div className="frontend-container">
                <h2 className="frontend-title">Frontend Development</h2>
                    <div className="article-container">
                    <article>
                        <img className="icon2" src={checkmarkBlue} alt="Checkmark Icon" />
                        <div>
                            <h3>HTML</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img className="icon2" src={checkmarkBlue} alt="Checkmark Icon" />
                        <div>
                            <h3>CSS</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img className="icon2" src={checkmarkBlue} alt="Checkmark Icon" />
                        <div>
                            <h3>React JS/TS</h3>
                            <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img className="icon2" src={checkmarkBlueGreen} alt="Checkmark Icon" />
                        <div>
                            <h3>Javascript</h3>
                            <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img className="icon2" src={checkmarkBlueGreen} alt="Checkmark Icon" />
                        <div>
                            <h3>Typescript</h3>
                            <p>Basic</p>
                        </div>
                    </article>
                </div>
            </div>
            
            <div className="backend-container">
            <h2 className="backend-title">Backend Development</h2>
                <div className="article-container">
                <article>
                        <img className="icon2" src={checkmarkGreen} alt="Checkmark Icon" />
                        <div>
                            <h3>Python</h3>
                            <p>Intermediate</p>
                        </div>
                </article>
                <article>
                        <img className="icon2" src={checkmarkGreen} alt="Checkmark Icon" />
                        <div>
                            <h3>Java</h3>
                            <p>Intermediate</p>
                        </div>
                </article>
                <article>
                        <img className="icon2" src={checkmarkGreen} alt="Checkmark Icon" />
                        <div>
                            <h3>C</h3>
                            <p>Intermediate</p>
                        </div>
                </article>
                <article>
                        <img className="icon2" src={checkmarkGreen} alt="Checkmark Icon" />
                        <div>
                            <h3>Firebase</h3>
                            <p>Intermediate</p>
                        </div>
                </article>
                <article>
                        <img className="icon2" src={checkmarkBlueGreen} alt="Checkmark Icon" />
                        <div>
                            <h3>Git</h3>
                            <p>Intermediate</p>
                        </div>
                </article>
                </div>
            </div>
                
        
        </div>
    </div>
  ) 
}
