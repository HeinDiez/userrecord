import React from 'react';
import * as RB from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    description: string;
    image: string;
    date: string;
}
interface Property {
    search: string;
    selected: User | null;
    setSelected: Function;
}

const ItemList:React.FC<Property> = (props) => {
    let navigate = useNavigate();
    let raw: any = localStorage.getItem('list');
    let list: User[] = JSON.parse(raw);
    React.useEffect(()=>{
        if (list?.length === 0 || list === null) {
            console.log(raw, "check here is ni sulod");
            navigate('/create'); 
        }
    }, []);
    return (
        <RB.Table striped bordered hover className='scroll-area-xl'>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <RB.ListGroup as="tbody">
                {   list?.filter((e)=>e.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1).map((it:User, id:number)=> (
                        <RB.ListGroup.Item className='p-0' as="tr" key={`user-list-${id}`} onClick={()=>props.setSelected(it)} active={props.selected?.id === it.id}>
                            <div className="d-flex">
                                <div className="mr-auto p-2">{it.name}</div>
                                <div className="ml-auto p-2">{it.date}</div>
                            </div>
                        </RB.ListGroup.Item>
                    ))
                }
                
            </RB.ListGroup>
            {/* <tbody>
                {   list?.filter((e)=>e.name.indexOf(props.search) > -1).map((it:User, id:number)=> (
                        <tr key={`user-list-${id}`} onClick={()=>props.setSelected(it)} active={}>
                            <td>{it.name}</td>
                            <td>{it.date}</td>
                        </tr>
                    ))
                }
            </tbody> */}
        </RB.Table>
            
    )
}


export default ItemList;