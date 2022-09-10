import React from 'react'
import SectionItemsNuestrasInstalaciones from '../../components/layout/SectionItemsNuestrasInstalaciones'

const BannerNuestrasInstalaciones = () => {
	return (
		<>
			<section className='w-full bg-primary-100 pt-header-fix'>
				<div className='margin-responsive section-container py-20 md:py-24'>
					<div className='text-center'>
						<h1 className='title-h1-movil md:title-h1-desktop pb-4 text-primary-900'>
							Nuestras instalaciones
						</h1>
						<p className='p-sm md:p-base text-primary-800'>
							Durante años, CORPORACION ROMERO SCI ha sido un
							referente a nivel nacional en la venta y recarga de
							productos confiables para la prevención de incendios
						</p>
					</div>
				</div>
			</section>
			<SectionItemsNuestrasInstalaciones></SectionItemsNuestrasInstalaciones>

			<section className='w-full bg-dark-200'>
				<div className='section-container '>
					<div className='flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-stretch'>
						<div className='mx-4 md:mx-6 lg:mx-0 py-16 lg:px-0'>
							<h1 className='title-h3-movil md:title-h2-desktop pb-4 text-primary-500'>
								Nuestra Planta de Recarga:
							</h1>
							<ul className='flex flex-col gap-1 '>
								<li className='li-images'>
									Está diseñada para un fácil uso del
									operador.
								</li>
								<li className='li-images'>
									Eficiencia de transferencia de 99%.
								</li>
								<li className='li-images'>
									Transferencias PQS, líquido, vapor y
									nitrógeno.
								</li>
								<li className='li-images'>
									Indica la humedad.
								</li>
								<li className='li-images'>
									Opera en la presión.
								</li>
								<li className='li-images'>
									Compatible con: PQS - CO2 - PURPLE-K - AGUA
									- TIPO-K.
								</li>
							</ul>
						</div>
						<img
							src='/images/cr-planta-de-recarga.jpg'
							alt='Planta de recarga'
						/>
					</div>
				</div>
			</section>
			<section className='w-full bg-primary-100'>
				<div className='section-container'>
					<div className='w-full relative h-[400px]'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.7845744448114!2d-77.07362538518935!3d-11.85034759159834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa18cfe1f0e6ac0ad!2zMTHCsDUxJzAxLjMiUyA3N8KwMDQnMTcuMiJX!5e0!3m2!1ses!2spe!4v1662771790072!5m2!1ses!2spe'
							className='left-0 top-0 h-full md:h-[400] w-full absolute'></iframe>
					</div>
				</div>
			</section>
		</>
	)
}

export default BannerNuestrasInstalaciones
