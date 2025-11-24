import Banner from "../Banner/Banner";
import Section from "../Section/Section";

const OurSpace = () => {
    return(
        <main>
            <h2>Our Space</h2>
            <Banner title={"The Track"} image={"/background2.svg"} />
            <Section 
                description={"Get ready to unleash your inner racer on Pursuit OCR’s epic drift tricycle track — a wild, pedal-powered ride that feels straight out of Mario Kart! This massive indoor course stretches the length of three football fields, winding and twisting beneath the obstacle course above. You’ll be drifting around corners, racing your friends, and laughing nonstop as you battle for bragging rights. It’s fast, chaotic, and totally unforgettable — the ultimate grown-up playground experience."} 
                points={["Drift around corners like a pro no license required!","Battle your friends for the ultimate bragging rights!", "Feels like real-life Mario Kart minus the banana peels!"]}
                image={"/theTrack_image.svg"}
            />
            <Banner title={"The Ball Pit"} image={"/Background.svg"}/>
            <Section 
                description={"The ball pit at OCR Pursuit is no ordinary playground feature — it’s a massive, four-and-a-half-foot-deep sea of over 100,000 balls that feels more like an endurance challenge than a casual dip. The moment you jump in, you’re swallowed up by the colourful chaos, struggling to stay afloat as you wade through the endless layers. It’s fun, disorienting, and just a little terrifying — especially when you realize how hard it is to get out. Definitely worth trying once, but keep your phone (and maybe your shoes) far away unless you want to lose them to the depths forever."}
                points={["You might lose your shoes, but you’ll gain an unforgettable story!", "Feels like swimming and sinking at the same time!", "A hilarious full-body workout you never saw coming!"]}
                image={"/ballPit_image.svg"}
             />
            <Banner title={"The Cove Wall"} image={"/ourSpace_banner.svg"} />
            <Section 
                description={"The Cove Wall at Pursuit OCR is a thrilling challenge that feels straight out of an action movie. With its towering curved ramp and glowing neon cubes floating overhead, it’s designed to test your speed, strength, and determination. You’ll feel the rush as you sprint toward the wall, push off, and try to reach the top a perfect mix of athleticism and adrenaline. The vibrant lights and bold design make it not only an exciting obstacle to conquer but also a spot that practically begs for a victory photo once you’ve made it to the top."}
                points={["Neon lights and cube art make it feel like you’ve stepped into a sci-fi adventure", "Whether you conquer it on the first try or the fifth, you’ll leave grinning—and maybe a little breathless.", "Great for grip, balance, and courage (and an epic photo opportunity!)"]}
                image={"/theCove_image.svg"}
            />
            <Banner title={"The Axe Throw"} image={"/ourSpace_banner.svg"} />
            <Section 
                description={"An evening of axe throwing is surprisingly thrilling and full of energy. What might seem like a simple game quickly turns into a night of skill, strategy, and friendly competition. Every throw teaches participants something new—how to perfect their aim, adjust their grip, and find the rhythm of the game. With a variety of interactive games keeping everyone engaged, the experience is a mix of laughter, focus, and just the right amount of challenge. It’s hands-on fun that keeps players on their toes and leaves them eager for one more throw."}
                points={["Test your aim and unleash your inner lumberjack", "Friendly competition that keeps everyone laughing", "Every throw feels like a mini victory"]}
                image={"/axeThrow_image.svg"}
            />
            <Banner title={"Tag Zone"} image={"/ourSpace_banner.svg"} />
            <Section
                description={"An evening at The Tag Zone is an adrenaline-fueled adventure that blends excitement, strategy, and teamwork. What starts as a simple mission quickly turns into a pulse-pounding battle of wits and reflexes. Every match challenges players to think fast—navigating the arena, planning sneak attacks, and adapting to ever-changing scenarios. With lights flashing, music pumping, and friendly rivalries firing up, the atmosphere is electric. It’s an immersive, action-packed experience that keeps everyone moving, laughing, and wanting just one more round."}
                points={["Step into the arena and put your reflexes to the test", "Team strategy meets heart-racing fun", "Every hit feels like a victory, every match a new challenge"]}
                image={"theZone_image.svg"}
            />
        </main>
    );
}

export default OurSpace;