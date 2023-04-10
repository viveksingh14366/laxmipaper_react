import React from 'react'

export default function AboutSection(props) {
    return (
        <section id='aboutsection' className='aboutsection brownsection'>
            <div className='container'>
                <div className='sectiontitle'>
                    <h2 className='title'>{props.title}</h2>
                    <p className='titledisc'>Founded in 1972, Laxmi Board & Paper Mills Pvt. Ltd. has always been a leader in manufacturing high quality Kraft paper. Our reputation as a quality-conscious manufacturer as well as our high customer satisfaction, has enabled us to grow tremendously over the years.</p>
                </div>
                <div className='ps-timeline-sec'>
                    <div className='container'>
                        <ol className='ps-timeline'>
                            <li>
                                <div className='img-handler-top'>
                                    <p className='timetitle'>1972</p>
                                    <p className='timedisc'>This is dummy copy please do ont read this. This is dummy copy</p>
                                </div>
                                <span className='ps-sp-top'></span>
                            </li>
                            <li>
                                <div className='img-handler-bot'>
                                <p className='timetitle'>1972</p>
                                    <p className='timedisc'>This is dummy copy please do ont read this. This is dummy copy</p>
                                </div>
                                <span className='ps-sp-bot'></span>
                            </li>
                            <li>
                                <div className='img-handler-top'>
                                <p className='timetitle'>1972</p>
                                    <p className='timedisc'>This is dummy copy please do ont read this. This is dummy copy</p>
                                </div>
                                <span className='ps-sp-top'></span>
                            </li>
                            <li>
                                <div className='img-handler-bot'>
                                <p className='timetitle'>1972</p>
                                    <p className='timedisc'>This is dummy copy please do ont read this. This is dummy copy</p>
                                </div>
                                <span className='ps-sp-bot'></span>
                            </li>
                            <li>
                                <div className='img-handler-top'>
                                <p className='timetitle'>1972</p>
                                    <p className='timedisc'>This is dummy copy please do ont read this. This is dummy copy</p>
                                </div>
                                <span className='ps-sp-top'></span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
