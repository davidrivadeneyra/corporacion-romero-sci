import React from 'react'

const OurProducts = () => {
	return (
		<>
			<section className='w-full bg-dark-950'>
				<div className='margin-responsive section-container pt-24 pb-10 lg:px-28 text-center'>
					<h2 className='title-h2-movil md:title-h2-desktop text-dark-500 text-center pb-4'>
						<span className='text-basic-white '>Nuestros</span>{' '}
						Productos
					</h2>
					<p className='p-sm text-dark-400 text-center pb-8'>
						Somos especilistas en todas las marcas a nivel Perú.
					</p>

					<div className='grid lg:grid-cols-3 gap-8'>
						<div className='flex flex-col p-6 rounded-2xl bg-dark-900 border-solid border border-dark-700'>
							<img
								src='/images/alarm.svg'
								alt='icono de card'
								className='h-16 mb-3'
							/>
							<h3 className='title-h3-movil lg:title-h3-desktop text-dark-200 pb-4'>
								Extintores
							</h3>
							<ul className='text-dark-400'>
								<li>Polvo químico seco.</li>
								<li>Rodando químico seco.</li>
								<li>Polvo químico seco púrpura K.</li>
								<li>Gas carbónico.</li>
								<li>Agua presurizada.</li>
								<li>Halatron.</li>
								<li>Acetato de potacio clase K.</li>
							</ul>
						</div>
						<div className='flex flex-col p-6 rounded-2xl bg-dark-900 border-solid border border-dark-700'>
							<img
								src='/images/extintor.svg'
								alt='icono de card'
								className='h-16 mb-3'
							/>
							<h3 className='title-h3-movil lg:title-h3-desktop text-dark-200 pb-4'>
								Extintores
							</h3>
							<ul className='text-dark-400'>
								<li>Polvo químico seco.</li>
								<li>Rodando químico seco.</li>
								<li>Polvo químico seco púrpura K.</li>
								<li>Gas carbónico.</li>
								<li>Agua presurizada.</li>
								<li>Halatron.</li>
								<li>Acetato de potacio clase K.</li>
							</ul>
						</div>
						<div className='flex flex-col p-6 rounded-2xl bg-dark-900 border-solid border border-dark-700'>
							<img
								src='/images/warningOctagon.svg'
								alt='icono de card'
								className='h-16 mb-3'
							/>
							<h3 className='title-h3-movil lg:title-h3-desktop text-dark-200 pb-4'>
								Extintores
							</h3>
							<ul className='text-dark-400'>
								<li>Polvo químico seco.</li>
								<li>Rodando químico seco.</li>
								<li>Polvo químico seco púrpura K.</li>
								<li>Gas carbónico.</li>
								<li>Agua presurizada.</li>
								<li>Halatron.</li>
								<li>Acetato de potacio clase K.</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default OurProducts
