import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Section from "../../structure/section";
import Container from "../../structure/container";
import SectionTitle from "../../blocks/section.title.block";

import css from "../../../styles/sections/index/publications.module.scss";

const publications = [
  {
    title: "Futuristic Trends in IoT",
    type: "Book Chapter",
    role: "Co-author",
    badge: "Peer-reviewed",
    isbn: "978-93-95632-69-0",
    description:
      "Co-authored a peer-reviewed publication exploring emerging directions in the Internet of Things — architectures, real-world applications, and where the technology is heading next.",
    url: "",
  },
];

function PublicationCard({ pub, index }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      },
    },
  };

  const Wrapper = pub.url ? "a" : "div";
  const wrapperProps = pub.url
    ? { href: pub.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <m.div ref={ref} variants={variants} initial="hidden" animate={controls}>
      <Wrapper className={css.card} {...wrapperProps}>
        <div className={css.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M4 5.5V20.5A2.5 2.5 0 0 0 6.5 23H20"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M8 8h8M8 11h6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={css.content}>
          <div className={css.metaRow}>
            <span className={css.badge}>{pub.badge}</span>
            <span className={css.type}>{pub.type}</span>
            <span className={css.role}>{pub.role}</span>
          </div>

          <h3 className={css.title}>{pub.title}</h3>
          <p className={css.description}>{pub.description}</p>

          <div className={css.footer}>
            <span className={css.isbn}>
              ISBN <strong>{pub.isbn}</strong>
            </span>
            {pub.url ? (
              <span className={css.view}>
                Read publication <span aria-hidden="true">&#8599;</span>
              </span>
            ) : null}
          </div>
        </div>
      </Wrapper>
    </m.div>
  );
}

/**
 * Section: Publications
 * Highlights peer-reviewed research / authored work.
 *
 * @returns {jsx} <Publications />
 */
export default function Publications() {
  return (
    <Section classProp={`${css.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Publications"
          preTitle="Research"
          subTitle="Peer-reviewed work and contributions to the field."
        />
        <div className={css.list}>
          {publications.map((pub, index) => (
            <PublicationCard key={pub.isbn} pub={pub} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
