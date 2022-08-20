import React from 'react'
import Link from 'next/link'

const WhatsAppButton = () => {
	return (
		<>
			<Link href='https://wa.me/+51930188276' className=''>
				<a
					target='_blank'
					className='fixed z-20 bottom-16 right-6 cursor-pointer drop-shadow-2xl lg:hidden'>
					<img
						src='/icons/whatsapp.svg'
						alt=''
						className='h-20 drop-shadow-md'
					/>
				</a>
			</Link>
		</>
	)
}

export default WhatsAppButton
