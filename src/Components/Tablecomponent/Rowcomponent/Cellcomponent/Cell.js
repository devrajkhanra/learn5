import React from 'react'

const Cell = ({ cellData }) => {
    return (
        <td className='border'>
            {cellData}
        </td>
    )
}

export default Cell