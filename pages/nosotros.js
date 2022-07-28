import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BannerNosotros from '../components/layout/BannerNosotros'
import SectionCapacitacion from '../components/layout/SectionCapacitacion'

export default function Home() {
	return (
		<>
			<Head></Head>

			<Header></Header>
			<BannerNosotros></BannerNosotros>
			<SectionCapacitacion></SectionCapacitacion>
			<Footer></Footer>
		</>
	)
}
