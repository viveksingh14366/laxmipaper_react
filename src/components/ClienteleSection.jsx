import React from 'react'

export default function ClienteleSection(props) {
    return (
        <section id='clientelesection' className='clientelesection brownsection'>
            <div className='container'>
                <div className='sectiontitle'>
                    <h2 className='title'>{props.title}</h2>
                    <p className='titledisc'>Due to our high quality standards as well as our impeccable service, our products are supplied across many different industries all over India, as well as to the Middle East, Africa, Southeast Asia and China. Some of the industries we supply to are:</p>
                </div>
                <div className='clientelist'>
                    <div className='cliente'>
                        <div className='clienteitems-flex' data-aos="flip-up" data-aos-duration="800">
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon1.png" className="icons" alt="Automobiles" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Automobiles </p>
                                </div>
                            </div>
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon2.png" className="icons" alt="Appliances and Consumer Durables" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Appliances and Consumer Durables </p>
                                </div>
                            </div>
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon3.png" className="icons" alt="Beverages" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Beverages </p>
                                </div>
                            </div>
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon4.png" className="icons" alt="Fast Moving Consumer Goods" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Fast Moving Consumer Goods </p>
                                </div>
                            </div>
                        </div>
                        <div className='clienteitems-flex clienteitems-secondrow' data-aos="flip-down" data-aos-duration="800">
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon5.png" className="icons" alt="Fruits & Vegetables" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Fruits & Vegetables </p>
                                </div>
                            </div>
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon6.png" className="icons" alt="Meat" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Meat </p>
                                </div>
                            </div>
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon7.png" className="icons" alt="Pharmaceuticals" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Pharmaceuticals </p>
                                </div>
                            </div>
                            <div className='clienteitems'>
                                <div className='clienteitemsimg'>
                                    <img src="assets/img/icons/icon8.png" className="icons" alt="Textiles" />
                                </div>
                                <div className='clienteitems-title'>
                                    <p>Textiles </p>
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
