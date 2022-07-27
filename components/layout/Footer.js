import React from 'react'

const Footer = () => {
	return (
		<>
			<section className='w-full bg-dark-200'>
				<div className='margin-responsive section-container py-24 text-center flex flex-col justify-center'>
					<img
						src='/img/cr-logo-medium-dark.svg'
						alt='Comillas'
						className='pb-4 h-16'
					/>
					<div className=''>
						<button className='button-link-dark-sm text-dark-700 hover:text-dark-950'>
							<a href='#'>Nustros trabajos</a>
						</button>
						<button className='button-link-dark-sm text-dark-700 hover:text-dark-950'>
							<a href='#'>Por qué elegirnos</a>
						</button>
						<button className='button-link-dark-sm text-dark-700 hover:text-dark-950'>
							<a href='#'>Contáctanos</a>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Footer
