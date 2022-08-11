import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BannerNuestrasInstalaciones from '../components/layout/BannerNuestrasInstalaciones'
import SectionCapacitacion from '../components/layout/SectionCapacitacion'

export default function Home() {
	return (
		<>
			<Head></Head>

			<Header></Header>
			<BannerNuestrasInstalaciones></BannerNuestrasInstalaciones>
			<Footer></Footer>
		</>
	)
}
