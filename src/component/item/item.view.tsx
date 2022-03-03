import React from 'react';
import * as RB from 'react-bootstrap';
import SmoothMotion from '../common/SmoothMotion';
import { useNavigate } from 'react-router-dom';
import * as Interface from './item.interface'


const ItemView: React.FC<Interface.ItemView> = ({ selected, setAlert, setSelected }) => {
    let navigate = useNavigate();
    const onDelete = (value: Interface.User) => {
        let raw: any = localStorage.getItem('list');
        let list: Interface.User[] = JSON.parse(raw);
        let stack = [...list];
        stack.forEach((e,i)=>{
            if (e.id === selected?.id){
                stack.splice(i, 1);
                const listValue = JSON.stringify([...stack]);
                localStorage.setItem("list",listValue);
                setSelected(null);
                setAlert({ show: true, variant: 'info', message: `Succesfully deleted ${selected?.id}, ${selected.name}`})
            }
        });
    }
    function onEdit (value: Interface.User) {
        navigate(`/edit/${value.id}`);
    }
    function getFormattedDate(date: Date) {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
      
        return month + '/' + day + '/' + year;
    }
    if (!selected) {
        return null;
    }
    return (
        <SmoothMotion>
            <RB.Card>
            <RB.Card.Header>
                <div className="d-flex">
                    <h5 className='text-left font-weight-bold'> {selected?.id} </h5>
                    <div className='m-auto'/>
                    <RB.CloseButton className='mt-1' onClick={()=>setSelected(null)} />
                </div>
            </RB.Card.Header>
            {   selected?.image? <RB.Card.Img variant="top" src={selected?.image} />: ""}
            <RB.Card.Body>
                <RB.Card.Title className="mb-2">{selected?.name}</RB.Card.Title>
                <RB.Card.Subtitle className="mb-4 text-muted">{selected?.description}</RB.Card.Subtitle>
                <RB.Card.Text> {getFormattedDate(new Date(selected?.date))} </RB.Card.Text>
                <div className="d-flex">
                    <RB.Button className="mx-1" onClick={()=>onEdit(selected)}>Edit</RB.Button>
                    <RB.Button className="mx-1" onClick={()=>onDelete(selected)}>Delete</RB.Button>
                </div>
            </RB.Card.Body>
        </RB.Card>
        </SmoothMotion>
        
    )
}

export default ItemView
