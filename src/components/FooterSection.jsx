import React from 'react'

export default function FooterSection() {
  return (
    <section id='footersection' className='footersection'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-2 col-lg-2 col-md-12 col-sm-12'>
            <div className='footerlogo'>
              <img src='assets/img/footer_logo_new.png' className='footer-logo' alt='footer-logo' />
            </div>
          </div>
          <div className='col-xl-10 col-lg-10 col-md-12 col-sm-12'>
            <div className='footer-right'>
              <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                  <div className='footer1'>
                    <h4>Inquiries:</h4>
                    <p>For any inquiries, questions or commendations, please call: +91-22-26552951 / 52 / 53 or fill out the following form</p>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                  <div className='footer1'>
                    <h4>Sales Office:</h4>
                    <p>Ground Floor, Shiv Samruddhi Apt, Road #38, Station Road, Behind Notan Heights, Bandra West, Mumbai 400050, Maharashtra, India</p>
                    <p>Tel: +91-22-26552951 / 52 / 53</p>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                  <div className='footer1'>
                    <h4>Registered Address (Factory):</h4>
                    <p>Plot No. 2, MIDC Area, Kalyan Bhiwandi Road, Saravali - 421311 Maharashtra, IndiaTel:</p>
                    <p>Tel: +91-22-26552951 / 52 / 53</p>
                    <p>Email: sales@laxmipaper.com</p>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                  <div className='footer1'>
                    <h4>Employment:</h4>
                    <p>We are always on the lookout for exceptional candidates who are willing to grow with the company:</p>
                  <p>To apply for a job with us please send a cover letter together with </p>
                </div>
              </div>
              <div className='col-xl-12'>
                <ul className='footersocial'>
                  <li><i className='fa fa-facebook'></i></li>
                  <li><i className='fa fa-twitter'></i></li>
                  <li><i className='fa fa-instagram'></i></li>
                  <li><i className='fa fa-linkedin'></i></li>
                  <li><i className='fa fa-youtube'></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  )
}
