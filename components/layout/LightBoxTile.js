import React from 'react'

const LightBoxTile = () => {
	return (
		<>
			<section className='w-full bg-dark-200 py-[112px]'>
				<div className='margin-responsive section-container text-center'>
					<h1 className='title-h1-movil md:title-h2-desktop text-primary-500 text-center pb-4'>
						servicio de agentes limpios y equipos portátiles
					</h1>
					<p className='p-base text-dark-700 text-center pb-8'>
						Ponemos a su disposición los siguientes servicios:
					</p>
				</div>
				<div className='margin-responsive section-container cards-section'>
					<div className='grid grid-cols-3 gap-8 mb-8'>
						<div className='card-content'>
							<img
								src='icons/cr-icon-recarga.svg'
								alt=''
								className='w-full h-28'
							/>
							<h3 className='title-h2-movil text-center'>
								Recarga
							</h3>
							<p className='p-base text-dark-600 text-center pb-8'>
								Una vez al año los extintores necesitan ser
								recargados según la norma que lo regula. Un
								extintor vacío o incluso parcialmente usado, es
								inútil en un momento de emergencia.
							</p>
						</div>
						<div className='card-content'>
							<img
								src='icons/cr-icon-mantenimiento.svg'
								alt=''
								className='w-full h-28'
							/>
							<h3 className='title-h2-movil text-center'>
								Mantenimiento
							</h3>
							<p className='p-base text-dark-600 text-center pb-8'>
								Una vez que elija a CORPORACION ROMERO SCI como
								proveedor de su empresa, le ofrecemos un
								contrato de mantenimiento anual , en el que los
								extintores recibirán un servicio de
								mantenimiento.
							</p>
						</div>
						<div className='card-content'>
							<img
								src='icons/cr-icon-capacitaciones.svg'
								alt=''
								className='w-full h-28'
							/>
							<h3 className='title-h2-movil text-center'>
								CAPACITACIONES
							</h3>
							<p className='p-base text-dark-600 text-center pb-8'>
								Para combatir un incendio con éxito, primero
								debe entenderlo. El Programa de Entrenamiento
								para la Seguridad contra Incendios de
								CORPORACION ROMERO SCI cubre todas las posibles
								líneas de defensa contra el fuego
							</p>
						</div>
					</div>
					<div className='grid grid-cols-3 gap-8'>
						<div className='card-content'>
							<img
								src='icons/cr-icon-inspecciones.svg'
								alt=''
								className='w-full h-28'
							/>
							<h3 className='title-h2-movil text-center'>
								INSPECCIONES PERIÓDICAS
							</h3>
							<p className='p-base text-dark-600 text-center pb-8'>
								Todos entendemos la importancia de la seguridad
								contra incendios en nuestras instalaciones. No
								todos nosotros entendemos la importancia de una
								correcta inspección periódica.
							</p>
						</div>
						<div className='card-content'>
							<img
								src='icons/cr-icon-prueba.svg'
								alt=''
								className='w-full h-28'
							/>
							<h3 className='title-h2-movil text-center'>
								PRUEBA HIDROSTÁTICA
							</h3>
							<p className='p-base text-dark-600 text-center pb-8'>
								Cada 05 años, los extintores deben pasar por un
								servicio de prueba hidrostática que garantizará
								su correcto funcionamiento. CORPORACION ROMERO
								SCI realiza pruebas a equipos de alta y baja
								presión.
							</p>
						</div>
						<div className='card-content'>
							<img
								src='icons/cr-icon-alquiler.svg'
								alt=''
								className='w-full h-28'
							/>
							<h3 className='title-h2-movil text-center'>
								ALQUILER DE EQUIPOS
							</h3>
							<p className='p-base text-dark-600 text-center pb-8'>
								Si bien ningún precio debe ser colocado en
								salvar una vida humana, e incluso la propiedad
								puede ser increíblemente valioso, el costo es un
								factor real en las decisiones que tomamos.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default LightBoxTile
