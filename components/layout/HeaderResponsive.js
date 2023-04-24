import React, { useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import MenuIcon from '../icons/MenuIcon'
import MenuClose from '../icons/MenuClose'
import WhatsAppButtonNavbar from '../layout/WhatsAppButtonNavbar'
import LinkedinButtonNavbar from '../layout/LinkedinButtonNavbar'
import FacebookButtonNavbar from '../layout/FacebookButtonNavbar'

function HeaderResponsive() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<nav className='w-full bg-basic-white z-30 fixed'>
				<div className='section-container'>
					<div className='header-structure margin-responsive '>
						<div>
							<Link href='/'>
								<img
									src='img/cr-logo-small-dark.svg'
									alt='Logo Corporación Romero SCI'
									className='hidden md:block md:h-16 cursor-pointer'
								/>
							</Link>
							<Link href='/'>
								<img
									src='img/cr-logo-small-dark.svg'
									alt='Logo Corporación Romero SCI'
									className='h-8 md:hidden cursor-pointer'
								/>
							</Link>
						</div>

						<div className='hidden lg:flex divide-x divide-dark-300'>
							<div className='flex md:gap-8 lg:gap-10 pr-8'>
								<Link href='/socios-estrategicos'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4'>
										<a className=''>Socios estrategicos</a>
									</button>
								</Link>
								<Link href='/nuestras-instalaciones'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4 '>
										<a>Nuestras instalaciones</a>
									</button>
								</Link>
								<Link href='/marcas'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4 '>
										<a>Marcas representativas</a>
									</button>
								</Link>
								<Link href='/mision'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4 '>
										<a>Misión y Visión</a>
									</button>
								</Link>
							</div>

							<div className='flex items-center gap-6 pl-8'>
								<p className='text-sm text-dark-500'>
									Hablemos
								</p>
								<div className='flex items-center gap-4'>
									<FacebookButtonNavbar></FacebookButtonNavbar>
									<LinkedinButtonNavbar></LinkedinButtonNavbar>
									<WhatsAppButtonNavbar></WhatsAppButtonNavbar>
								</div>
							</div>
						</div>
						<div className='flex items-center lg:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className=''
								aria-controls='mobile-menu'
								aria-expanded='false'>
								{/* <span className='sr-only'>Open main menu</span> */}
								{!isOpen ? (
									<MenuIcon className='fill-dark-700 h-8' />
								) : (
									<MenuClose className='fill-dark-700 h-8'></MenuClose>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
					className='absolute z-30 w-full '>
					{(ref) => (
						<div className='lg:hidden' id='mobile-menu'>
							<div
								ref={ref}
								className='bg-basic-white flex flex-col px-6 items-center py-16 gap-8 drop-shadow-xl'>
								<Link href='/socios-estrategicos'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4'>
										<a className=''>Socios estrategicos</a>
									</button>
								</Link>
								<Link href='/nuestras-instalaciones'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4 '>
										<a>Nuestras instalaciones</a>
									</button>
								</Link>
								<Link href='/marcas'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4 '>
										<a>Marcas representativas</a>
									</button>
								</Link>
								<Link href='/mision'>
									<button className='button-link-dark-sm text-dark-700  hover:text-dark-900 hover:underline hover:underline-offset-4 '>
										<a>Misión y Visión</a>
									</button>
								</Link>

								<div className='flex items-center gap-6'>
									<FacebookButtonNavbar></FacebookButtonNavbar>
									<LinkedinButtonNavbar></LinkedinButtonNavbar>
									{/* <WhatsAppButtonNavbar></WhatsAppButtonNavbar> */}
								</div>

								{/* <Link
									href='https://www.linkedin.com/company/corporacion-romero-sci/'
									passHref>
									<a
										className='w-full justify-center cursor-pointer button-default-dark-sm hover:bg-dark-950 text-dark-100 hover:text-dark-100 inline-flex gap-3 items-center hover:scale-105 ease-in duration-300'
										target='_blank'>
										Contáctanos
										<img
											src='/icons/Linkedin.svg'
											alt='Ícono de Linkedin'
											className='h-4'
										/>
									</a>
								</Link> */}
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</>
	)
}

export default HeaderResponsive
