import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import About from "../components/sections/index/about";
import Experience from "../components/sections/index/experience";
import GetToKnowMe from "../components/sections/index/get-to-know-me";
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
      <About />
      <Experience />
      <GetToKnowMe />
    </>
  );
}
