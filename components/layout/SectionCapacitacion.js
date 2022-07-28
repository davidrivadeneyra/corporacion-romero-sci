import React from 'react'

const SectionCapacitacion = () => {
	return (
		<>
			<section className='w-full bg-gradient-to-b bg-dark-950'>
				<div className='margin-responsive section-container py-24 flex flex-col lg:grid grid-cols-2 lg:items-center gap-6'>
					<div className=''>
						<img
							src='images/cr-capacitacion.png'
							alt='Foto de los trabajos que hace Corporación Romero SCI'
							className='w-full rounded-lg mt-6 lg:mt-0'
						/>
					</div>
					<div className='text-center lg:text-left flex flex-col justify-center md:items-start'>
						<img
							src='images/check.svg'
							alt='Imagen de check - Coporación Romero SCI'
							className='mb-4 h-16'
						/>
						<p className='p-xl md:p-xl text-dark-400'>
							Durante años, CORPORACION ROMERO SCI ha sido un
							referente a nivel nacional en la venta y recarga de
							productos confiables para la prevención de incendios
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default SectionCapacitacion
