import React from 'react'

const BannerNosotros = () => {
	return (
		<>
			<section className='w-full bg-gradient-to-b from-dark-950 to-dark-900'>
				<div className='margin-responsive section-container py-24 columns-1 lg:grid grid-cols-2 lg:items-center gap-6'>
					<div className='text-center lg:text-left'>
						<h1 className='title-h1-movil md:title-h1-desktop pb-4 text-basic-white '>
							<span className='text-dark-500'>
								Comprometidos con <br />
							</span>{' '}
							Nuestros clientes
						</h1>
						<p className='p-sm md:p-base text-dark-400 pb-8'>
							Durante años, CORPORACION ROMERO SCI ha sido un
							referente a nivel nacional en la venta y recarga de
							productos confiables para la prevención de incendios
						</p>
						<button className='button-default-yellow-sm md:button-default-yellow-base'>
							Llámanos al 999 988 798
						</button>
					</div>
					<div className=''>
						<img
							src='images/cr-nosotros.png'
							alt='Foto de los trabajos que hace Corporación Romero SCI'
							className='w-full rounded-lg mt-6 lg:mt-0'
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default BannerNosotros
