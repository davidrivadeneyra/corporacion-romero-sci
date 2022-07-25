import React from 'react'
import MenuIcon from '../icons/MenuIcon'

const Header = () => {
	return (
		<>
			<header className='w-full border-b-2 border-dark-900 bg-dark-950'>
				<div className='section-container'>
					<div className='header-structure margin-responsive '>
						<div>
							<img
								src='img/cr-logo-medium-light.svg'
								alt='Logo Corporación Romero SCI'
								className='hidden md:block md:h-16'
							/>
							<img
								src='img/cr-logo-small-light.svg'
								alt='Logo Corporación Romero SCI'
								className='h-8 md:hidden'
							/>
						</div>

						<div className='hidden md:flex gap-6'>
							<button className='button-link-dark-sm'>
								<a href='#'>Nustros trabajos</a>
							</button>
							<button className='button-link-dark-sm'>
								<a href='#'>Por qué elegirnos</a>
							</button>
							<button className='button-default-primary-sm'>
								<a href='#'>Contáctanos</a>
							</button>
						</div>
						<div className='flex items-center md:hidden'>
							<button>
								<MenuIcon className='fill-dark-700 h-10' />
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
