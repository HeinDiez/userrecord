import React from 'react';
import * as RB from 'react-bootstrap';

interface User {
    name: string;
    description: string;
    image: string;
    date: string;
}

const ItemList:React.FC = (props) => {
    let list2: any;
    list2 = localStorage.getItem('list');
    return (
        <RB.Table striped bordered hover className='scroll-area-xl'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {   list2?.map((it:User, id:number)=> <tr key={`user-list-${id}`}>
                        <td>{it.name}</td>
                        <td>{it.date}</td>
                    </tr>)
                }
            </tbody>
        </RB.Table>
            
    )
}


export default ItemList;