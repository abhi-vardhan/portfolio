import Color from "../../components/utils/page.colors.util";
import colors from "../../content/index/_colors.json";
import css from "../../styles/pages/tech-stack.module.scss";

export default function TechStackPage() {
  return (
    <>
      <Color colors={colors} />
      <div className={css.page}>
        <div className={css.hero}>
          <h1 className={css.heroTitle}>Tech Stack</h1>
          <p className={css.heroSub}>
            The languages, frameworks, tools, and platforms I use every day.
          </p>
        </div>

        {stackSections.map(({ section, items }) => (
          <div key={section} className={css.section}>
            <h2 className={css.sectionTitle}>{section}</h2>
            <div className={css.grid}>
              {items.map(({ name, category, icon, bg }) => (
                <div key={name} className={css.tile}>
                  <div className={css.tileIcon} style={{ background: bg }}>
                    <i className={`${icon} colored`} />
                  </div>
                  <div className={css.tileMeta}>
                    <span className={css.tileName}>{name}</span>
                    <span className={css.tileCategory}>{category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const stackSections = [
  {
    section: "Languages",
    items: [
      {
        name: "TypeScript",
        category: "Language",
        icon: "devicon-typescript-plain",
        bg: "#1a2f4a",
      },
      {
        name: "JavaScript",
        category: "Language",
        icon: "devicon-javascript-plain",
        bg: "#2a2400",
      },
      {
        name: "Python",
        category: "Language",
        icon: "devicon-python-plain",
        bg: "#1e3a5f",
      },
      {
        name: "Java",
        category: "Language",
        icon: "devicon-java-plain",
        bg: "#2a1a10",
      },
      {
        name: "Solidity",
        category: "Smart Contracts",
        icon: "devicon-solidity-plain",
        bg: "#1a1a2e",
      },
    ],
  },
  {
    section: "Backend",
    items: [
      {
        name: "Node.js",
        category: "Runtime",
        icon: "devicon-nodejs-plain",
        bg: "#143322",
      },
      {
        name: "FastAPI",
        category: "Framework",
        icon: "devicon-fastapi-plain",
        bg: "#003333",
      },
      {
        name: "Express",
        category: "Framework",
        icon: "devicon-express-original",
        bg: "#1a1a1a",
      },
      {
        name: "Prisma",
        category: "ORM",
        icon: "devicon-prisma-original",
        bg: "#0f172a",
      },
      {
        name: "Socket.IO",
        category: "Realtime",
        icon: "devicon-socketio-original",
        bg: "#111",
      },
    ],
  },
  {
    section: "Frontend",
    items: [
      {
        name: "React.js",
        category: "UI Library",
        icon: "devicon-react-original",
        bg: "#0d2233",
      },
      {
        name: "Next.js",
        category: "Framework",
        icon: "devicon-nextjs-original",
        bg: "#111",
      },
      {
        name: "React Native",
        category: "Mobile",
        icon: "devicon-react-original",
        bg: "#0d2233",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        icon: "devicon-tailwindcss-plain",
        bg: "#0c2233",
      },
      {
        name: "Framer Motion",
        category: "Animation",
        icon: "devicon-framermotion-original",
        bg: "#1a0a2e",
      },
    ],
  },
  {
    section: "Databases",
    items: [
      {
        name: "PostgreSQL",
        category: "Relational",
        icon: "devicon-postgresql-plain",
        bg: "#1a2d47",
      },
      {
        name: "MongoDB",
        category: "NoSQL",
        icon: "devicon-mongodb-plain",
        bg: "#0f2a1a",
      },
      {
        name: "Redis",
        category: "Cache",
        icon: "devicon-redis-plain",
        bg: "#3a0a0a",
      },
      {
        name: "MySQL",
        category: "Relational",
        icon: "devicon-mysql-plain",
        bg: "#1a2a3a",
      },
    ],
  },
  {
    section: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        category: "Cloud",
        icon: "devicon-amazonwebservices-plain",
        bg: "#1a1000",
      },
      {
        name: "Docker",
        category: "Container",
        icon: "devicon-docker-plain",
        bg: "#002244",
      },
      {
        name: "GitHub Actions",
        category: "CI/CD",
        icon: "devicon-githubactions-plain",
        bg: "#111",
      },
      {
        name: "Nginx",
        category: "Server",
        icon: "devicon-nginx-plain",
        bg: "#003322",
      },
      {
        name: "Linux",
        category: "OS",
        icon: "devicon-linux-plain",
        bg: "#1a1a00",
      },
      {
        name: "Vercel",
        category: "Deployment",
        icon: "devicon-vercel-original",
        bg: "#111",
      },
    ],
  },
  {
    section: "Tools",
    items: [
      {
        name: "Git",
        category: "Version Control",
        icon: "devicon-git-plain",
        bg: "#2a1000",
      },
      {
        name: "GitHub",
        category: "Hosting",
        icon: "devicon-github-original",
        bg: "#111",
      },
      {
        name: "Postman",
        category: "API Testing",
        icon: "devicon-postman-plain",
        bg: "#2a1200",
      },
      {
        name: "Figma",
        category: "Design",
        icon: "devicon-figma-plain",
        bg: "#1a0a2e",
      },
      {
        name: "VS Code",
        category: "Editor",
        icon: "devicon-vscode-plain",
        bg: "#002244",
      },
    ],
  },
];
