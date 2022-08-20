import React from 'react'
import Link from 'next/link'

const WhatsAppButtonNavbar = () => {
	return (
		<>
			<Link href='https://wa.me/+51930188276' className=''>
				<button className='cursor-pointer drop-shadow items-center hover:scale-110 ease-in duration-300 lg:block'>
					<img
						src='/icons/whatsapp.svg'
						alt=''
						className='h-10 drop-shadow-md'
					/>
				</button>
			</Link>
		</>
	)
}

export default WhatsAppButtonNavbar
