import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import BannerHome from '../components/layout/BannerHome'
import SectionLogos from '../components/layout/SectionLogos'

export default function Home() {
	return (
		<>
			<Head></Head>

			<Header></Header>
			<BannerHome></BannerHome>
			<SectionLogos></SectionLogos>
		</>
	)
}
