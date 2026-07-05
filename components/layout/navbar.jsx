import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeMode from "../utils/theme.util";

import settings from "../../content/_settings.json";
import css from "../../styles/structure/navbar.module.scss";

const navLinks = [
  { href: "/", icon: "fas fa-house", label: "Home" },
  { href: "/projects", icon: "fas fa-code", label: "Projects" },
];

const socialLinks = [
  {
    href: `https://github.com/${settings.username.github}`,
    icon: "fab fa-github",
    label: "GitHub",
    external: true,
  },
  {
    href: `https://linkedin.com/in/${settings.username.linkedin}`,
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://x.com/Abhinav_2203",
    icon: "fab fa-x-twitter",
    label: "X / Twitter",
    external: true,
  },
];

export default function Navbar() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState(null);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const isActive = (href) =>
    href === "/" ? router.asPath === "/" : router.asPath.startsWith(href);

  const DockItem = ({ href, icon, label, external }) => {
    const active = !external && isActive(href);
    const inner = (
      <span
        className={`${css.dockItem} ${active ? css.dockActive : ""}`}
        onMouseEnter={() => setTooltip(label)}
        onMouseLeave={() => setTooltip(null)}
      >
        <i className={icon} />
        {tooltip === label && <span className={css.tooltip}>{label}</span>}
      </span>
    );

    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href}>
        <a>{inner}</a>
      </Link>
    );
  };

  return (
    <nav
      className={`${css.dock} ${visible ? css.dockVisible : css.dockHidden}`}
      aria-label="Site navigation"
    >
      <div className={css.dockPill}>
        {navLinks.map((l) => (
          <DockItem key={l.href} {...l} />
        ))}
        <span className={css.dockDivider} />
        {socialLinks.map((l) => (
          <DockItem key={l.href} {...l} external />
        ))}
        <span className={css.dockDivider} />
        <span className={css.dockItem}>
          <ThemeMode />
        </span>
      </div>
    </nav>
  );
}
