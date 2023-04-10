import React from 'react'

export default function ManagementSection(props) {
    return (
        <section id='managementsection' className='productssection brownsection'>
            <div className='container'>
                <div className='sectiontitle'>
                    <h2 className='title'>{props.title}</h2>
                    <p className='titledisc'>Our management team comprises of veterans from the Indian paper industry, with well over several decades worth of experience under their belt. Their rich experience, insights and skillset along with their business acumen has helped Laxmi Board & Paper Mills maintain a constant trajectory of unequalled growth.</p>
                </div>
                <div className='managementlist'>
                    <div className='row management-slider'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mmslider'>
                            <div className='management' data-aos="zoom-out-up" data-aos-delay="600">
                                <div className='management-hoverimg'>
                                    <div className='managementimg'>
                                        <img src="assets/img/management/img1.jpg" className="management-img" alt="img1" />
                                        <img src="assets/img/arrow.png" className="icon-img" alt="icon" />
                                    </div>
                                </div>
                                <div className='management-title'>
                                    <h2>Dineshchandra Patel</h2>
                                    <p>Bar at Law, U.K. </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mmslider'>
                            <div className='management' data-aos="zoom-out-up" data-aos-delay="700">
                            <div className='management-hoverimg'>
                                <div className='managementimg'>
                                    <img src="assets/img/management/img1.jpg" className="management-img" alt="img1" />
                                    <img src="assets/img/arrow.png" className="icon-img" alt="icon" />
                                </div>
                                </div>
                                <div className='management-title'>
                                    <h2>Dineshchandra Patel</h2>
                                    <p>Bar at Law, U.K. </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mmslider'>
                            <div className='management' data-aos="zoom-out-up" data-aos-delay="800">
                            <div className='management-hoverimg'>
                                <div className='managementimg'>
                                    <img src="assets/img/management/img1.jpg" className="management-img" alt="img1" />
                                    <img src="assets/img/arrow.png" className="icon-img" alt="icon" />
                                </div>
                                </div>
                                <div className='management-title'>
                                    <h2>Dineshchandra Patel</h2>
                                    <p>Bar at Law, U.K. </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mmslider'>
                            <div className='management' data-aos="zoom-out-up" data-aos-delay="1000">
                            <div className='management-hoverimg'>
                                <div className='managementimg'>
                                    <img src="assets/img/management/img1.jpg" className="management-img" alt="img1" />
                                    <img src="assets/img/arrow.png" className="icon-img" alt="icon" />
                                </div>
                                </div>
                                <div className='management-title'>
                                    <h2>Dineshchandra Patel</h2>
                                    <p>Bar at Law, U.K. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
