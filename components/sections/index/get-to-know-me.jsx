import Link from "next/link";
import Image from "next/image";
import css from "../../../styles/sections/index/get-to-know-me.module.scss";

export default function GetToKnowMe() {
  return (
    <section className={css.section}>
      <div className={css.inner}>
        <h2 className={css.heading} data-reveal>
          Get to know me
        </h2>

        <div className={css.grid}>
          {/* About me */}
          <Link href="/#about">
            <div
              className={`${css.card} ${css.cardAbout}`}
              data-reveal
              data-reveal-delay="1"
            >
              <div className={css.cardText}>
                <span className={css.cardTitle}>About me</span>
                <span className={css.cardSub}>Who I am and what I do</span>
              </div>
              <div className={css.cardMedia}>
                <img
                  src="/img/profile.jpg"
                  alt="Abhinav Vardhan"
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
            <div
              className={`${css.card} ${css.cardOss}`}
              data-reveal
              data-reveal-delay="2"
            >
              <div className={css.cardText}>
                <span className={css.cardTitle}>Open Source</span>
                <span className={css.cardSub}>
                  Code I&apos;ve shipped publicly
                </span>
              </div>
              <div className={css.cardMedia}>
                <div className={css.emojiStack}>
                  <span>🐙</span>
                  <span>📦</span>
                  <span>🔧</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Projects */}
          <Link href="/projects">
            <div
              className={`${css.card} ${css.cardProjects}`}
              data-reveal
              data-reveal-delay="3"
            >
              <div className={css.cardText}>
                <span className={css.cardTitle}>Projects</span>
                <span className={css.cardSub}>
                  Things I&apos;ve designed and built
                </span>
              </div>
              <div className={css.cardMedia}>
                <div className={css.projectsStack}>
                  {[
                    {
                      name: "AutoETH",
                      desc: "Let blockchain build itself",
                      emoji: "⧠",
                      grad: "linear-gradient(135deg,#7c3aed,#a78bfa)",
                    },
                    {
                      name: "Cymatic",
                      desc: "Voice-first on-chain identity",
                      emoji: "🎙️",
                      grad: "linear-gradient(135deg,#f59e0b,#fcd34d)",
                    },
                    {
                      name: "AI Buddy",
                      desc: "Personalised learning",
                      emoji: "🤖",
                      grad: "linear-gradient(135deg,#0ea5e9,#5f8cff)",
                    },
                  ].map(({ name, desc, emoji, grad }) => (
                    <div key={name} className={css.projectRow}>
                      <span
                        className={css.projectIcon}
                        style={{ background: grad }}
                      >
                        {emoji}
                      </span>
                      <span className={css.projectInfo}>
                        <span className={css.projectName}>{name}</span>
                        <span className={css.projectDesc}>{desc}</span>
                      </span>
                      <span className={css.projectArrow}>&#8594;</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Tech Stack */}
          <Link href="/tech-stack">
            <div
              className={`${css.card} ${css.cardTech}`}
              data-reveal
              data-reveal-delay="4"
            >
              <div className={css.cardText}>
                <span className={css.cardTitle}>Tech Stack</span>
                <span className={css.cardSub}>
                  The tools I build with every day
                </span>
              </div>
              <div className={css.cardMedia}>
                <div className={css.emojiIconGrid}>
                  {[
                    { e: "🟦", n: "TypeScript" },
                    { e: "🟨", n: "JavaScript" },
                    { e: "🐍", n: "Python" },
                    { e: "☕", n: "Java" },
                    { e: "⚛️", n: "React" },
                    { e: "▲", n: "Next.js" },
                    { e: "🟩", n: "Node.js" },
                    { e: "⚡", n: "FastAPI" },
                    { e: "🐘", n: "PostgreSQL" },
                    { e: "🍃", n: "MongoDB" },
                    { e: "🐳", n: "Docker" },
                    { e: "☁️", n: "AWS" },
                  ].map(({ e, n }) => (
                    <span key={n} className={css.emojiBubble} title={n}>
                      {e}
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
