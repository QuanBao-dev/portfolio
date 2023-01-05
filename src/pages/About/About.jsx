import Icon from "../../components/Icon/Icon";
import "./About.css";

const listSkills = {
  Frameworks: [
    "Reactjs",
    "Redux",
    "Puppeteer",
    "Expressjs / NodeJs",
    "Socket.io",
    "Rxjs",
  ],
  Database: ["MongoDB", "Cloudinary"],
  VersionControl: ["Git"],
};
const About = () => {
  return (
    <div className="about-container">
      <section className="first-section">
        <ul>
          <li>
            <h2>INTRO</h2>
            <div>
              Hello everyone who came to my site. My name is Quan Bao. I am 21
              years old. I live in Sanjose, California. I was interested IT
              technologies when I was in the first year in high school. I chose
              the specialty of a Frontend developer, as it requires some
              creative abilities and deep practical training in web programming.
              On this page will be information about my skills.
            </div>
          </li>
          <li>
            <h2>USED TECHNOLOGIES</h2>
            <ul>
              <li>
                Frameworks
                <ul>
                  {listSkills["Frameworks"].map((v, key) => (
                    <li key={key}>{v}</li>
                  ))}
                </ul>
              </li>
              <li>
                Database
                <ul>
                  {listSkills["Database"].map((v, key) => (
                    <li key={key}>{v}</li>
                  ))}
                </ul>
              </li>
              <li>
                Version Control
                <ul>
                  {listSkills["VersionControl"].map((v, key) => (
                    <li key={key}>{v}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h2>CONTACTS</h2>
            <ul>
              <li>Email: quanbao.dev2001@gmail.com</li>
              <li>Phone: +1 669-293-7248</li>
              <li>
                Github:{" "}
                <a
                  target={"_blank"}
                  href={"https://github.com/QuanBao-dev"}
                  rel="noreferrer"
                >
                  <Icon size={"1em"} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="image-container">
          <img
            src="https://www.roessner.tech/static/media/about.d8fe852f6a9badcd8616.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default About;
