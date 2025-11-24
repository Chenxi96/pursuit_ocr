import './section.css';

const Section = ({description, points, image}) => {
    return(
        <section className="info-container">
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