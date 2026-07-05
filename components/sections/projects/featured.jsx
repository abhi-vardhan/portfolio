import Link from "next/link";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Section from "../../structure/section";
import Container from "../../structure/container";
import SectionTitle from "../../blocks/section.title.block";

import css from "../../../styles/sections/projects/featured.module.scss";
import content from "../../../content/projects/featured.json";

function ProjectCard({ project, index }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const {
    project: name,
    slug,
    emoji,
    tagline,
    description,
    status,
    year,
    role,
    stack,
    image,
  } = project;

  return (
    <m.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.07,
          },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      <Link href={`/projects/${slug}`}>
        <a className={css.card}>
          {image && (
            <div className={css.cardImg}>
              <img src={image} alt={name} loading="lazy" />
            </div>
          )}
          <div className={css.cardBody}>
            <div className={css.cardHead}>
              <span className={css.emoji}>{emoji}</span>
              <div className={css.cardMeta}>
                {status && <span className={css.status}>{status}</span>}
                {year && <span className={css.year}>{year}</span>}
              </div>
            </div>
            <h3 className={css.cardName}>{name}</h3>
            <p className={css.cardTagline}>{tagline || description}</p>
            <div className={css.cardStack}>
              {stack.slice(0, 4).map(({ name: sn }) => (
                <span key={sn} className={css.stackTag}>
                  {sn}
                </span>
              ))}
              {stack.length > 4 && (
                <span className={css.stackTag}>+{stack.length - 4}</span>
              )}
            </div>
            <span className={css.cardArrow}>View project &#8594;</span>
          </div>
        </a>
      </Link>
    </m.div>
  );
}

export default function FeaturedProjects() {
  return (
    <Section classProp={`${css.section} borderBottom`}>
      <Container spacing={"verticalXXXXLrg"}>
        <SectionTitle
          title="Projects"
          preTitle="What I've built"
          subTitle="A selection of things I've designed and shipped."
        />
        <div className={css.grid}>
          {content.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
