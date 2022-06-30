import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap'
					rel='stylesheet'></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap'
					rel='stylesheet'></link>
			</Head>

			<Header></Header>
		</>
	)
}
