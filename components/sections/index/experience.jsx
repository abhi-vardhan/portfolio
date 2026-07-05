import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Section from "../../structure/section";
import Container from "../../structure/container";
import SectionTitle from "../../blocks/section.title.block";

import css from "../../../styles/sections/index/experience.module.scss";

const experiences = [
  {
    company: "Pravachan",
    role: "Software Engineer",
    dates: "Mar 2025 – Nov 2025",
    duration: "9 mos",
    location: "Remote, India",
    badge: "Software Engineer",
    description:
      "Built and scaled a cross-platform mobile platform end-to-end — from architecture to production deployment — serving a spiritual content platform delivering live and on-demand content across India.",
    bullets: [
      <>
        Built a React Native + Node.js mobile app serving{" "}
        <strong>2,000+ active users</strong>, with a centralised admin dashboard
        maintaining <strong>99%+ uptime</strong> across Android and iOS.
      </>,
      <>
        Reduced API response time by <strong>~35%</strong> by implementing Redis
        caching and connection pooling on high-traffic endpoints.
      </>,
      <>
        Designed a <strong>Docker microservices architecture</strong> (auth,
        media, payments, notifications, analytics) with PostgreSQL, MongoDB and
        Redis; automated deployments via <strong>GitHub Actions CI/CD</strong>,
        cutting release time by over 80%.
      </>,
      <>
        Built Razorpay subscription APIs covering the full payment lifecycle —
        create, renew, cancel and webhook failure recovery; integrated{" "}
        <strong>Cloudflare CDN</strong> for global content delivery.
      </>,
    ],
    tech: [
      { icon: "devicon-react-original colored", label: "React Native" },
      { icon: "devicon-nodejs-plain colored", label: "Node.js" },
      { icon: "devicon-typescript-plain colored", label: "TypeScript" },
      { icon: "devicon-docker-plain colored", label: "Docker" },
      { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
      { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
      { icon: "devicon-redis-plain colored", label: "Redis" },
      { icon: "devicon-nginx-plain colored", label: "Nginx" },
    ],
  },
  {
    company: "Bhavan's Vivekananda College",
    role: "Head, Fusion Tech Club",
    dates: "Mar 2022 – Apr 2024",
    duration: "2 yrs 2 mos",
    location: "Hyderabad, India",
    badge: "Leadership",
    description:
      "Led the college's technology club — building a culture of learning and collaboration across software engineering, system design, and product development.",
    bullets: [
      <>
        Led a community of <strong>400+ students</strong> across multiple
        engineering disciplines.
      </>,
      <>
        Organised <strong>10+ workshops</strong> on system design, Android
        development, Java, OOP, and project bootcamps.
      </>,
      <>
        Mentored student teams from ideation to deployment — guiding projects
        end-to-end.
      </>,
    ],
    tech: [
      { icon: "devicon-java-plain colored", label: "Java" },
      { icon: "devicon-android-plain colored", label: "Android" },
      { icon: "devicon-github-original", label: "GitHub" },
    ],
  },
];

function TimelineEntry({ entry, index }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      },
    },
  };

  return (
    <m.div
      ref={ref}
      className={css.entry}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {/* Dot */}
      <div className={css.dot}>
        <span className={css.dotInner} />
      </div>

      {/* Card */}
      <div className={css.card}>
        <div className={css.cardHeader}>
          <div className={css.company}>
            <h3>{entry.company}</h3>
            <h4>{entry.role}</h4>
          </div>
          <div className={css.meta}>
            <span className={css.badge}>{entry.badge}</span>
            <span className={css.dates}>
              {entry.dates} · {entry.duration}
            </span>
            <span className={css.location}>{entry.location}</span>
          </div>
        </div>

        <p className={css.description}>{entry.description}</p>

        <ul className={css.bullets}>
          {entry.bullets.map((b, i) => (
            <li key={i}><span>{b}</span></li>
          ))}
        </ul>

        <div className={css.chips}>
          {entry.tech.map(({ icon, label }) => (
            <span key={label} className={css.chip}>
              <i className={icon} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
}

export default function Experience() {
  return (
    <Section classProp={`${css.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Building production-grade software and leading technical communities."
        />
        <div className={css.timeline}>
          {experiences.map((entry, index) => (
            <TimelineEntry key={index} entry={entry} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
