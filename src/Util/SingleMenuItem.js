function SingleMenuItem({ image, caption }) {
	return (
		<div className='md:flex md:mb-4'>
			<img src={image} className='md:w-3' alt=""/>
			<h4 className='md:flex md:flex-1 md:ml-4 md:text-base md:text-[#56616B]'>{caption}</h4>
		</div>
	)
}


export default SingleMenuItem