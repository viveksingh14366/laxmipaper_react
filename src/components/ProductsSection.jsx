import React from 'react'

export default function ProductsSection(props) {
    return (
        <section id='productssection' className='productssection brownsection'>
            <div className='container'>
                <div className='sectiontitle'>
                    <h2 className='title'>{props.title}</h2>
                    <p className='titledisc'>We have three paper machines (2.6 metres, 3.3 metres and 2.65 metres in machine width) with a total annual capacity of over 120,000 metric tonnes. We manufacture many grades of paper, some of which are listed below:</p>
                </div>
                <div className='productslist'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6' data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="800" data-aos-anchor-placement="center-right">
                            <div className='products'>
                                <div className='products-flex'>
                                    <div className='products-left'>
                                        <div className='products-title'>
                                            <h2>White Kraft Liner</h2>
                                        </div>
                                        <div className='products-measure'>
                                            <p>200gsm to 300gsm </p>
                                        </div>
                                    </div>
                                    <div className='products-right'>
                                        <img src="assets/img/product/img1.png" className="products-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6' data-aos="fade-up-left" data-aos-delay="500" data-aos-duration="800" data-aos-anchor-placement="center-left">
                            <div className='products'>
                                <div className='products-flex'>
                                    <div className='products-left'>
                                        <div className='products-title'>
                                            <h2>Virgin Top Liner</h2>
                                        </div>
                                        <div className='products-measure'>
                                            <p>200gsm to 300gsm </p>
                                        </div>
                                    </div>
                                    <div className='products-right'>
                                        <img src="assets/img/product/img1.png" className="products-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6' data-aos="fade-up-right" data-aos-delay="700" data-aos-duration="1000" data-aos-anchor-placement="center-right">
                            <div className='products'>
                                <div className='products-flex'>
                                    <div className='products-left'>
                                        <div className='products-title'>
                                            <h2>Kraft Liner</h2>
                                        </div>
                                        <div className='products-measure'>
                                            <p>200gsm to 300gsm </p>
                                        </div>
                                    </div>
                                    <div className='products-right'>
                                        <img src="assets/img/product/img2.png" className="products-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6' data-aos="fade-up-left" data-aos-delay="700" data-aos-duration="1000" data-aos-anchor-placement="center-left">
                            <div className='products'>
                                <div className='products-flex'>
                                    <div className='products-left'>
                                        <div className='products-title'>
                                            <h2>Water Repellent Liner </h2>
                                        </div>
                                        <div className='products-measure'>
                                            <p>200gsm to 300gsm </p>
                                        </div>
                                    </div>
                                    <div className='products-right'>
                                        <img src="assets/img/product/img3.png" className="products-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6' data-aos="fade-up-right" data-aos-delay="900" data-aos-duration="1200" data-aos-anchor-placement="center-right">
                            <div className='products'>
                                <div className='products-flex'>
                                    <div className='products-left'>
                                        <div className='products-title'>
                                            <h2>Coreboard Paper</h2>
                                        </div>
                                        <div className='products-measure'>
                                            <p>200gsm to 300gsm </p>
                                        </div>
                                    </div>
                                    <div className='products-right'>
                                        <img src="assets/img/product/img4.png" className="products-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6' data-aos="fade-up-left" data-aos-delay="900" data-aos-duration="1200" data-aos-anchor-placement="center-left">
                            <div className='products'>
                                <div className='products-flex'>
                                    <div className='products-left'>
                                        <div className='products-title'>
                                            <h2>Test Liner</h2>
                                        </div>
                                        <div className='products-measure'>
                                            <p>200gsm to 300gsm </p>
                                        </div>
                                    </div>
                                    <div className='products-right'>
                                        <img src="assets/img/product/img5.png" className="products-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sectiontitle' data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="center-bottom">
                    <p className='titledisc'>If you are looking for any product(s) which are not in this list, we recommend you to go visit our associate company, Indo Afrique Paper Mill Pvt Ltd which makes a different category of corrugated and specialised kraft products.</p>
                </div>
            </div>
        </section>
    )
}
