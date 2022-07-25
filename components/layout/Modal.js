import React from 'react'

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
			<div className='dismiss' onClick={handleClick}>
				<img src={clickedImg} alt='un texto' />
				<span className='dismiss'>{'x'}</span>
				<div onClick={handleRotationLeft}> {'>'} </div>
				<div onClick={handleRotationRight}> {'>'} </div>
			</div>
		</>
	)
}

export default Modal
