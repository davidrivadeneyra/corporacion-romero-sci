import React from 'react'
import MenuIcon from '../icons/MenuIcon'

const Header = () => {
	return (
		<>
			<header className='section-container'>
				<div className='header-structure margin-responsive'>
					<div>
						<img
							src='img/logo-default.svg'
							alt='Logo Corporación Romero SCI'
							className='hidden md:block md:h-16'
						/>
						<img
							src='img/cr-logo-small.svg'
							alt='Logo Corporación Romero SCI'
							className='h-10 md:hidden'
						/>
					</div>

					<div className='hidden md:flex gap-6'>
						<button className='link-light-dark'>
							<a href='#'>Nustros trabajos</a>
						</button>
						<button className='link-light-dark'>
							<a href='#'>Por qué elegirnos</a>
						</button>
						<button className='link-ghost-primary'>
							<a href='#'>Contáctanos</a>
						</button>
					</div>
					<div className='md:hidden'>
						<button>
							<MenuIcon className='fill-dark-700 h-10' />
						</button>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
