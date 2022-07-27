import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import BannerHome from '../components/layout/BannerHome'
import SectionLogos from '../components/layout/SectionLogos'
import LightBoxSection from '../components/layout/LightBoxSection'
import LightBoxTile from '../components/layout/LightBoxTile'
import OurProducts from '../components/layout/OurProducts'
import PhraseSection from '../components/layout/PhraseSection'
import Footer from '../components/layout/Footer'

export default function Home() {
	return (
		<>
			<Head></Head>

			<Header></Header>
			<BannerHome></BannerHome>
			<SectionLogos></SectionLogos>
			<LightBoxTile></LightBoxTile>
			<LightBoxSection></LightBoxSection>
			<PhraseSection></PhraseSection>
			<OurProducts></OurProducts>
			<Footer></Footer>
		</>
	)
}
