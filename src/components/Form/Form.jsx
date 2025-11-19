import './Form.css';

const Form = () => {
    return(
        <section id="form-container">
            <section id="form-wrapper">
                <section id="info-container">
                    <div className='form-heading'>
                        <h2>Hours</h2>
                    </div>
                    <p>Monday: 2pm to 9:30pm</p>
                    <p>Tuesday: 2pm to 9:30pm</p>
                    <p>Wednesday: 2pm to 9:30pm</p>
                    <p>Thursday: 2pm to 9:30pm</p>
                    <p>Friday: 1:30pm to 11pm</p>
                    <p>Saturday: 11:30am to 11pm</p>
                    <p>Sunday: 11:30am to 9pm</p>
                    <p>75 Westmore Dr., Etobicoke, ON M9V 3Y6</p>
                </section>

                <form>
                    <div className='form-heading'>
                        <h2 id='heading-1'>Say Hello!</h2>
                    </div>
                    <div>
                            <input type="text" placeholder="Name" />
                    </div>
                    <div>
                            <input type="text" placeholder="Email" />
                    </div>
                    <textarea id='message' placeholder="Message" name='message'></textarea>
                    <div>
                        <button type="button">Contact us</button>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Form;