import React from 'react'
export default function BannerSection() {
return (
<section className='bannersection'>
	<div className='container'>
		<div className='row'>
			<div className='col-xl-6 col-lg-5 col-md-12 col-sm-12'>
				<div className='lp-top-banner-section'>
					<div className='lp-top-banner'>
						<img className='lp-brown-icon' data-aos="zoom-in-right" data-aos-delay="800" data-aos-duration="1000" src={'assets/img/lp-brown-icon.png'} alt='lp-brown-icon'/>
						<img className='lp-red-icon' data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="1000" src={'assets/img/lp-red-icon.png'} alt='lp-red-icon' />
						<div className='lp-banner-circle-img' data-aos="zoom-in" data-aos-duration="1500">
							<img className='lp-img' src={'assets/img/lp-img.png' }alt='lp-img'/>
						</div>
					</div>
				</div>
			</div> 
			<div className='col-xl-6 col-lg-7 col-md-12 col-sm-12'>
				<div className='lp-top-banner-title'>
					<h2 className='lp-banner-title' data-aos="zoom-in-left" data-aos-delay="500" data-aos-duration="1000">Leaders <span>in the</span> kraft paper industry</h2>
					<p className='lp-banner-subbanner' data-aos="zoom-out-left" data-aos-delay="800" data-aos-duration="1000">through<br/>quality, excellence and outstanding service </p>
				</div>
			</div>
		</div>
	</div>
</section>
)
}