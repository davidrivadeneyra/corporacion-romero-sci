import React from 'react'
import Link from 'next/link'
import LinkedinIcon from '../icons/LinkedinIcon'

const WhatsAppButtonNavbar = () => {
	return (
		<>
			<Link href='https://wa.me/+51930188276' className=''>
				<button className='cursor-pointer drop-shadow items-center hover:scale-110 ease-in duration-300 lg:block'>
					<LinkedinIcon className='h-10 fill-[#0077B7] bg-basic-white drop-shadow-md'></LinkedinIcon>
				</button>
			</Link>
		</>
	)
}

export default WhatsAppButtonNavbar
