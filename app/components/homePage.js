import Nav from "./nav";
import Hero_section from "./hero_section";
import Stacks from "./stacks";
import About from "./about";
import Skills from "./skills";
import Work from "./work";
import ProcessPage from "./process";
import Blogs from "./blogs";
import Footer from "./footer";

function Main_Page() {
  return (
    <main>
      <Nav />
      <Hero_section />
      <Stacks />
      <About />
      <Skills />
      <Work />
      <ProcessPage />
      <Blogs />
      <Footer />
    </main>
  );
}

export default Main_Page;

