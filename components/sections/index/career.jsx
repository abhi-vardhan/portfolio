// Core packages
import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Building production-grade software and leading technical communities."
        />
        <section className={career.area}>
          {/* Pravachan */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Pravachan</h3>
                <h4>Software Development Engineer Intern</h4>
                <h4>Mar 2025 – Nov 2025 · 9 mos</h4>
                <h5>Remote, India</h5>
              </span>
              <p>
                Pravachan is a spiritual content platform delivering live and
                on-demand content to users across India. Built and scaled the
                cross-platform mobile platform end-to-end — from architecture to
                production deployment.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Software Development Engineer Intern</h3>
                  <h4>Mar 2025 – Nov 2025 · 9 mos</h4>
                </span>
                <p>
                  Built a cross-platform mobile app (React Native + Node.js
                  backend) serving <strong>2,000+ active users</strong> with a
                  centralised admin dashboard, maintaining 99%+ uptime across
                  Android and iOS.
                </p>
                <ul className={career.list}>
                  <li>
                    Reduced API response time by ~35% via Redis caching and
                    connection pooling
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Applied to
                      high-traffic endpoints
                    </span>
                  </li>
                  <li>
                    Designed Docker microservices architecture — auth, media,
                    payments, notifications, analytics
                    <span className={career.subList}>
                      <span className={career.bullet}></span>PostgreSQL ·
                      MongoDB · Redis
                    </span>
                  </li>
                  <li>
                    Automated deployments via GitHub Actions CI/CD
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Cut release time by
                      over 80%
                    </span>
                  </li>
                  <li>
                    Built Razorpay subscription APIs covering the full payment
                    lifecycle
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Create · renew ·
                      cancel · webhook failure recovery
                    </span>
                  </li>
                </ul>
                <Badges
                  list={pravachanStack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          {/* Fusion Tech Club */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bhavan&apos;s Vivekananda College</h3>
                <h4>Head, Fusion Tech Club</h4>
                <h4>Mar 2022 – Apr 2024 · 2 yrs 2 mos</h4>
                <h5>Hyderabad, India</h5>
              </span>
              <p>
                Led the college&apos;s technology club — organised workshops,
                hackathons, and bootcamps; mentored student teams across system
                design, Android development, and full-stack projects from design
                to deployment.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Head, Fusion Tech Club</h3>
                  <h4>Mar 2022 – Apr 2024 · 2 yrs 2 mos</h4>
                </span>
                <p>
                  Led a community of <strong>400+ students</strong> — organised
                  10+ workshops on system design, Android development, and
                  project bootcamps; mentored teams from ideation to deployment.
                </p>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const pravachanStack = [
  { key: "react", name: "React Native", type: "devicon" },
  { key: "nodejs", name: "Node.js", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "redis", name: "Redis", type: "devicon" },
  { key: "githubactions", name: "GitHub Actions", type: "devicon" },
  { key: "nginx", name: "Nginx", type: "devicon" },
];
