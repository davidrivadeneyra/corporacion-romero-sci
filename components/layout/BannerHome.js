import React from 'react'

const BannerHome = () => {
	return (
		<>
			<section className='w-full bg-gradient-to-b from-dark-950 to-dark-900'>
				<div className='margin-responsive section-container py-24 text-center relative bg-fixed'>
					<h1 className='title-h1-movil md:title-big-desktop   text-center pb-4 text-basic-white '>
						<span className='text-dark-500'>
							Somos especialistas <br />
						</span>{' '}
						comprometidos con tu seguridad
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
					<div className='flex justify-center pt-10'>
						<img
							src='images/cr-extintor.png'
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
