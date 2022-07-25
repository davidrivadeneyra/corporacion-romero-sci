import React from 'react'

const SectionLogos = () => {
	return (
		<>
			<section className='w-full bg-dark-200'>
				<div className='margin-responsive section-container py-12 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:gap-10'>
					<img
						src='images/logos/buckeye-small.png'
						alt='Logos'
						className='w-24 lg:w-32'
					/>
					<img
						src='images/logos/ext.png'
						alt='Logos'
						className='w-24 lg:w-32'
					/>
					<img
						src='images/logos/gomex.png'
						alt='Logos'
						className='w-24 lg:w-32'
					/>
					<img
						src='images/logos/wilson_cousins.png'
						alt='Logos'
						className='w-24 lg:w-32'
					/>
					<img
						src='images/logos/mircom.png'
						alt='Logos'
						className='w-24 lg:w-32'
					/>
					<img
						src='images/logos/gloria.png'
						alt='Logos'
						className='w-24 lg:w-32'
					/>
				</div>
			</section>
			<section className='w-full bg-primary-800 py-16'>
				<div className='margin-responsive section-container'>
					<p className='text-base text-primary-100 text-center'>
						Según el{' '}
						<span className='text-basic-white'>
							{' '}
							Cuerpo General de Bomberos Voluntarios{' '}
						</span>{' '}
						del Perú en lo que va del año se han reportado más de
						58mil incendios en todo el Perú.
					</p>
				</div>
			</section>
		</>
	)
}

export default SectionLogos
