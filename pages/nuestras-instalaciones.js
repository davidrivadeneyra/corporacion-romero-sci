import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import Footer from '../components/layout/Footer'
import BannerNuestrasInstalaciones from '../components/layout/BannerNuestrasInstalaciones'
import WhatsAppButton from '../components/layout/WhatsAppButton'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Nuestras instalaciones - Somos Corporación Romero SCI
				</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<WhatsAppButton></WhatsAppButton>
			<HeaderResponsive></HeaderResponsive>
			<BannerNuestrasInstalaciones></BannerNuestrasInstalaciones>
			<Footer></Footer>
		</>
	)
}
