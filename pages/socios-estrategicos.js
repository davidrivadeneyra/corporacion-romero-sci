import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BannerSociosEstrategicos from '../components/layout/BannerSociosEstrategicos'

export default function Home() {
	return (
		<>
			<Head></Head>

			<Header></Header>
			<BannerSociosEstrategicos></BannerSociosEstrategicos>
			<Footer></Footer>
		</>
	)
}
