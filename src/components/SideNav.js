import React from 'react'

import user from '../profileUser.svg'
import logo from '../mainstack-logo.svg'


import {menuItems, otherOneChildren, otherTwoChildren} from '../Util/menuItems'
import SingleMenuItem from '../Util/SingleMenuItem';



export default function SideNav() {

	return (
		<div className="hidden md:block md:w-1/6 md:h-screen md:p-8">
			<img src={logo} className='md:mt-2 md:mb-8' alt=""/>

			{menuItems.map((item, i) => (
				<SingleMenuItem key={i} image={item.logo} caption={item.caption} />
			))}

			<h4 className='md:text-xs md:mt-8 md:mb-5'>OTHERS 1</h4>

			{otherOneChildren.map((ele, index) => (
				<SingleMenuItem key={index} image={ele.logo} caption={ele.caption} />
			))}

			<h4 className='md:text-xs md:mt-8 md:mb-5'>OTHERS 2</h4>

			{otherTwoChildren.map((ele, index) => (
				<SingleMenuItem key={index} image={ele.logo} caption={ele.caption} />
			))}

			<div className='md:mt-56 md:flex gap-4'>
				<img src={user} alt=""/>
				<p>Blessing Daniels</p>
			</div>

		</div>
	)
}





