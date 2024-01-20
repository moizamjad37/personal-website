import logo from '../assets/Moiz-Logo.png';

export default function navbar() {
  
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  }

  return (
    <div className="nav-container">
        
        <div className="logo-container"> <img src={logo} className="logo" alt="Logo"/> </div>

        <div> 
          <ul className="nav-links">
            <li><a href="#about"> About </a></li>
            <li><a href="#experience"> Experience </a></li>
            <li><a href="#projects"> Projects </a></li>
            <li><a href="#contact"> Contact </a></li>
          </ul> 
        </div>

        <div className="mobile-nav">
          <div className="nav-menu">
            <div className="menu-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div >
              <ul className="menu-links">  
                <li><a href="#about" onClick={toggleMenu}> About </a></li>
                <li><a href="#experience" onClick={toggleMenu}> Experience </a></li>
                <li><a href="#projects" onClick={toggleMenu}> Projects </a></li>
                <li><a href="#contact" onClick={toggleMenu}> Contact </a></li>
              </ul>
            </div>
          </div>
        </div>

    </div>
  )
}
