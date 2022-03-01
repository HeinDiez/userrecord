import React from 'react';
import * as RB from 'react-bootstrap';

import ItemForm from './item.form';
import ItemList from './item.list';
import ItemView from './item.view';

function Item() {
    const [search, setSearch] = React.useState("");
    const [selected,setSelected] = React.useState(null);
    return (
        <div>
            <RB.Container>
                <RB.Row>
                    <RB.Col>
                        <div className="p-4">
                            <RB.Card>
                                <div className="p-4">
                                    <RB.Form>
                                        <RB.Form.Group>
                                            <RB.Form.Control type="string" value={search} onChange={(e)=>setSearch(e.target.value)}></RB.Form.Control>
                                        </RB.Form.Group>
                                    </RB.Form>
                                </div>
                                <ItemList search={search} setSelected={setSelected} selected={selected}/>
                            </RB.Card>
                        </div>
                    </RB.Col>
                    <RB.Col>
                        <div className="p-4">
                            {   selected?
                                <ItemView selected={selected} />: <ItemForm />
                            }
                        </div>
                    </RB.Col>
                </RB.Row>
            </RB.Container>
        </div>
    );
}

export default Item;