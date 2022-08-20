import React from 'react'
import Head from 'next/head'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import Footer from '../components/layout/Footer'
import BannerSociosEstrategicos from '../components/layout/BannerSociosEstrategicos'

export default function Home() {
	return (
		<>
			<Head></Head>
			<HeaderResponsive></HeaderResponsive>
			<BannerSociosEstrategicos></BannerSociosEstrategicos>
			<Footer></Footer>
		</>
	)
}
