import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<>
			<section className='w-full bg-primary-900'>
				<div className='margin-responsive section-container py-24 gap-12 text-center flex flex-col justify-center'>
					<img
						src='/img/cr-logo-medium-light.svg'
						alt='Comillas'
						className='h-10 lg:h-16'
					/>
					<div className='flex flex-col gap-4 lg:flex lg:flex-row lg:justify-center'>
						<Link href='/socios-estrategicos'>
							<button className='button-link-dark-sm text-primary-200  hover:text-basic-white hover:underline hover:underline-offset-4'>
								<a className=''>Socios estrategicos</a>
							</button>
						</Link>
						<Link href='/nuestras-instalaciones'>
							<button className='button-link-dark-sm text-primary-200  hover:text-basic-white hover:underline hover:underline-offset-4 '>
								<a>Nuestras instalaciones</a>
							</button>
						</Link>
						<Link href='/marcas'>
							<button className='button-link-dark-sm text-primary-200  hover:text-basic-white hover:underline hover:underline-offset-4 '>
								<a>Marcas representativas</a>
							</button>
						</Link>
						<Link href='/mision'>
							<button className='button-link-dark-sm text-primary-200  hover:text-basic-white hover:underline hover:underline-offset-4 '>
								<a>Misión y Visión</a>
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default Footer
