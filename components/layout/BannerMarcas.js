import React from 'react'
import SectionLogos from './SectionLogos.js'

const BannerNuestrasInstalaciones = () => {
	return (
		<>
			<section className='w-full bg-dark-200'>
				<div className='margin-responsive section-container py-20 md:py-24'>
					<div className='text-center'>
						<h1 className='title-h1-movil md:title-h1-desktop pb-4 text-dark-950'>
							Productos
						</h1>
						<p className='p-sm md:p-base text-dark-900'>
							Sistemas y dispositivos ideales para proteger
							diferentes micrambientes, en las mejores marcas
							recomendadas por los expertos.
						</p>
					</div>
				</div>
			</section>
			<SectionLogos></SectionLogos>
			<section className='w-full'>
				<div className='section-container'>
					<img
						src='/images/cr-images/cr-bomberos.jpg'
						alt='Marcas asociadas con Corporación Romero SCI'
						className='w-full'
					/>
				</div>
			</section>
			<section className='w-full bg-dark-200'>
				<div className='margin-responsive section-container py-20 md:py-24'>
					<div className='text-center pb-6'>
						<h2 className='title-h2-movil md:title-h2-desktop pb-4 text-dark-950'>
							Certificaciones
						</h2>
					</div>
					<div className='grid grid-rows gap-4 lg:grid lg:grid-cols-2 lg:gap-4'>
						<div className='bg-basic-white p-4 rounded-2xl flex gap-6'>
							<img
								src='/icons/cr-ul.svg'
								alt='Dim logo'
								className='h-14 lg:h-20'
							/>
							<div>
								<h3 className='title-h3-movil lg:title-h3-desktop text-dark-800 pb-2'>
									UL
								</h3>
								<p className='p-sm lg:p-base text-dark-500'>
									Las certificaciones de UL son más que
									marcas. Son un símbolo de confianza y
									seguridad reconocido en todo el mundo. No
									hay nada que demuestre el compromiso de una
									empresa con la seguridad y la satisfacción
									de cliente como una Marca UL. La
									certificación UL es la exigencia por
									OSINERGMIN y es la más reconocida en nuestro
									país.
								</p>
							</div>
						</div>
						<div className='bg-basic-white p-4 rounded-2xl flex gap-6 '>
							<img
								src='/icons/cr-fm.svg'
								alt='Dim logo'
								className='h-14 lg:h-20'
							/>
							<div>
								<h3 className='title-h3-movil lg:title-h3-desktop text-dark-800 pb-2'>
									FM
								</h3>
								<p className='p-sm lg:p-base text-dark-500'>
									Es la abreviación de "Factory Mutual",
									compañía asegurada que se presenta así misma
									como proveedor de soluciones de aseguranza
									"a prueba de fallos". Para tales fines,
									posee un programa de acreditaciones
									&lpar;Certificaciones de cumplimiento o Coc,
									por sus siglas en inglés&rpar; cuyo objetivo
									final es disminuir los riesgos obtenidos por
									distintas amenazas; entre ellas, los
									incendios.
								</p>
							</div>
						</div>
						<div className='bg-basic-white p-4 rounded-2xl flex gap-6'>
							<img
								src='/icons/cr-din.svg'
								alt='Dim logo'
								className='h-14 lg:h-20'
							/>
							<div>
								<h3 className='title-h3-movil lg:title-h3-desktop text-dark-800 pb-2'>
									DIN
								</h3>
								<p className='p-sm lg:p-base text-dark-500'>
									Esta norma alemana evalúa y documenta la
									competencia del personal cuyas tareas
									requieren el conocimiento de ensayos no
									destructivos.
								</p>
							</div>
						</div>
						<div className='bg-basic-white p-4 rounded-2xl flex gap-6'>
							<img
								src='/icons/cr-tuv.svg'
								alt='Dim logo'
								className='h-14 lg:h-20'
							/>
							<div>
								<h3 className='title-h3-movil lg:title-h3-desktop text-dark-800 pb-2'>
									TUV
								</h3>
								<p className='p-sm lg:p-base text-dark-500'>
									Son organizaciones certificadoras alemanas
									que tratan de prevenir a los seres humanos y
									al medio ambiente frente a los peligros que
									provienen de fábricas y de mecanismos de
									todo tipo.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default BannerNuestrasInstalaciones
