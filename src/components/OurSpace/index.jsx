import Banner from "../Banner/Banner";
import Section from "../Section/Section";
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Map from '../Map/Map.jsx';
import './index.css';

const OurSpace = () => {
    return(
        <>
            <Header />
            <main>
                <h2 className="header">Our Space</h2>
                <Map />
                <Banner title={"The Track"} image={"/background2.svg"} />
                <Section 
                    link={"track-id"}
                    description={"Get ready to unleash your inner racer on Pursuit OCR’s epic drift tricycle track — a wild, pedal-powered ride that feels straight out of Mario Kart! This massive indoor course stretches the length of three football fields, winding and twisting beneath the obstacle course above. You’ll be drifting around corners, racing your friends, and laughing nonstop as you battle for bragging rights. It’s fast, chaotic, and totally unforgettable — the ultimate grown-up playground experience."} 
                    points={["Drift around corners like a pro no license required!","Battle your friends for the ultimate bragging rights!", "Feels like real-life Mario Kart minus the banana peels!"]}
                    image={"/theTrack_image.svg"}
                />
                <Banner title={"The Ball Pit"} image={"/Background.svg"}/>
                <Section 
                    link={"ball-id"}
                    description={"The ball pit at Pursuit OCR is no ordinary playground feature — it’s a massive, four-and-a-half-foot-deep sea of over 100,000 balls that feels more like an endurance challenge than a casual dip. The moment you jump in, you’re swallowed by colourful chaos, struggling to stay afloat as you push through the shifting layers. Now, with dynamic projection-mapped targets floating across the walls, the challenge gets even wilder. Visitors can aim and “shoot” at the moving targets from inside the pit, turning the struggle to stay upright into a full-on interactive game. It’s fun, frantic, and just the right amount of disorienting — and getting out is still the hardest part."}
                    points={["You might lose your shoes, but you’ll gain an epic story", "A hilarious mix of aiming, sinking, and scrambling", "Interactive targets transform the pit into a chaotic (and unforgettable) workout"]}
                    image={"/ballPit_image.svg"}
                />
                <Banner title={"The Cove Wall"} image={"/ourSpace_banner.svg"} />
                <Section 
                    link={"lava-id"}
                    description={"The Floor Is Lava at Pursuit OCR turns the ground beneath your feet into a glowing, ever-shifting adventure. With fiery lava flowing across the floor and stone “islands” projected in real time, it feels like stepping into a living video game. The challenge is simple—but far from easy: hop from rock to rock as the path lights up, guiding you across the space while keeping you safely above the “lava.” Each jump tests your balance, timing, and courage, all while the vibrant projection mapping pulls you deeper into the illusion. "}
                    points={["Immersive projection mapping makes the whole floor come alive", "A playful test of balance, agility, and quick decision-making", "Perfect for energetic visitors—and a must-capture moment for your camera"]}
                    image={"/floorLava_image.svg"}
                />
                {/* <Banner title={"The Axe Throw"} image={"/ourSpace_banner.svg"} />
                <Section 
                    link={"axe"}
                    description={"An evening of axe throwing is surprisingly thrilling and full of energy. What might seem like a simple game quickly turns into a night of skill, strategy, and friendly competition. Every throw teaches participants something new—how to perfect their aim, adjust their grip, and find the rhythm of the game. With a variety of interactive games keeping everyone engaged, the experience is a mix of laughter, focus, and just the right amount of challenge. It’s hands-on fun that keeps players on their toes and leaves them eager for one more throw."}
                    points={["Test your aim and unleash your inner lumberjack", "Friendly competition that keeps everyone laughing", "Every throw feels like a mini victory"]}
                    image={"/axeThrow_image.svg"}
                />
                <Banner title={"Tag Zone"} image={"/ourSpace_banner.svg"} />
                <Section
                    link={"tag"}
                    description={"An evening at The Tag Zone is an adrenaline-fueled adventure that blends excitement, strategy, and teamwork. What starts as a simple mission quickly turns into a pulse-pounding battle of wits and reflexes. Every match challenges players to think fast—navigating the arena, planning sneak attacks, and adapting to ever-changing scenarios. With lights flashing, music pumping, and friendly rivalries firing up, the atmosphere is electric. It’s an immersive, action-packed experience that keeps everyone moving, laughing, and wanting just one more round."}
                    points={["Step into the arena and put your reflexes to the test", "Team strategy meets heart-racing fun", "Every hit feels like a victory, every match a new challenge"]}
                    image={"theZone_image.svg"}
                /> */}
            </main>
            <Footer />
        </>
        
    );
}

export default OurSpace;