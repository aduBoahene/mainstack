import React from 'react'

export default function MenuItem({title,icon}) {
    return (
        <div className="flex space-x-2 p-2 hover:bg-gray-500 rounded-full py-3 text-white">
            <span className="text-white">{icon}</span>
            <span className="text-white font-bold">{title}</span>
        </div>
    )
}
