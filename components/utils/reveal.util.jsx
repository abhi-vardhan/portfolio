import { Children, cloneElement, isValidElement } from "react";

/**
 * Reveal
 *
 * Lightweight scroll-reveal wrapper. Tags children with the global
 * [data-reveal] attribute which the SiteFX IntersectionObserver picks
 * up to animate elements into view. Falls back gracefully (visible) when
 * JS or IntersectionObserver is unavailable.
 *
 * @param {jsx}     children  Element(s) to reveal on scroll
 * @param {number}  delay     Stagger step 0–4 (maps to CSS delay buckets)
 * @param {boolean} stagger   When true, auto-staggers each direct child
 * @param {string}  as        Wrapper element tag (default: div)
 * @param {string}  className Extra classes for the wrapper
 * @returns {jsx} <Reveal />
 */
export default function Reveal({
  children,
  delay = 0,
  stagger = false,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  if (stagger) {
    return (
      <Tag className={className} {...rest}>
        {Children.map(children, (child, i) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child, {
            "data-reveal": "",
            "data-reveal-delay": String(Math.min(i, 4)),
          });
        })}
      </Tag>
    );
  }

  return (
    <Tag
      className={className}
      data-reveal=""
      data-reveal-delay={delay ? String(Math.min(delay, 4)) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
