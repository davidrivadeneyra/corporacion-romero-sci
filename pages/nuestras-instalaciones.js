import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import Footer from '../components/layout/Footer'
import BannerNuestrasInstalaciones from '../components/layout/BannerNuestrasInstalaciones'

export default function Home() {
	return (
		<>
			<Head></Head>

			<HeaderResponsive></HeaderResponsive>
			<BannerNuestrasInstalaciones></BannerNuestrasInstalaciones>
			<Footer></Footer>
		</>
	)
}
