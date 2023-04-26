import dash from '../dashboard.svg'
import edit from '../edit.svg'
import hourglass from '../hourglass_empty.svg'
import group from '../group.svg'


import camera from '../add_a_photo.svg'
import bin from '../delete.svg'


import alarm from '../alarm.svg'
import file from '../file_present.svg'
import sub from '../subscriptions.svg'

export const menuItems = [
	{
		"logo": dash,
		"caption": "Dashboard"
	},
	{
		"logo": edit,
		"caption": "Item 2"
	},
	{
		"logo": group,
		"caption": "Item 3"
	},
	{
		"logo": hourglass,
		"caption": "Item 4"
	}
]


export const otherOneChildren = [
	{
		"logo": camera,
		"caption": "Item 4"
	},
	{
		"logo": bin,
		"caption": "Item 5"
	}

]

export const otherTwoChildren = [
	{
		"logo": sub,
		"caption": "Item 6"
	},
	{
		"logo": file,
		"caption": "Item 7"
	},
	{
		"logo": alarm,
		"caption": "Item 8"
	}

]