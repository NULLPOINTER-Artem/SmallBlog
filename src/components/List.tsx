import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItemCB: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div className='list-wrapper'>
            {props.items.map(props.renderItemCB)}
        </div>
    )
}