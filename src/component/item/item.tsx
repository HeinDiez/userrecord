import React from 'react';
import * as RB from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ItemList from './item.list';
import ItemView from './item.view';
import SmoothMotion from '../common/SmoothMotion';

interface Alert {
    show: boolean;
    variant: string;
    message: string
}

interface Property {
    displayAlert: Alert;
    setAlert: Function;
}

const Item:React.FC<Property> = (props) => {
    let navigate = useNavigate();
    const [search, setSearch] = React.useState("");
    const [selected,setSelected] = React.useState(null);
    return (
        <SmoothMotion>
            <RB.Container>
                <RB.Row>
                    <div className="px-4 pt-4">
                        <RB.Alert variant={props.displayAlert.variant} show={props.displayAlert.show}>
                            {props.displayAlert.message} 
                            <div className="d-flex justify-content-end">
                                <RB.Button onClick={() => props.setAlert({ show: false, variant: 'success', message: ""})} variant="outline-success">
                                    Close
                                </RB.Button>
                            </div>
                        </RB.Alert>
                    </div>
                </RB.Row>
                <RB.Row>
                    <RB.Col>
                        <div className="p-4">
                            <RB.Card>
                                <div className="p-4">
                                    <RB.Form className="d-flex">
                                        <RB.Button onClick={()=>{navigate("/create");}}>Create</RB.Button>
                                        <RB.Form.Group className='px-2 w-100'>
                                            <RB.Form.Control type="string" value={search} placeholder="Search" onChange={(e)=>setSearch(e.target.value)}></RB.Form.Control>
                                        </RB.Form.Group>
                                    </RB.Form>
                                </div>
                                <ItemList search={search} setSelected={setSelected} selected={selected}/>
                            </RB.Card>
                        </div>
                    </RB.Col>
                    <RB.Col>
                        <div className="p-4">
                            <ItemView selected={selected} setAlert={props.setAlert} setSelected={setSelected}/>
                        </div>
                    </RB.Col>
                </RB.Row>
            </RB.Container>
        </SmoothMotion>
    );
}

export default Item;