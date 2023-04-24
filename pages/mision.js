import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import SectionMisionVision from '../components/layout/SectionMisionVision'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/layout/WhatsAppButton'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					'Aquí va el nombre de tu página' - Somos Corporación Romero
					SCI
				</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<WhatsAppButton></WhatsAppButton>
			<HeaderResponsive></HeaderResponsive>

			<SectionMisionVision></SectionMisionVision>

			<Footer></Footer>
		</>
	)
}
