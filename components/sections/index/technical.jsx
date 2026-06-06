// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="Backend-first engineer with a strong command of cloud infrastructure, distributed systems, and full-stack development."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Built for the backend, ready for the cloud"
              icon={["fat", "chart-network"]}
              copy="I specialise in building reliable, scalable backend systems and cloud-native infrastructure. From REST APIs and WebSockets to Docker microservices and CI/CD pipelines — I care deeply about performance, reliability, and clean architecture."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Tools & platforms"
              copy="The platforms and tools I rely on daily — from containerisation and CI/CD to cloud services and API tooling."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Languages & frameworks"
              copy="Languages and frameworks I use to build production-grade backend APIs, full-stack applications, and smart contracts."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

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
