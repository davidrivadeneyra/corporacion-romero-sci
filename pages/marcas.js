import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BannerMarcas from '../components/layout/BannerMarcas.js'

export default function Home() {
	return (
		<>
			<Head></Head>

			<Header></Header>
			<BannerMarcas></BannerMarcas>
			<Footer></Footer>
		</>
	)
}
