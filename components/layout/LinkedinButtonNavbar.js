import React from 'react'
import Link from 'next/link'
import LinkedinIcon from '../icons/LinkedinIcon'

const WhatsAppButtonNavbar = () => {
	return (
		<>
			<Link
				href='https://www.linkedin.com/company/corporacion-romero-sci/'
				className=''>
				<a
					target='_blank'
					className='cursor-pointer drop-shadow items-center hover:scale-110 ease-in duration-300 lg:block'>
					<LinkedinIcon className='h-10 fill-[#0077B7] bg-basic-white drop-shadow-md'></LinkedinIcon>
				</a>
			</Link>
		</>
	)
}

export default WhatsAppButtonNavbar
