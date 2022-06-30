import React from 'react'
import Button from '../buttons/Button'

const Header = () => {
	return (
		<>
			<header className='structureHeader'>
				<img
					src='img/logo-default.svg'
					alt='Logo Corporación Romero SCI'
					className='h-16'
				/>
				<Button></Button>
			</header>
		</>
	)
}

export default Header
