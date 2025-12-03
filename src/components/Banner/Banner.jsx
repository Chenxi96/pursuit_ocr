import './banner.css'

const Banner = ({image, title}) => {

   

    return(
        <section aria-hidden="true" id="banner-container" style={{
            backgroundImage: `url(${image})`
        }}>
            {title ? <h2 id='banner-heading'>
                <img src={title} alt="" />
            </h2> : ""}
        </section>
    );
}

export default Banner;