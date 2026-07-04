// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Specing util
import Spacing from "../../utils/spacing.util";

// Section general blocks
import SectionGridBg from "../../blocks/section.grid.block";
import SectionTitle from "../../blocks/section.title.block";

// Section scss
import looking from "../../../styles/sections/index/looking.module.scss";
import section from "../../../styles/blocks/section.title.module.scss";

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 *
 * @returns {jsx} <Looking />
 */
export default function Looking() {
  return (
    <Section classProp={`${looking.section} borderBottom`}>
      <Container
        classProp={`${section.title} ${looking.container}`}
        spacing={["verticalXXXLrg"]}
      >
        <h4 data-reveal>I&apos;m currently open to new opportunities.</h4>
        <h2 className={looking.json} data-reveal data-reveal-delay="1">
          &#123;
        </h2>
        <h2 className={looking.jsonSub} data-reveal data-reveal-delay="1">
          <span className={looking.highlight}>Backend Engineer</span>,
        </h2>
        <h2 className={looking.jsonSub} data-reveal data-reveal-delay="2">
          <span className={looking.highlight2}>Cloud Architect</span>,
        </h2>
        <h2 className={looking.jsonSub} data-reveal data-reveal-delay="3">
          <span className={looking.highlight}>Full-Stack Developer</span>
        </h2>
        <h2 className={looking.json} data-reveal data-reveal-delay="3">
          &#125;
        </h2>
        <h4 data-reveal data-reveal-delay="4">
          I&apos;m seeking roles where I can architect robust APIs, streamline
          deployments, and build scalable platforms that drive high-impact
          products.
        </h4>
        {/* <h2>Senior <span className={looking.highlight}>User Experience</span> Designer</h2> */}
        {/* <p className="subtitle">with a focus on Product Design.</p> */}
      </Container>
    </Section>
  );
}
