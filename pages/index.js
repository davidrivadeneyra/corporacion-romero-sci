import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import HeaderResponsive from '../components/layout/HeaderResponsive'
import BannerHome from '../components/layout/BannerHome'
import SectionLogos from '../components/layout/SectionLogos'
import LightBoxServicesUp from '../components/layout/LightBoxServicesUp'
import LightBoxServicesDown from '../components/layout/LightBoxServicesDown'
import LightBoxTile from '../components/layout/LightBoxTile'
import Footer from '../components/layout/Footer'

export default function Home() {
	return (
		<>
			<Head></Head>

			<HeaderResponsive></HeaderResponsive>
			<BannerHome></BannerHome>
			<SectionLogos></SectionLogos>
			<LightBoxServicesUp></LightBoxServicesUp>
			<LightBoxTile></LightBoxTile>
			<LightBoxServicesDown></LightBoxServicesDown>
			<Footer></Footer>
		</>
	)
}
