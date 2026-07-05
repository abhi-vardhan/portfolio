import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Section from "../../structure/section";
import Container from "../../structure/container";
import SectionTitle from "../../blocks/section.title.block";

import css from "../../../styles/sections/index/hackathons.module.scss";
import data from "../../../content/hackathons.json";

function TimelineItem({ hack, index }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const resultClass =
    css[`result_${hack.result.toLowerCase().replace(/[\s/]+/g, "_")}`] ||
    css.result_submitted;

  return (
    <m.div
      ref={ref}
      className={css.item}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.1,
          },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      <div className={css.track}>
        <span className={`${css.dot} ${resultClass}`} />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <div className={css.headerLeft}>
            {hack.eventUrl ? (
              <a
                href={hack.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={css.eventLink}
              >
                {hack.event}
              </a>
            ) : (
              <span className={css.event}>{hack.event}</span>
            )}
            <h3 className={css.name}>{hack.name}</h3>
          </div>
          <div className={css.headerRight}>
            <span className={`${css.badge} ${resultClass}`}>{hack.result}</span>
            <span className={css.meta}>
              {hack.date} · {hack.location}
            </span>
          </div>
        </div>

        <p className={css.tagline}>{hack.tagline}</p>

        <div className={css.footer}>
          <div className={css.stack}>
            {hack.stack.map((s) => (
              <span key={s} className={css.tag}>
                {s}
              </span>
            ))}
          </div>
          <div className={css.links}>
            {hack.links.project && (
              <a
                href={hack.links.project}
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                Live ↗
              </a>
            )}
            {hack.links.github && (
              <a
                href={hack.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${css.link} ${css.linkGhost}`}
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default function Hackathons() {
  return (
    <Section classProp={`${css.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Hackathons"
          preTitle="Building under pressure"
          copy="Events where I've shipped real products in days."
        />
        <div className={css.timeline}>
          {data.map((hack, i) => (
            <TimelineItem key={hack.name} hack={hack} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
