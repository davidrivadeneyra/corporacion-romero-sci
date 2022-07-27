import React from 'react'

const BannerNosotros = () => {
	return (
		<>
			<section className='w-full bg-gradient-to-b from-dark-950 to-dark-900'>
				<div className='margin-responsive section-container py-24 flex'>
					<div>
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

					<div className='pt-10'>
						<img
							src='images/cr-nosotros.png'
							alt='Foto de los trabajos que hace Corporación Romero SCI'
							className='block rounded-lg'
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default BannerNosotros
