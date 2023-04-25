import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import BannerHome from '../components/layout/BannerHome'
import Sliders from '../components/layout/Sliders'
import SectionLogos from '../components/layout/SectionLogos'
import LightBoxServicesUp from '../components/layout/LightBoxServicesUp'
import LightBoxServicesDown from '../components/layout/LightBoxServicesDown'
import LightBoxTile from '../components/layout/LightBoxTile'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/layout/WhatsAppButton'

export default function Home() {
	return (
		<>
			<Head>
				{/* <!-- HTML Meta Tags --> */}
				<title>
					Somos Corporación Romero SCI - Especialista en tu seguridad
				</title>
				<meta
					name='description'
					content='Somos Corporación Romero SCI, especialistas comprometidos con tu seguridad'></meta>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				{/* <!-- Facebook --> */}

				<meta
					property='og:url'
					content='https://corporacionromerosci.com/images/cr-og-corporacion-romero.jpg'></meta>
				<meta
					property='og:title'
					content='Somos Corporación Romero SCI - Especialista en tu seguridad'></meta>
				<meta property='og:description' content=''></meta>
				<meta
					property='og:image'
					content='https://corporacionromerosci.com/images/cr-og-corporacion-romero.jpg'></meta>

				{/* <!-- Twitter --> */}
				<meta name='twitter:card' content='summary_large_image'></meta>
				<meta
					property='twitter:domain'
					content='corporacionromerosci.com'></meta>
				<meta property='twitter:url' content=''></meta>
				<meta
					name='twitter:title'
					content='Somos Corporación Romero SCI - Especialista en tu seguridad'></meta>
				<meta
					name='twitter:description'
					content='Somos Corporación Romero SCI - Especialista en tu seguridad'></meta>
				<meta
					name='twitter:image'
					content='https://corporacionromerosci.com/images/cr-og-corporacion-romero.jpg'></meta>
			</Head>
			<WhatsAppButton></WhatsAppButton>
			<HeaderResponsive></HeaderResponsive>
			<BannerHome></BannerHome>
			<Sliders></Sliders>
			<SectionLogos></SectionLogos>
			<LightBoxServicesUp></LightBoxServicesUp>
			<LightBoxTile></LightBoxTile>
			<LightBoxServicesDown></LightBoxServicesDown>
			<Footer></Footer>
		</>
	)
}
