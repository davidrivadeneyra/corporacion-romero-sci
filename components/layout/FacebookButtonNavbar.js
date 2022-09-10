import React from 'react'
import Link from 'next/link'
import FacebookIcon from '../icons/FacebookIcon'

const WhatsAppButtonNavbar = () => {
	return (
		<>
			<Link
				href='https://www.facebook.com/extintoresromero48'
				className=''>
				<a
					target='_blank'
					className='cursor-pointer drop-shadow items-center hover:scale-110 ease-in duration-300 lg:block'>
					<FacebookIcon className='h-10 fill-[#0077B7] bg-basic-white drop-shadow-md'></FacebookIcon>
				</a>
			</Link>
		</>
	)
}

export default WhatsAppButtonNavbar
