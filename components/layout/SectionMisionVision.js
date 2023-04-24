import React from 'react'
import Link from 'next/link'

const SectionMisionVision = () => {
	return (
		<>
			<section className='w-full bg-dark-200 pt-header-fix'>
				<div className='margin-responsive section-container py-20 md:py-24'>
					<div className='grid lg:grid-cols-2 lg:gap-16 gap-8 items-center'>
						<div className='text-left'>
							<h1 className='title-h1-movil md:title-h1-desktop pb-4 text-primary-500'>
								Misión
							</h1>
							<p className='p-sm md:p-base text-dark-700'>
								Preparar los hogares y los centros de trabajo de
								nuestros clientes, en forma eficiente, económica
								y con productos de la mayor calidad, ajustados a
								los parámetros normativos y siempre en beneficio
								de los usuarios.
							</p>
						</div>
						<img
							className='rounded-2xl w-full'
							src='images/cr-mision.jpg'
							alt='Imagen de la misión de Corporación Romero SCI'
						/>
					</div>
				</div>
			</section>
			<section className='w-full bg-dark-100'>
				<div className='margin-responsive section-container py-20 md:py-24'>
					<div className='grid lg:grid-cols-2 lg:gap-16 gap-8 items-center '>
						<div className='text-left lg:order-2'>
							<h1 className='title-h1-movil md:title-h1-desktop pb-4 text-primary-500'>
								Visión
							</h1>
							<p className='p-sm md:p-base text-dark-700'>
								Constituirnos en la empresa líder en la
								seguridad contra incendios, desarrollando
								nuestros recursos humanos y técnicos para
								alcanzar un alto estándar de calidad y
								diferenciación en los servicios que brindamos a
								nuestros clientes.
							</p>
						</div>
						<img
							className='rounded-2xl w-full'
							src='images/cr-vision.jpg'
							alt='Imagen de la misión de Corporación Romero SCI'
						/>
					</div>
				</div>
			</section>
			<section className='w-full bg-yellow-100'>
				<div className='margin-responsive section-container py-20 md:py-24'>
					<div className=''>
						<h1 className='title-h3-movil md:title-h3-desktop pb-10 text-yellow-900 text-center'>
							consulta nuestras políticas:
						</h1>

						<div className='flex flex-col lg:flex-row justify-center gap-4 lg:gap-10'>
							<div className='flex flex-col gap-4'>
								<Link href='documents/politica-a-la-negacion-de-realizar-trabajo-inseguro.pdf'>
									<a
										className='
								flex gap-2 items-center text-dark-700  hover:text-primary-700 hover:underline hover:underline-offset-4'
										target='_blank'
										rel='noopener noreferrer'>
										<img
											src='icons/cr-file-text.svg'
											alt=''
										/>
										Política a la negación de realizar
										trabajo inseguro
									</a>
								</Link>
								<Link href='documents/politica-a-la-negacion-de-realizar-trabajo-inseguro.pdf'>
									<a
										className='
								flex gap-2 items-center text-dark-700  hover:text-primary-700 hover:underline hover:underline-offset-4'
										target='_blank'
										rel='noopener noreferrer'>
										<img
											src='icons/cr-file-text.svg'
											alt=''
										/>
										Política de medio ambiente
									</a>
								</Link>
								<Link href='documents/politica-a-la-negacion-de-realizar-trabajo-inseguro.pdf'>
									<a
										className='
								flex gap-2 items-center text-dark-700  hover:text-primary-700 hover:underline hover:underline-offset-4'
										target='_blank'
										rel='noopener noreferrer'>
										<img
											src='icons/cr-file-text.svg'
											alt=''
										/>
										Política de seguridad CORP. ROMERO SCI
									</a>
								</Link>
							</div>
							<div className=' flex flex-col gap-4'>
								<Link href='documents/politica-a-la-negacion-de-realizar-trabajo-inseguro.pdf'>
									<a
										className='
								flex gap-2 items-center text-dark-700  hover:text-primary-700 hover:underline hover:underline-offset-4'
										target='_blank'
										rel='noopener noreferrer'>
										<img
											src='icons/cr-file-text.svg'
											alt=''
										/>
										Política de consumo de Drogas y Alcohol
										en el entorno de trabajo
									</a>
								</Link>
								<Link href='documents/politica-a-la-negacion-de-realizar-trabajo-inseguro.pdf'>
									<a
										className='
								flex gap-2 items-center text-dark-700  hover:text-primary-700 hover:underline hover:underline-offset-4'
										target='_blank'
										rel='noopener noreferrer'>
										<img
											src='icons/cr-file-text.svg'
											alt=''
										/>
										Política de Prevención del acoso laboral
										y riesgo psicosocial
									</a>
								</Link>
								<Link href='documents/politica-a-la-negacion-de-realizar-trabajo-inseguro.pdf'>
									<a
										className='
								flex gap-2 items-center text-dark-700  hover:text-primary-700 hover:underline hover:underline-offset-4'
										target='_blank'
										rel='noopener noreferrer'>
										<img
											className='fill-dark-700'
											src='icons/cr-file-text.svg'
											alt=''
										/>
										Política de Seguridad y Salud Laboral
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SectionMisionVision
