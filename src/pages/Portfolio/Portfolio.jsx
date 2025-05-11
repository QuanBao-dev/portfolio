import Icon from "../../components/Icon/Icon";
import "./Portfolio.css";
const data = [
  {
    href: "https://myanimefun.up.railway.app/",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1569842018693115904/profile/projects/files/7054f771-079a-426b-af1e-c1caaeb841da",
    title: "My anime Fun",
    description: [
      "An anime database where you can watch the latest anime in high quality and discuss about them with other people. Update daily, No tracking, No paying, No registration required. Just enjoy your anime",
    ],
    tagList: ["MongoDB", "Express", "React", "Node", "Puppeteer", "Socket.io"],
    isReversed: true,
    githubLink: "https://github.com/QuanBao-dev/web-movie",
  },
  {
    href: "https://dev-to.up.railway.app/",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1569842018693115904/profile/projects/files/b885bcad-6b87-4cde-919c-23e3ca234f3c",
    title: "Dev to",
    description: [
      "A community blog website where you will share your knowledge to community",
    ],
    tagList: ["MongoDB", "Express", "React", "Node"],
    githubLink: "https://github.com/QuanBao-dev/community-blog-site",
  },
  {
    href: "https://quanbao-foodstore.netlify.app/",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1569842018693115904/profile/projects/files/72682fcd-62dc-4132-97d7-819ca5947130",
    title: "Food G",
    description: [
      "A website where you can order food online. You can add to cart, check out the food",
    ],
    tagList: ["React"],
    isReversed: true,
    githubLink: "https://github.com/QuanBao-dev/food-store",
  },
  {
    href: "https://quanbao-barber.netlify.app/",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1569842018693115904/profile/projects/files/5cf46556-d599-4a7d-9bbc-54985528b6a1",
    title: "Barber",
    description: ["A beautiful landing page website about barber shop."],
    tagList: ["HTML", "CSS", "Vanilla Javascript"],
    githubLink: "https://github.com/QuanBao-dev/Barber",
  },
  {
    href: "https://quanbao-idea.netlify.app",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1569842018693115904/profile/projects/files/83673ab5-ff26-4324-9150-4df2d5a620c3",
    title: "Idea",
    description: ["A beautiful landing page website about Designer team."],
    tagList: ["HTML", "CSS", "Vanilla Javascript"],
    isReversed: true,
    githubLink: "https://github.com/QuanBao-dev/Idea",
  },
  {
    href: "https://quanbao-mibike.netlify.app/",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1569842018693115904/profile/projects/files/a9382f19-5922-4053-aaff-33c9a19afc32",
    title: "MiBike",
    description: ["A beautiful landing page website about Bike shop."],
    tagList: ["HTML", "CSS", "Vanilla Javascript"],
    githubLink: "https://github.com/QuanBao-dev/MiBike",
  },
];
const Portfolio = () => {
  return (
    <div>
      <h1 className="portfolio-title">Something I've built</h1>
      <ul className="portfolio-list">
        {data.map(
          (
            {
              description,
              href,
              image,
              title,
              isReversed,
              tagList,
              githubLink,
            },
            key
          ) => (
            <li
              key={key}
              className={`project-item${isReversed ? " reverse" : ""}`}
            >
              <div className="image-container">
                <img src={image} alt={title} />
              </div>
              <div className="project-item-wrapper">
                <div>Featured Project</div>
                <h1>{title}</h1>
                <div className="description">
                  {description.map((desc, key) => (
                    <div key={key}>{desc}</div>
                  ))}
                </div>
                <ul className="tagname-list">
                  {tagList.map((tag, key) => (
                    <li className="tagname-item" key={key}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <ul className="links-code-show">
                  <a target={"_blank"} rel="noreferrer" href={githubLink}>
                    <Icon />
                  </a>
                  <a href={href} target={"_blank"} rel="noreferrer">
                    <Icon type={"website"} />
                  </a>
                </ul>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Portfolio;
