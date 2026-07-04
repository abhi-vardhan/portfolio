import { useState } from "react";
import dynamic from "next/dynamic";
import { m } from "framer-motion";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false },
);

import Section from "../../structure/section";
import Container from "../../structure/container";

import space from "../../utils/spacing.util";

import HeroBg from "../../blocks/hero.bg/bg-color-1";

import hero from "../../../styles/sections/index/hero.module.scss";
import button from "../../../styles/blocks/button.module.scss";

import content from "../../../content/index/hero.json";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { value: "2,000+", label: "Users served" },
  { value: "99%+", label: "Uptime shipped" },
  { value: "400+", label: "Community led" },
];

export default function Hero() {
  const [typingStatus, setTypingStatus] = useState("Initializing");

  return (
    <Section classProp={`${hero.section}`}>
      {/* Animated aurora field */}
      <div className={hero.aurora} aria-hidden="true">
        <span className={hero.blob1} />
        <span className={hero.blob2} />
        <span className={hero.blob3} />
        <div className={hero.gridLines} />
      </div>

      <Container spacing={"VerticalXXXL"}>
        <m.div variants={container} initial="hidden" animate="show">
          <m.div variants={item} className={hero.preHeaderRow}>
            <span className={hero.statusDot} data-status={typingStatus} />
            <TypeAnimation
              className={`${hero.preHeader}`}
              sequence={[
                content.intro.startDelay,
                () => setTypingStatus("typing"),
                content.intro.start,
                () => setTypingStatus("typed"),
                content.intro.deleteDelay,
                () => setTypingStatus("deleting"),
                content.intro.end,
                () => setTypingStatus("deleted"),
                content.intro.restartDelay,
              ]}
              speed={content.intro.speed}
              deletionSpeed={content.intro.deletionSpeed}
              wrapper={content.intro.wrapper}
              repeat={Infinity}
            />
          </m.div>

          <m.section variants={item}>
            <h1 className={`${hero.header} ${hero.nameShimmer}`}>
              {content.header.name}
            </h1>
            <h1 className={`${hero.header} ${hero.primaryDim} ${hero.bigUsp}`}>
              {content.header.usp}
            </h1>
          </m.section>

          <m.section variants={item}>
            <p
              className={`${hero.primaryBright} subtitle ${space([
                "verticalLrg",
              ])}`}
            >
              {content.paragraph}
            </p>
          </m.section>

          <m.section variants={item} className={hero.actions}>
            <button
              className={`button ${button.primary}`}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1oH-e-gb3xOixQLk32r8f_PkxocBj_6De/view?usp=sharing",
                  "_blank",
                )
              }
            >
              {content.buttons.primary.title}
            </button>
            <button
              className={`button ${button.secondary} leaveSite`}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/d-abhinav-vardhan-b9516a226/",
                  "_blank",
                )
              }
            >
              {content.buttons.secondary.title}
            </button>
          </m.section>

          <m.ul variants={item} className={hero.stats}>
            {stats.map(({ value, label }) => (
              <li key={label} className={hero.stat}>
                <span className={hero.statValue}>{value}</span>
                <span className={hero.statLabel}>{label}</span>
              </li>
            ))}
          </m.ul>
        </m.div>
      </Container>

      <HeroBg theme="bg-color-1" />
    </Section>
  );
}
