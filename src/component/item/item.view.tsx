import React from 'react';
import * as RB from 'react-bootstrap';

interface User {
    id: number;
    name: string;
    description: string;
    image: string;
    date: string;
}
interface Alert {
    show: boolean;
    variant: string;
    message: string
}
interface Property {
    selected: User | null;
    setAlert: Function;
    setSelected: Function;
}

const ItemView: React.FC<Property> = ({ selected, setAlert, setSelected }) => {
    const onDelete = (value: User) => {
        let raw: any = localStorage.getItem('list');
        let list: User[] = JSON.parse(raw);
        let stack = [...list];
        stack.forEach((e,i)=>{
            if (e.id === selected?.id){
                stack.splice(i, 1);
                const listValue = JSON.stringify([...stack]);
                localStorage.setItem("list",listValue);
                setAlert({ show: true, variant: 'info', message: `Succesfully deleted ${selected.id}, ${selected.name}`})
            }
        });
    }
    if (!selected) {
        return null;
    }
    return (
        <RB.Card>
            <RB.Card.Header>
                <div className="d-flex">
                    <h2 className='text-left font-weight-bold m-auto'> {selected?.id} {selected?.name} </h2>
                    <RB.Button onClick={()=>setSelected(null)}>Close</RB.Button>
                </div>
            </RB.Card.Header>
            <RB.Card.Body>
                <p className="mb-3">{selected?.description}</p>
                <p className="mb-3">{selected?.image}</p>
                <p className="mb-3">{selected?.date}</p>
                <div className="d-flex">
                    <RB.Button className="mx-1">Edit</RB.Button>
                    <RB.Button className="mx-1" onClick={()=>onDelete(selected)}>Delete</RB.Button>
                </div>
            </RB.Card.Body>
        </RB.Card>
    )
}

export default ItemView
