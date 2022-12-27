import React from 'react'
import Link from 'next/link'

const BannerHome = () => {
	return (
		<>
			<section className='w-full bg-gradient-red pt-header-fix'>
				<div className='margin-responsive section-container pt-16 pb-[100px] text-center relative'>
					<h1 className='title-h1-movil md:title-big-desktop   text-center pb-4 text-primary-500 '>
						Somos especialistas <br />
						<span className='text-dark-900'>
							comprometidos con tu seguridad
						</span>
					</h1>
					<p className='p-sm md:p-base text-dark-700 text-center pb-8'>
						Con productos de calidad, innovación constante y
						excelente atención al cliente, CORPORACIÓN ROMERO SCI es
						insuperable en sus esfuerzos pioneros para proporcionar
						una mejor seguridad contra incendios en todo el país.
					</p>
					<Link href='tel:+51930188276'>
						<button className='button-default-yellow-sm md:button-default-yellow-base hover:scale-105 ease-in duration-300'>
							Llámanos al 930 188 276
						</button>
					</Link>
					<div className='pt-12'>
						<video
							controls
							className='aspect-video max-h-96 m-auto rounded-xl '
							src='video/cr-video.mp4'></video>
					</div>
				</div>
			</section>
			<section className='w-full bg-primary-800 text-center'>
				<div className='margin-responsive section-container py-20'>
					<p className='text-primary-100 italic text-[1.25rem]'>
						Según el Cuerpo General de Bomberos Voluntarios del Perú
						en lo que va del año se han reportado más de 58mil
						incendios en todo el Perú.
					</p>
				</div>
			</section>
		</>
	)
}

export default BannerHome
