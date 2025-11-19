import './Home.css'
import Banner from '../Banner/Banner.jsx'
import Hero from '../Hero/Hero.jsx'
import Form from '../Form/Form.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <section id='home1'>
        <h2>Book Your Visit!</h2>
        <p>Want to come play? Book your session time with us now!</p>
        <button>BOOK NOW</button>
      </section>
      <Banner image={"/background2.svg"} />
      <section id='home2'>
        <h2>Corporate Wellness and Team Building</h2>
        <p>Looking to bring your workplace or team to Pursuit? We have 30,000 square feet of amazing team building obstacles and activities! We’ll help you plan your trip and our team leaders will make sure everyone in your group has the best time ever!</p>
        <button>START PLANNING YOUR TRIP</button>
      </section>
      <Banner image={"/Background.svg"}/>
      <section id='home3'>
        <h2>The Zones</h2>
        <p>Pursuit OCR has a lot to offer! Wanna dive into the biggest ball pit in Canada? Race against your friends Mario Cart style? We’ve got it all! Check out our Zones and plan your visit for maximum fun!</p>
        <button>Our Space</button>
      </section>
      <Banner image={"/Background_banner.svg"}/>
      <Form />
    </> 
  )
}

export default Home
