import React from 'react'
// import logo from '/img/logo-default.svg'

const Header = () => {
	return (
		<>
			<header className='structureHeader bg-blue-100'>
				<img
					src='/img/Logo-default.svg'
					className='h-16'
					alt='Logo Corporacion Romero SCI'
				/>
				<a href='#'>Trabajos</a>
			</header>
		</>
	)
}

export default Header
