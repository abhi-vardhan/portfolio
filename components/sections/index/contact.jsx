import Link from "next/link";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Section from "../../structure/section";
import Container from "../../structure/container";

import settings from "../../../content/_settings.json";
import css from "../../../styles/sections/index/contact.module.scss";

export default function Contact() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <Section classProp="borderBottom">
      <Container spacing={["verticalXXXLrg"]}>
        <m.div
          ref={ref}
          className={css.wrapper}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <span className={css.pre}>Get in touch</span>
          <h2 className={css.heading}>Let&apos;s build something together.</h2>
          <p className={css.sub}>
            Whether it&apos;s a backend system, a smart contract, or just a good
            conversation about tech — my inbox is always open.
          </p>
          <div className={css.actions}>
            <a href={`mailto:${settings.email}`} className={css.btnPrimary}>
              Say hello ↗
            </a>
            <a
              href={`https://linkedin.com/in/${settings.username.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={css.btnGhost}
            >
              LinkedIn ↗
            </a>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
