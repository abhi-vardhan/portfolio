import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import About from "../components/sections/index/about";
import Experience from "../components/sections/index/experience";
import Hackathons from "../components/sections/index/hackathons";
import Publications from "../components/sections/index/publications";
import Contact from "../components/sections/index/contact";
import FeaturedProjects from "../components/sections/projects/featured";

import Color from "../components/utils/page.colors.util";

import colors from "../content/index/_colors.json";

//
export default function HomePage() {
  return (
    <>
      <Color colors={colors} />
      <Hero />
      <Looking />
      <FeaturedProjects />
      <Experience />
      <Hackathons />
      <Publications />
      <About />
      <Contact />
    </>
  );
}
