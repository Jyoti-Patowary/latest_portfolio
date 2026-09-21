import Nav from "./nav";
import Hero_section from "./hero_section";
import Stacks from "./stacks";
import Work from "./work";
import About from "./about";
import HowIWork from "./howIWork";
import Skills from "./skills";
import Blogs from "./blogs";
import Footer from "./footer";

function Main_Page() {
  return (
    <main>
      <Nav />
      <Hero_section />
      <Stacks />
      <Work />
      <About />
      <HowIWork />
      <Skills />
      <Blogs />
      <Footer />
    </main>
  );
}

export default Main_Page;
