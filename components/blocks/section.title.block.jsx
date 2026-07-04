import Container from "../structure/container";

// Section scss
import section from "../../styles/blocks/section.title.module.scss";

/**
 * Section header component
 *
 * @param {string} * strings for header
 * @returns
 */
export default function SectionTitle({ preTitle, title, subTitle }) {
  return (
    <>
      <div className={`${section.title}`}>
        <h4 data-reveal>{preTitle}</h4>
        <h2 data-reveal data-reveal-delay="1">
          {title}
        </h2>
        <p className="subtitle" data-reveal data-reveal-delay="2">
          {subTitle}
        </p>
      </div>
    </>
  );
}
