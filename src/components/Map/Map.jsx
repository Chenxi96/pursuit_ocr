import './map.css'
import { useState } from 'react';

const Map = () => {

    const [isHoveredTrack, setIsHoveredTrack] = useState(false);
    const [isHoveredBallPit, setIsHoveredBallPit] = useState(false);
    const [isHoveredLava, setIsHoveredLava] = useState(false);


    return(
        <section id="map_section-container">
            <section className='map-container'>
                <section id='initial-page' className='map-wrapper' style={{left: !isHoveredTrack && !isHoveredBallPit && !isHoveredLava ? '50px' : '-1300px'}}>
                    <div className='map-description'>
                        <p>Introducing our Interactive Zones Map! </p>
                        <p>Find all obstacles, understand the rules and strategies for playing them, and uncover additional information to make your visit more engaging and fun.</p>
                    </div>
                </section>
                <section id='track-section' className='map-wrapper' style={{left: isHoveredTrack ? '50px' : '-13000px'}}>
                    <h2 className='map-heading'>
                        <img src="/interactive_map/TrikeTrackLogo 1.svg" alt="" />
                        <img src="/interactive_map/cam.svg" alt="" />
                    </h2>
                    <div className='map-description'>
                        <p>Race, drift, and laugh nonstop on Pursuit OCR’s massive, twisty drift tricycle track — the ultimate grown-up playground!</p>
                        <ul>
                            <li>Race friends & laugh!</li>
                            <li>Drift on pedal-powered tricycles!</li>
                            <li>Twisty, fast corners!</li>
                        </ul>
                    </div>
                    <a className='map-link' href="#track-id">Learn More →</a>
                </section>
                <section id='ballpit-section' className='map-wrapper' style={{left: isHoveredBallPit ? '50px' : '-13000px'}}>
                    <h2 className='map-heading'>
                        <img src="/interactive_map/BallPitLogo.svg" alt="" />
                        <img src="/interactive_map/cam.svg" alt="" />
                    </h2>
                    <div className='map-description'>
                        <p>Dive, aim, and scramble in Pursuit OCR’s massive 100,000-ball pit — now featuring moving projection-mapped targets for even more chaotic fun!</p>
                        <ul>
                            <li>Aim at dynamic moving targets</li>
                            <li>Sink, scramble, and laugh nonstop</li>
                            <li>A wild, full-body challenge you won’t forget</li>
                        </ul>
                    </div>
                    <a className='map-link' href="#ball-id">Learn More →</a>
                </section>
                <section id='floorLava-section' className='map-wrapper' style={{left: isHoveredLava ? '50px' : '-13000px'}}>
                    <h2 className='map-heading'>
                        <img src="/interactive_map/FloorIsLavaLogo.svg" alt="" />
                        <img src="/interactive_map/cam.svg" alt="" />
                    </h2>
                    <div className='map-description'>
                        <p>Jump, balance, and dodge the heat in Pursuit OCR’s projection-mapped Floor Is Lava — a living, glowing video-game challenge under your feet!</p>
                        <ul>
                            <li>Hop across shifting stone “islands”</li>
                            <li>Test your balance, agility, and timing</li>
                            <li>A vibrant, must-capture moment for all ages</li>
                        </ul>
                    </div>
                    <a className='map-link' href="#lava-id">Learn More →</a>
                </section>
            </section>
            <section id="map-container">
                <a id='ball-pit' href="">
                    <img className='zone' src="/interactive_map/Ball Pit 1.svg" alt="" onMouseEnter={() => {
                        setIsHoveredBallPit(true)
                        setIsHoveredLava(false)
                        setIsHoveredTrack(false)
                    }} />
                </a>
                

                <img id='cave-wall' className='zone' src="/interactive_map/Cave 1.svg" alt="" />


                <img id='cove-wall' className='zone' src="/interactive_map/Cove 1.svg" alt="" />

                <a id='floor-lava' href="">
                    <img className='zone' src="/interactive_map/Lava 1.svg" alt="" onMouseEnter={() => {
                        setIsHoveredLava(true)
                        setIsHoveredTrack(false)
                        setIsHoveredBallPit(false)
                    }}  />
                </a>

                <img id='ninja-path' className='zone' src="/interactive_map/Ninja  Path 1.svg" alt="" />


                <img id='party-deck' className='zone' src="/interactive_map/Party Deck 1.svg" alt="" />

                <a id='track' href="">
                    <img className='zone' src="/interactive_map/Track 1.svg" alt="" onMouseEnter={() => {
                        setIsHoveredTrack(true)
                        setIsHoveredLava(false)
                        setIsHoveredBallPit(false)
                    }}  />
                </a>

                <img id='ninja-warrior' className='zone' src="/interactive_map/Warrior 1.svg" alt="" />


                <img id='axe-throw' className='zone' src="/interactive_map/Axe 1.svg" alt="" />


                <img id='tag-zone' className='zone' src="/interactive_map/Tag 1.svg" alt="" />


                <img id='pole-sliding' className='zone' src="/interactive_map/Pole 1.svg" alt="" />


                <img id='dance-floor'  className='zone' src="/interactive_map/Dance Floor 1.svg" alt="" />

            </section>
        </section>
    );
}

export default Map;