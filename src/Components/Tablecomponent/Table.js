import React from 'react'
import Row from './Rowcomponent/Row'

const Table = ({ items }) => {
    return (
        <div>
            <table className='table-auto'>
                <tbody>
                    {items.map(item => (
                        <Row key={item.id} item={item} />

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table