import React, { useState } from 'react'
import logo from '../mainstack-logo.svg'
import {  XIcon } from '@heroicons/react/outline';
import LineCH from './Line';
import SingleMobileMenuItem from '../Util/SingleMobileMenuItem';
import { menuItems, otherOneChildren, otherTwoChildren } from '../Util/menuItems'
import user from '../profileUser.svg'


import Nigeria from '../nigeria.svg'
import USA from '../usa.svg'
import Andorra from '../andorra.svg'
import Netherland from '../netherlands.svg'
import D from '../Util/doughnut';


import Twitter from '../twitter.svg'
import facebook from '../facebook.svg'
import Instagram from '../Instagram.svg'
import LinkdIn from '../linkedin.svg'





export const NewDash = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const duration = [
		"1 Day", "3 Days", "7 Days", "30 Days", "All Time", "Custom Date"
	]

	const countries = [
		{
			"flag": Nigeria,
			"name": "Nigeria",
			"percentage": "50%",
			"color": "#599EEA"
		},
		{
			"flag": USA,
			"name": "United States",
			"percentage": "50%",
			"color": "#844FF6"
		},

		{
			"flag": Andorra,
			"name": "Andorra",
			"percentage": "50%",
			"color": "#FAB70A"
		},
		{
			"flag": Netherland,
			"name": "Netherland",
			"percentage": "50%",
			"color": "#0FB77A"
		}
	]

	const sm = [
		{
			"name": "facebook",
			"image": facebook,
			"percentage": "",
			"color": ""
		},
		{
			"name": "Instagram",
			"image": Instagram,
			"percentage": "",
			"color": ""
		},
		{
			"name": "Linkedin",
			"image": LinkdIn,
			"percentage": "",
			"color": ""
		},
		{
			"name": "twitter",
			"image": Twitter,
			"percentage": "",
			"color": ""
		},
		{
			"name": "Others",
			"image": "",
			"percentage": "",
			"color": ""
		}
	]


	return (
		<div className='p-4 md:p-6 w-full md:w-5/6 border-2'>
			<div className="block md:hidden">
				<div className='flex justify-between'>
					<img src={logo} className='md:mt-2 md:mb-4' alt=""/>
					<button
						type="button"
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<XIcon className="block h-6 w-6" aria-hidden="true" />
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
							</svg>
						)}
					</button>
				</div>
				<div className={`${mobileMenuOpen ? 'block' : 'hidden'} flex flex-col md:hidden`} id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

						{menuItems.map((item, i) => (
							<SingleMobileMenuItem key={i} image={item.logo} caption={item.caption} />
						))}

						<h4 style={{ fontSize: '10p', marginTop: '20px' }} className='mb-4 mt-4 md:text-xs md:mt-8 md:mb-5'>OTHERS 1</h4>

						{otherOneChildren.map((ele, index) => (
							<SingleMobileMenuItem key={index} image={ele.logo} caption={ele.caption} />
						))}

						<h4 style={{ fontSize: '10px', marginTop: '20px' }} className='mb-4 md:text-xs md:mt-8 md:mb-5'>OTHERS 2</h4>

						{otherTwoChildren.map((ele, index) => (
							<SingleMobileMenuItem key={index} image={ele.logo} caption={ele.caption} />
						))}

						<div style={{ marginTop: '20px' }} className='flex items-center md:mt-56 md:flex gap-4'>
							<img src={user} alt=""/>
							<p>Blessing Daniels</p>
						</div>


					</div>
				</div>

			</div>

			<h4 className='text-3xl font-bold text-[#131316] mb-4 mt-2 md:text-[#131316] md:font-bold md:mb-11'>Dashboard</h4>
			<div className='mb-4 md:flex md:justify-between'>
				<div>
					<h4 className='text-xl mb-4 md:text-[#131316] font-bold md:mb-2.5'>Good morning, Blessing ⛅️</h4>
					<p className='text-sm md:text-sm'>Check out your dashboard summary.</p>
				</div>

				<h4 className='md:text-sm' style={{ color: '#FF5403' }}>View  analytics</h4>
			</div>

			<div className='w-full p-2 flex flex-wrap'>
				{duration.map((ele, i) => (
					<Chip key={i} content={ele} />
				))}
			</div>

			<div>
				<h3 className='font-bold'>Page Views</h3>
				<h5>All Time</h5>

				<div className='md:h-auto md:w-full overflow-hidden'>
					<LineCH />
				</div>
			</div>

			<div className='w-full p-2 md:flex md:justify-between md:mx-auto'>
				<div className='text-center'>
					<div className='flex justify-between mb-4 md:flex md:justify-between'>
						<h4>Top Locations</h4>
						<h4 style={{ color: '#FF5403' }}>View Full Report</h4>
					</div>

					<div className=' md:flex md:justify-between md:items-center'>
						<div className=''>
							{countries.map((item, i) => (
								<Legend key={i} flag={item.flag} country={item.name} color={item.color} />
							))}
						</div>
						<D />
					</div>
				</div>
				<div className='text-center'>
					<div className='flex justify-between mb-4 md:flex md:justify-between'>
						<h4>Top Referral source</h4>
						<h4 style={{ color: '#FF5403' }}>View full Report</h4>
					</div>

					<div className=' md:flex md:justify-between md:items-center'>
						<div className=''>
							{sm.map((item, i) => (
								<Legend key={i} flag={item.image} country={item.name} color={item.color} />
							))}
						</div>
						<D />
					</div>
				</div>
			</div>



		</div>
	)
}


function Chip({ content }) {
	return (
		<div className='m-2 rounded-full border-2 inline-block px-3 py-2 md:rounded-full md:mt-6 md:border-2 md:inline-block md:px-3 md:py-2 md:mr-7'>
			<h4>{content}</h4>
		</div>
	)
}

function Legend({ flag, country, color }) {
	return (
		<div className='flex items-center md:flex md:items-center'>
			<img src={flag} className='md:mr-4' alt=""/>
			<h5 className='mr-2 ml-2'>{country}</h5>
			<div className={`h-2 w-2 rounded-full bg-red-500`}></div>

		</div>
	)
}