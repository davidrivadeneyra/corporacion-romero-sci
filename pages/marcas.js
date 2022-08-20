import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import Footer from '../components/layout/Footer'
import BannerMarcas from '../components/layout/BannerMarcas.js'

export default function Home() {
	return (
		<>
			<Head></Head>
			<HeaderResponsive></HeaderResponsive>
			<BannerMarcas></BannerMarcas>
			<Footer></Footer>
		</>
	)
}
