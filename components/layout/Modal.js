import React from 'react'

const Modal = ({ clickedImg, handleRotationRight, setClickedImg }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains('dismis')) {
			setClickedImg(null)
		}
	}

	return (
		<>
			<div className='dismiss' onClick={handleClick}>
				<img src={clickedImg} alt='un texto' />
				<span className='dismiss'>X</span>
				<div onClick={handleRotationRight}> {'>'} </div>
			</div>
		</>
	)
}

export default Modal
