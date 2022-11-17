import React from 'react'
import Listitem from '../Listitemcomponent/Listitem'

const List = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <Listitem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default List