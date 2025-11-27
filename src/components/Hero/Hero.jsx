import './hero.css'

const Hero = () => {
    return(
        <section id="hero-container">
            <img id='hero-image' src="/Hero_background.svg" alt="" />

            <div id="hero-content">
                <h1 id="heading">30,000 SQFT</h1>
                <p id="text">OF AWESOME</p>
                <button id="submitBtn">BOOK NOW</button>
            </div>
        </section>
    );
}

export default Hero;