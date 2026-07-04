import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Section from "../../components/structure/section";
import Container from "../../components/structure/container";
import Badges from "../../components/utils/badge.list.util";
import Color from "../../components/utils/page.colors.util";

import projects from "../../content/projects/featured.json";
import colors from "../../content/projects/_colors.json";

import css from "../../styles/sections/projects/detail.module.scss";

/**
 * Project detail page — /projects/<slug>
 *
 * Renders an in-depth view of a single featured project: overview,
 * highlights, feature breakdown, tech stack and links. GitHub link is
 * shown only when present and not explicitly hidden via links.hideGithub.
 *
 * @param {object} project The matched project record from featured.json
 * @returns {jsx} <ProjectDetail />
 */
export default function ProjectDetail({ project }) {
  const {
    project: name,
    emoji,
    descriptionTitle,
    tagline,
    overview,
    year,
    role,
    status,
    highlights = [],
    features = [],
    stack = [],
    links = {},
    images = [],
  } = project;

  const showGithub = links.github && !links.hideGithub;
  const showLive = !!links.live;
  const cover = images && images.length ? images[0] : null;

  return (
    <>
      <Head>
        <title>{`${name} — Project · Abhinav Vardhan`}</title>
        <meta name="description" content={tagline || descriptionTitle} />
      </Head>

      <Color colors={colors} />

      {/* ── Hero ─────────────────────────────── */}
      <Section classProp={`${css.hero} borderBottom`}>
        <Container spacing={["verticalXXXLrg"]}>
          <Link href="/projects">
            <a className={css.back}>
              <span aria-hidden="true">&#8592;</span> All projects
            </a>
          </Link>

          <div className={css.heroMeta} data-reveal>
            <span className={css.appIcon}>{emoji || name.charAt(0)}</span>
            {status ? <span className={css.statusPill}>{status}</span> : null}
            {role ? <span className={css.metaItem}>{role}</span> : null}
            {year ? <span className={css.metaItem}>{year}</span> : null}
          </div>

          <h1 className={css.title} data-reveal data-reveal-delay="1">
            {name}
          </h1>
          <p className={css.tagline} data-reveal data-reveal-delay="2">
            {tagline || descriptionTitle}
          </p>

          <div className={css.heroLinks} data-reveal data-reveal-delay="3">
            {showLive ? (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${css.btn} ${css.btnPrimary}`}
              >
                <i className="devicon-googlechrome-plain" /> Live demo
                <span className={css.arrowUp}>&#8599;</span>
              </a>
            ) : null}
            {showGithub ? (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${css.btn} ${css.btnGhost}`}
              >
                <i className="devicon-github-original" /> View source
                <span className={css.arrowUp}>&#8599;</span>
              </a>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* ── Cover image ──────────────────────── */}
      {cover ? (
        <Section classProp={`${css.coverSection} borderBottom`}>
          <Container spacing={["verticalXLrg"]}>
            <div className={css.cover} data-reveal>
              <Image
                src={cover.url}
                alt={`${name} preview`}
                width={Number(cover.w) || 1456}
                height={Number(cover.h) || 1000}
              />
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ── Body ─────────────────────────────── */}
      <Section classProp={`${css.body} borderBottom`}>
        <Container spacing={["verticalXXXLrg"]}>
          <div className={css.grid}>
            {/* Main column */}
            <div className={css.main}>
              <section className={css.block} data-reveal>
                <h2 className={css.blockTitle}>Overview</h2>
                <p className={css.lead}>{overview}</p>
              </section>

              {features.length ? (
                <section className={css.block} data-reveal>
                  <h2 className={css.blockTitle}>What it does</h2>
                  <ul className={css.features}>
                    {features.map((f, i) => (
                      <li key={i}>
                        <span className={css.featureDot} aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            {/* Sidebar */}
            <aside className={css.sidebar}>
              {highlights.length ? (
                <div className={css.sideCard} data-reveal>
                  <h3 className={css.sideTitle}>Highlights</h3>
                  <div className={css.highlights}>
                    {highlights.map(({ value, label }, i) => (
                      <div key={i} className={css.highlight}>
                        <span className={css.highlightValue}>{value}</span>
                        <span className={css.highlightLabel}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className={css.sideCard} data-reveal data-reveal-delay="1">
                <h3 className={css.sideTitle}>Built with</h3>
                <div className={css.stack}>
                  <Badges
                    list={stack}
                    block="stack"
                    fullContainer={false}
                    color={false}
                  />
                </div>
              </div>

              {showGithub || showLive ? (
                <div className={css.sideCard} data-reveal data-reveal-delay="2">
                  <h3 className={css.sideTitle}>Links</h3>
                  <div className={css.sideLinks}>
                    {showLive ? (
                      <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo <span>&#8599;</span>
                      </a>
                    ) : null}
                    {showGithub ? (
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code <span>&#8599;</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>

          <Link href="/projects">
            <a className={css.backBottom}>
              <span aria-hidden="true">&#8592;</span> Back to all projects
            </a>
          </Link>
        </Container>
      </Section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects
      .filter((p) => p.slug)
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null;

  if (!project) return { notFound: true };

  return { props: { project } };
}
