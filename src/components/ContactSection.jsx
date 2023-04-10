import React, {Component} from 'react'
class ContactSection extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        emailStatus: ''
    };

    // handle the value
    handleCHange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // when submit btn is clicked
    submitForm = (e) => {
        const {name, email, message} = this.state;


        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            this.setState ({
                emailStatus: xhr.responseText
            });
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://dev.wemoveforward.in/laxmipaper/mailer/index.php?sendto=' + email + 
                                '&name=' + name + 
                                '&message=' + message);
        // send the request
        xhr.send();

        // reset the fields
        this.setState({
            name: '',
            email: '',
            message: ''
        });
        e.preventDefault();
    }
    render(){
        const { name, email, message, emailStatus } = this.state;
        return (
            <section id='contactsection' className='clientelesection contactsection brownsection'>
                <div className='container'>
                    <div className='sectiontitle'>
                        <h2 className='title'>Contact</h2>
                    </div>
                    <div className='contactdetailsection'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                <div className='contactdetails-left' data-aos="zoom-in-right" data-aos-duration="1200">
                                    <div className='contactdetails'>
                                        <div className='conatctno'>
                                            <i className='fa fa-mobile'></i>
                                            <div className='number'>
                                                <a href='tel:+912226552951'>+91-22-26552951</a> / <a href='tel:+912226552952'>52</a>  / <a href='tel:+912226552953'>53</a>
                                            </div>
                                        </div>
                                        <div className='conatctno'>
                                            <i className='fa fa-envelope'></i>
                                            <div className='number'>
                                                <a href='mailto:sales@laxmipaper.com'>sales@laxmipaper.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='maps'>
                                        <iframe
                                            src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.5255003276616!2d73.09767331538582!3d19.259500651182464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7961084f0be55%3A0x13adf739fddda63e!2sLaxmi%20Board%20%26%20Paper%20Mills%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1661248563524!5m2!1sen!2sin'}
                                            width='100%'
                                            height='300'
                                            allowFullScreen
                                            loading='lazy'
                                            referrerPolicy='no-referrer-when-downgrade'
                                            title='Laxmi Paper Loaction Map'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                <div className='contactdetails-right' onSubmit={this.submitForm} data-aos="zoom-in-left" data-aos-duration="1200">
                                    {emailStatus ? emailStatus : null}
                                    <form>
                                        <div className='form-item'>
                                            <input className='formfeilds' type='text' value={name} onChange={this.handleCHange('name')} placeholder='Name' />
                                        </div>
                                        <div className='form-item'>
                                            <input className='formfeilds' type='text' value={email} onChange={this.handleCHange('email')} placeholder='Email'  />
                                        </div>
                                        <div className='form-item'>
                                            <textarea className='formfeilds' value={message} onChange={this.handleCHange('message')} placeholder='Message' ></textarea>
                                        </div>
                                        <button type='submit' value='Submit' className='submit-btn'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ContactSection;