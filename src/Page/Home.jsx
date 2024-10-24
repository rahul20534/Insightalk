import styled from "styled-components"


//components
import Hero from '../components/Hero/Hero'
import Slogan from '../components/Slogan/Slogan'
import About from "../components/About"
import Work from '../components/Work/Work'
import Team from "../components/Team"
import Testimonials from "../components/Testimonial/Testimonials"
import Blog from "../components/Blog"
import Faq from "../components/Faq"
import Extra from "../components/Extra"
import Booking from '../components/Booking/Booking'
import Footer from "../components/Footer"


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`




const Home = () => {
  return (
    <Container>
      <Hero />
      <Slogan />
      <About />
      <Team />
      <Work/>
      <Testimonials />
      <Blog />
      <Faq />
      <Booking/>
      <Extra />
      <Footer/>
    </Container>
  )
}

export default Home