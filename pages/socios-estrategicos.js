import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import Footer from '../components/layout/Footer'
import BannerSociosEstrategicos from '../components/layout/BannerSociosEstrategicos'
import WhatsAppButton from '../components/layout/WhatsAppButton'

export default function Home() {
	return (
		<>
			<Head></Head>
			<WhatsAppButton></WhatsAppButton>
			<HeaderResponsive></HeaderResponsive>
			<BannerSociosEstrategicos></BannerSociosEstrategicos>
			<Footer></Footer>
		</>
	)
}
