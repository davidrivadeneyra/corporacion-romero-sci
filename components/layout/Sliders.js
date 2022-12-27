import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper'

const BannerNuestrasInstalaciones = () => {
	return (
		<>
			<section className='w-full bg-dark-200 text-center'>
				<div className='margin-responsive section-container py-20'>
					<h1 className='title-h2-movil md:title-h1-desktop   text-center pb-4 text-dark-900'>
						Una mirada a nuestro <br />
						<span className='text-primary-500'>
							campo de entrenamiento
						</span>
					</h1>
				</div>

				<div className='w-full text-center pb-32'>
					<Swiper
						effect={'coverflow'}
						spaceBetween={-112}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 2,
							slideShadows: true,
						}}
						loop={true}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
						className=''>
						<SwiperSlide>
							<img className='slide' src='slides/01.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/02.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/03.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/03.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/04.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/05.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/06.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/07.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/08.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/09.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/10.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/11.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/12.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/13.jpeg' />
						</SwiperSlide>
						<SwiperSlide>
							<img className='slide' src='slides/14.jpeg' />
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default BannerNuestrasInstalaciones
