import React from 'react'

const LightBoxTile = () => {
	return (
		<>
			<section className='w-full bg-dark-200 py-[112px]'>
				<div className='margin-responsive section-container text-center'>
					<h1 className='title-h2-movil md:title-h2-desktop text-primary-500 text-center pb-4'>
						servicio de agentes limpios y equipos portátiles
					</h1>
					<p className='p-sm md:p-base text-dark-700 text-center pb-8'>
						Ponemos a su disposición los siguientes servicios:
					</p>
				</div>
				<div className='margin-responsive section-container cards-section'>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:gap-8 md:mb-8'>
						<div className='card-content'>
							<img
								src='icons/cr-icon-recarga.svg'
								alt=''
								className='card-content-img'
							/>
							<h3 className='card-content-title'>Recarga</h3>
							<p className='card-content-body'>
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
								className='card-content-img'
							/>
							<h3 className='card-content-title'>
								Mantenimiento
							</h3>
							<p className='card-content-body'>
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
								className='card-content-img'
							/>
							<h3 className='card-content-title'>
								CAPACITACIONES
							</h3>
							<p className='card-content-body'>
								Para combatir un incendio con éxito, primero
								debe entenderlo. El Programa de Entrenamiento
								para la Seguridad contra Incendios de
								CORPORACION ROMERO SCI cubre todas las posibles
								líneas de defensa contra el fuego
							</p>
						</div>
						<div className='card-content'>
							<img
								src='icons/cr-icon-inspecciones.svg'
								alt=''
								className='card-content-img'
							/>
							<h3 className='card-content-title'>
								INSPECCIONES PERIÓDICAS
							</h3>
							<p className='card-content-body'>
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
								className='card-content-img'
							/>
							<h3 className='card-content-title'>
								PRUEBA HIDROSTÁTICA
							</h3>
							<p className='card-content-body'>
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
								className='card-content-img'
							/>
							<h3 className='card-content-title'>
								ALQUILER DE EQUIPOS
							</h3>
							<p className='card-content-body'>
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
