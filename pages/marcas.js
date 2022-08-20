import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import Footer from '../components/layout/Footer'
import BannerMarcas from '../components/layout/BannerMarcas.js'
import WhatsAppButton from '../components/layout/WhatsAppButton'

export default function Home() {
	return (
		<>
			<Head></Head>
			<WhatsAppButton></WhatsAppButton>
			<HeaderResponsive></HeaderResponsive>
			<BannerMarcas></BannerMarcas>
			<Footer></Footer>
		</>
	)
}
