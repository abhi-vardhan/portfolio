// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * Editorial layout — headline, labeled blocks, sidebar with photo + CTA.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <div className={about.headline}>
          <h2>A little bit about me</h2>
          <p className={about.headlineSub}>Who I am and what I do.</p>
        </div>

        <section className={about.content}>
          {/* Left: text blocks */}
          <div className={about.copy}>
            <div className={about.block}>
              <span className={about.label}>WHO I AM</span>
              <p>
                I&apos;m <strong>Abhinav Vardhan</strong>, a backend and cloud
                engineer based in Hyderabad, India. I love building the systems
                that quietly power great products — reliable, scalable, and
                clean.
              </p>
            </div>

            <div className={about.block}>
              <span className={about.label}>WHAT I DO</span>
              <p>
                I specialise in backend systems, cloud-native infrastructure,
                and developer tooling. From designing RESTful APIs and
                microservices to automating CI/CD pipelines and deploying on AWS
                — I care deeply about performance, reliability, and clean
                architecture.
              </p>
            </div>

            <div className={about.block}>
              <span className={about.label}>WHAT I&apos;VE BUILT</span>
              <p>
                I&apos;ve shipped a production mobile platform serving 2,000+
                active users at Pravachan, led a 400-person engineering club,
                and built award-winning Web3 projects at ETHGlobal hackathons.
                Every project is a chance to solve a hard problem well.
              </p>
            </div>

            <p className={about.closing}>
              Feel free to reach out via{" "}
              <a href="mailto:abhinavvardhan2004@gmail.com">e&#8209;mail</a>, or
              connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/d-abhinav-vardhan-b9516a226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              . Want to see my work? Check out my{" "}
              <a
                href="https://drive.google.com/file/d/1oH-e-gb3xOixQLk32r8f_PkxocBj_6De/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              .
            </p>

            <div className={about.signOff}>
              <p>Let&apos;s build something great,</p>
              <span className={about.signature}>Abhinav Vardhan</span>
            </div>
          </div>

          {/* Right: photo + CTA */}
          <div className={about.sidebar}>
            <div className={about.image}>
              <img src="/img/profile_bg.jpg" alt="Abhinav Vardhan" />
            </div>
            <a
              href="mailto:abhinavvardhan2004@gmail.com"
              className={about.contactBtn}
            >
              <span>&#9654;</span> Get in touch
            </a>
          </div>
        </section>
      </Container>
    </Section>
  );
}
