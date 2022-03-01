import React from 'react';

interface User {
    name: string;
    description: string;
    image: string;
    date: string;
}

interface Property {
    selected: User;
}

const ItemView: React.FC<Property> = (props) => {
    return (
        <div>ItemView</div>
    )
}

export default ItemView
