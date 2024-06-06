
import About from '../components/about'
import Blogs from '../components/blogs'
// import { Connect } from '../components/connect'
import Footer from '../components/footer'
import Hero_section from '../components/hero_section'
import Nav from '../components/nav'
import ProcessPage from '../components/process'
import Skills from '../components/skills'
import { Stacks } from '../components/stacks'
import Work from '../components/work'


function Main_Page() {
  return (
    <div>
      <Nav/>
      <Hero_section/>
      <About/>
      <Skills/>
      {/* <Stacks/> */}
      <Work/>
      {/* <ProcessPage/> */}
      {/* <Blogs/> */}
      {/* <Connect/> */}
      <Footer/>
    </div>
  )
}

export default Main_Page