import React, { useState } from 'react'
import data from '../data/imagesServicesDown.json'
import Modal from './Modal.js'

const LightBoxServicesDown = () => {
	const [clickedImg, setClickedImg] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(null)

	const handleClick = (item, index) => {
		setCurrentIndex(index)
		setClickedImg(item.link)
	}

	const handleRotationRight = () => {
		const totalLength = data.data.length
		if (currentIndex + 1 >= totalLength) {
			setCurrentIndex(0)
			const newUrl = data.data[0].link
			setClickedImg(newUrl)
			return
		}

		const newIndex = currentIndex + 1
		const newUrl = data.data.filter((item) => {
			return data.data.indexOf(item) === newIndex
		})
		const newItem = newUrl[0].link
		setClickedImg(newItem)
		setCurrentIndex(newIndex)
	}

	const handleRotationLeft = () => {
		const totalLength = data.data.length
		if (currentIndex === 0) {
			setCurrentIndex(totalLength - 1)
			const newUrl = data.data[totalLength - 1].link
			setClickedImg(newUrl)
			return
		}
		const newIndex = currentIndex - 1
		const newUrl = data.data.filter((item) => {
			return data.data.indexOf(item) === newIndex
		})
		const newItem = newUrl[0].link
		setClickedImg(newItem)
		setCurrentIndex(newIndex)
	}

	return (
		<>
			<section className='flex section-container bg-dark-200'>
				{data.data.map((item, index) => (
					<div key={index} className='cursor-pointer overflow-hidden'>
						<img
							src={item.link}
							alt={item.text}
							onClick={() => handleClick(item, index)}
							className='max-w-full block transition duration-1000 hover:scale-125'
						/>
					</div>
				))}
				<div className='transition ease-in-out'>
					{clickedImg && (
						<Modal
							className=''
							clickedImg={clickedImg}
							handleRotationRight={handleRotationRight}
							setClickedImg={setClickedImg}
							handleRotationLeft={handleRotationLeft}
						/>
					)}
				</div>
			</section>
		</>
	)
}

export default LightBoxServicesDown
