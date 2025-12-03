import './section.css';

const Section = ({link, description, points, image}) => {
    return(
        <section id={link} className="info-container">
            <div className='section-description'>
                <p>{description}</p>
                <ul>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                
            </div>
            <div className='section-image'>
                <img src={image} alt="" />
            </div>
        </section>
    );
}

export default Section;