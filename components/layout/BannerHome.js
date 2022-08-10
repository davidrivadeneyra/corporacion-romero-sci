import React from 'react'

const BannerHome = () => {
	return (
		<>
			<section className='w-full bg-yellow-200'>
				<div className='margin-responsive section-container pt-24 pb-[100px] text-center relative'>
					<h1 className='title-h1-movil md:title-big-desktop   text-center pb-4 text-yellow-900 '>
						Somos especialistas comprometidos <br />
						con tu seguridad
					</h1>
					<p className='p-sm md:p-base text-yellow-800 text-center pb-8'>
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
							src='images/cr-circles.png'
							alt='Foto de los trabajos que hace Corporación Romero SCI'
							className='absolute'
						/>
					</div>
				</div>
			</section>
			<section className='w-full pt-[100px]'>
				<div className='margin-responsive section-container'>
					<img
						src='images/cr-photo-capacitacion.png'
						alt='Foto de los trabajos que hace Corporación Romero SCI'
						className='block'
					/>
				</div>
			</section>
		</>
	)
}

export default BannerHome
