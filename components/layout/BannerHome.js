import React from 'react'

const BannerHome = () => {
	return (
		<>
			<section className='w-full'>
				<div className='margin-responsive section-container py-24 text-center'>
					<h1 className='title-h1-movil md:title-h1-desktop  text-dark-500 ext-center pb-4'>
						<span className='text-basic-white '>
							Especialistas comprometidos
						</span>{' '}
						con tu seguridad
					</h1>
					<p className='p-sm md:p-base text-dark-400 text-center pb-8'>
						Con productos de calidad, innovación constante y
						excelente atención al cliente, CORPORACION ROMERO SCI es
						insuperable en sus esfuerzos pioneros para proporcionar
						una mejor seguridad contra incendios en todo el país.
					</p>
					<button className='button-default-yellow-sm md:button-default-yellow-base'>
						Llámanos al 999 988 798
					</button>
					<div className='pt-12'>
						<img
							src='images/corporacion-romero-01.jpg'
							alt='Foto de los trabajos que hace Corporación Romero SCI'
							className='block rounded-lg'
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default BannerHome
