import React from 'react'

const PhraseSection = () => {
	return (
		<>
			<section className='w-full bg-gradient-to-b from-dark-800 to-dark-950'>
				<div className='margin-responsive section-container pt-32 pb-10 lg:px-28 text-center flex flex-col justify-center'>
					<img
						src='/images/comillas.svg'
						alt='Comillas'
						className='pb-4 h-16'
					/>
					<p className='p-xl md:p-xxl italic text-dark-400 pb-4'>
						"Cuanto más te involucres con los clientes, las cosas
						serán más claras y más fácil será determinar lo que
						debería estar haciendo con ellos"
					</p>
					<p className='p-xl md:p-xxl font-semibold italic text-dark-100'>
						Jhon Russell
					</p>
				</div>
			</section>
		</>
	)
}

export default PhraseSection
