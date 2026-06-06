import Link from "next/link";
import Image from "next/image";
import css from "../../../styles/sections/index/get-to-know-me.module.scss";

export default function GetToKnowMe() {
  return (
    <section className={css.section}>
      <div className={css.inner}>
        <h2 className={css.heading}>Get to know me</h2>

        <div className={css.grid}>
          {/* About me */}
          <Link href="/#about">
            <div className={`${css.card} ${css.cardAbout}`}>
              <div className={css.cardText}>
                <span className={css.cardTitle}>About me</span>
                <span className={css.cardSub}>Who I am and what I do</span>
              </div>
              <div className={css.cardMedia}>
                <img
                  src="/img/memoji.png"
                  alt="Abhinav memoji"
                  className={css.memoji}
                />
              </div>
            </div>
          </Link>

          {/* Open Source */}
          <Link
            href="https://github.com/abhi-vardhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${css.card} ${css.cardOss}`}>
              <div className={css.cardText}>
                <span className={css.cardTitle}>Open Source</span>
                <span className={css.cardSub}>
                  Code I&apos;ve shipped publicly
                </span>
              </div>
              <div className={css.cardMedia}>
                <div className={css.terminalBox}>
                  <span className={css.terminalBar}>
                    <span />
                    <span />
                    <span />
                  </span>
                  <pre className={css.terminalCode}>{`$ git push origin main
✓ 3 commits ahead
★ 12 repos public`}</pre>
                </div>
              </div>
            </div>
          </Link>

          {/* Projects */}
          <Link href="/projects">
            <div className={`${css.card} ${css.cardProjects}`}>
              <div className={css.cardText}>
                <span className={css.cardTitle}>Projects</span>
                <span className={css.cardSub}>
                  Things I&apos;ve designed and built
                </span>
              </div>
              <div className={css.cardMedia}>
                <div className={css.projectsList}>
                  {["AutoETH", "Cymatic", "AI Buddy", "Open OS"].map((p) => (
                    <span key={p} className={css.projectPill}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Tech Stack */}
          <Link href="/tech-stack">
            <div className={`${css.card} ${css.cardTech}`}>
              <div className={css.cardText}>
                <span className={css.cardTitle}>Tech Stack</span>
                <span className={css.cardSub}>
                  The tools I build with every day
                </span>
              </div>
              <div className={css.cardMedia}>
                <div className={css.iconGrid}>
                  {[
                    { icon: "devicon-typescript-plain colored", bg: "#3178c6" },
                    { icon: "devicon-react-original colored", bg: "#222" },
                    { icon: "devicon-nodejs-plain colored", bg: "#215732" },
                    { icon: "devicon-docker-plain colored", bg: "#0db7ed" },
                    { icon: "devicon-python-plain colored", bg: "#1e3a5f" },
                    { icon: "devicon-postgresql-plain colored", bg: "#336791" },
                  ].map(({ icon, bg }, i) => (
                    <span
                      key={i}
                      className={css.iconTile}
                      style={{ background: bg }}
                    >
                      <i className={icon} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
