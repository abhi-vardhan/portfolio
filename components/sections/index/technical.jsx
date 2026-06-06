// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";

// Section scss
import css from "../../../styles/sections/index/technical.module.scss";

export default function Technical() {
  return (
    <Section classProp={`${css.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="Backend-first engineer with a strong command of cloud infrastructure, distributed systems, and full-stack development."
        />

        <div className={css.grid}>
          {categories.map(({ label, icon, items }) => (
            <div key={label} className={css.card}>
              <div className={css.cardHeader}>
                <span className={css.cardIcon}>{icon}</span>
                <h3>{label}</h3>
              </div>
              <ul className={css.skillList}>
                {items.map((item) => (
                  <li key={item.name} className={css.skill}>
                    <i className={`${item.icon} colored`} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const categories = [
  {
    label: "Languages",
    icon: "⌨️",
    items: [
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Solidity", icon: "devicon-solidity-plain" },
    ],
  },
  {
    label: "Backend",
    icon: "🖥️",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "REST APIs", icon: "devicon-fastapi-plain" },
      { name: "WebSockets", icon: "devicon-nodejs-plain" },
      { name: "Prisma", icon: "devicon-prisma-original" },
    ],
  },
  {
    label: "Frontend",
    icon: "🎨",
    items: [
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "React Native", icon: "devicon-react-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "HTML / CSS", icon: "devicon-html5-plain" },
    ],
  },
  {
    label: "Databases",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: "☁️",
    items: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain" },
      { name: "Nginx", icon: "devicon-nginx-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
  },
  {
    label: "Tools",
    icon: "🔧",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
    ],
  },
];

const software = [
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
  { key: "githubactions", name: "GitHub Actions", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "github", name: "GitHub", type: "devicon" },
  { key: "nginx", name: "Nginx", type: "devicon" },
  { key: "linux", name: "Linux", type: "devicon" },
  { key: "vscode", name: "VS Code", type: "devicon" },
  { key: "postman", name: "Postman", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "vercel", name: "Vercel", type: "devicon" },
  { key: "gear", name: "REST APIs", type: "fas" },
];

const tech = [
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "nodejs", name: "Node.js", type: "devicon" },
  { key: "fastapi", name: "FastAPI", type: "devicon" },
  { key: "react", name: "React.js", type: "devicon" },
  { key: "nextjs", name: "Next.js", type: "devicon" },
  { key: "react", name: "React Native", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "redis", name: "Redis", type: "devicon" },
  { key: "prisma", name: "Prisma", type: "devicon" },
  { key: "solidity", name: "Solidity", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
];
