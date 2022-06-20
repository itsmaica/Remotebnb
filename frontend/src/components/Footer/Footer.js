import { Link } from "react-router-dom";

import footer from "../../images/footer.jpeg";
import linkedin from "../../images/linkedin.png";
import githubicon from "../../images/githubicon.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="about-container">
        <div className="about">
          <div className="created-by">
            <h3>Created By Maica Santos</h3>
          </div>

          <div className="icons-bot">
            <div className="icon-box">
              <Link
                to={{ pathname: "https://www.linkedin.com/in/maicasantos/" }}
                target="_blank"
              >
                <img className="about-icons" src={linkedin} alt="linked" />
              </Link>
            </div>

            <div className="icon-box">
              <Link
                to={{ pathname: "https://github.com/itsmaica" }}
                target="_blank"
              >
                <img className="about-icons" src={githubicon} alt="github" />
              </Link>
            </div>
          </div>
        </div>

        <div className="technologies">
          <div id="tech-title">
            <h4>Technologies Used</h4>
          </div>

          <div className="lang">
                <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="language tag" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="language tag" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="language tag" />
                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="language tag" />
                <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="language tag" />
                <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="language tag" />
                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="language tag" />
                <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="language tag" />
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"  alt="language tag"/>
                <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="language tag"/>
                <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="language tag"/>
          </div>
        </div>
      </div>

      <div className="test">
        <div className="filler-div"></div>
        <img id="foot" src={footer} alt="green footer" />
      </div>
    </>
  );
}
export default Footer;
