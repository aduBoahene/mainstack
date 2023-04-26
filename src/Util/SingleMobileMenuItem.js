function SingleMobileMenuItem({ image, caption }) {
	return (
		<div className='flex items-center md:flex md:mb-4'>
			<img src={image} className='w-4 h-10 4 mr-2 md:w-3' alt=""/>
			<h4 className='w-[40%] md:flex md:flex-1 md:ml-4 md:text-base md:text-[#56616B]'>{caption}</h4>
		</div>
	)
}

export default SingleMobileMenuItem