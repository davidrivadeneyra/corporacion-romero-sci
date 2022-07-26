import React from 'react'
import Close from '../icons/Close'
import ChevronLeft from '../icons/ChevronLeft'
import ChevronRight from '../icons/ChevronRight'

const Modal = ({
	clickedImg,
	handleRotationRight,
	handleRotationLeft,
	setClickedImg,
}) => {
	const handleClick = (e) => {
		if (e.target.classList.contains('dismiss')) {
			setClickedImg(null)
		}
	}

	return (
		<>
			<div
				className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-basic-black bg-opacity-90 flex justify-center items-center'
				onClick={handleClick}>
				<img
					src={clickedImg}
					alt='Imagen grande'
					className='mx-0 rounded w-[75%] lg:w-[45%]'
				/>

				<button
					className='dismiss absolute bottom-16 cursor-pointer rounded-full bg-basic-white opacity-40 p-4'
					onClick={handleClick}>
					<Close className='h-6 fill-dark-900 dismiss' />
				</button>

				<button className='absolute left-0 cursor-pointer rounded-xl bg-basic-black hover:opacity-80 opacity-60 p-2'>
					<ChevronLeft
						onClick={handleRotationLeft}
						className='h-6 fill-dark-100'
					/>
				</button>

				<button className='absolute right-0 cursor-pointer rounded-xl bg-basic-black hover:opacity-80 opacity-60 p-2'>
					<ChevronRight
						onClick={handleRotationRight}
						className='h-6 fill-dark-100'
					/>
				</button>
			</div>
		</>
	)
}

export default Modal
