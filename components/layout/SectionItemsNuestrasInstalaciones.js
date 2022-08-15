import React, { useState } from 'react'
import data from '../data/imagesNuestrasInstalaciones.json'
import Modal from './Modal.js'

const LightBoxSection = () => {
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
			{/* columns-2 md:columns-xs gap-2 */}
			<section className='w-full bg-dark-100'>
				<div className='section-container margin-responsive py-16 lg:py-24'>
					<div className='grid grid-cols-2 gap-3 lg:grid lg:grid-cols-3 lg:gap-6'>
						{data.data.map((item, index) => (
							<div
								key={index}
								className='relative cursor-pointer overflow-hidden mb-2 rounded-2xl'>
								<img
									src={item.link}
									alt={item.text}
									onClick={() => handleClick(item, index)}
									className='block transition duration-1000 hover:scale-125'
								/>
								<h2 className='absolute bottom-2 py-3 lg:py-4 left-2 right-2 p-xs md:p-base text-center font-semibold text-basic-white bg-basic-black bg-opacity-80 z-10 rounded-xl'>
									{item.text}
								</h2>
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
					</div>
				</div>
			</section>
		</>
	)
}

export default LightBoxSection
