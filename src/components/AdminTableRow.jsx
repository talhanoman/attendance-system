import React from 'react'

export default function AdminTableRow({sr, name, email, timestamp}) {
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 text-gray-900">{sr}</td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {name}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{timestamp}</td>
        </tr>
    )
}
