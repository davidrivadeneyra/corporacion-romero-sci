import React from 'react'

const LightBoxSection = () => {
	return (
		<>
			<section className='w-full'>
				<div className='margin-responsive section-container py-20 text-center'>
					<h1 className='font-headings text-dark-500 font-bold text-3xl leading-10 md:text-[2.5rem] lg:text-5xl text-center md:leading-[3.25rem] pb-6'>
						<span className='text-basic-white '>
							Especialistas comprometidos
						</span>{' '}
						con tu seguridad
					</h1>
					<p className='text-dark-500 text-center pb-8'>
						Con productos de calidad, innovación constante y
						excelente atención al cliente, CORPORACION ROMERO SCI es
						insuperable en sus esfuerzos pioneros para proporcionar
						una mejor seguridad contra incendios en todo el país.
					</p>
					<button className='button-default-primary-sm md:button-default-primary-base'>
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

export default LightBoxSection
