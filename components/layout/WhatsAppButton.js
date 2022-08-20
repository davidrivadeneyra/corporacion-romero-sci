import React from 'react'
import Link from 'next/link'

const WhatsAppButton = () => {
	return (
		<>
			<Link
				href='https://wa.me/930188276'
				className='absolute top-12 bottom-0 right-0'>
				<button className='h-24 '>
					<img src='/icons/whatsapp.svg' alt='' />
				</button>
			</Link>
		</>
	)
}

export default WhatsAppButton
