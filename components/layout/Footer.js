import React from 'react'

const Footer = () => {
	return (
		<>
			<section className='w-full bg-primary-900'>
				<div className='margin-responsive section-container py-24 text-center flex flex-col justify-center'>
					<img
						src='/img/cr-logo-medium-light.svg'
						alt='Comillas'
						className='pb-4 h-16'
					/>
					<div className=''>
						<button className='button-link-dark-sm text-primary-100 hover:text-basic-white hover:underline underline-offset-4'>
							<a href='#'>Nustros trabajos</a>
						</button>
						<button className='button-link-dark-sm text-primary-100 hover:text-basic-white hover:underline underline-offset-4'>
							<a href='#'>Por qué elegirnos</a>
						</button>
						<button className='button-link-dark-sm text-primary-100 hover:text-basic-white hover:underline underline-offset-4'>
							<a href='#'>Contáctanos</a>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Footer
