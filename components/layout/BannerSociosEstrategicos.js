import React from 'react'
import SectionItemsNuestrasInstalaciones from './SectionItemsNuestrasInstalaciones'

const BannerNuestrasInstalaciones = () => {
	return (
		<>
			<section className='w-full bg-[#EAEFE0] pt-header-fix'>
				<div className='margin-responsive section-container py-20 md:py-24'>
					<div className='text-center'>
						<h1 className='title-h1-movil md:title-h1-desktop pb-4 text-dark-950'>
							Socios estratégicos
						</h1>
						<p className='p-sm md:p-base text-dark-900'>
							En Corporación Romero SCI nos preocupamos por la
							satisfacción del cliente. Estamos convencidos que
							los negocios no excluyen las buenas relaciones con
							nuestros clientes, quienes ante todo son nuestros
							amigos.
						</p>
					</div>
				</div>
			</section>

			<section className='w-full'>
				<div className='section-container margin-responsive'>
					<img
						src='/images/cr-images/cr-socios-estrategicos.png'
						alt='Marcas asociadas con Corporación Romero SCI'
						className='w-full px-4 py-8 lg:px-32 lg:py-12'
					/>
				</div>
			</section>
			<section className='w-full'>
				<div className='section-container'>
					<img
						src='/images/cr-images/cr-socios-estrategicos-equipo.jpg'
						alt='Marcas asociadas con Corporación Romero SCI'
						className='w-full'
					/>
				</div>
			</section>
		</>
	)
}

export default BannerNuestrasInstalaciones
