import React from 'react';
import * as RB from 'react-bootstrap';

import ItemForm from './item.form';
import ItemList from './item.list';

function Item() {
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
                                            <RB.Form.Control type="string"></RB.Form.Control>
                                        </RB.Form.Group>
                                    </RB.Form>
                                </div>
                                <ItemList />
                            </RB.Card>
                        </div>
                    </RB.Col>
                    <RB.Col>
                        <div className="p-4">
                            <ItemForm />
                        </div>
                    </RB.Col>
                </RB.Row>
            </RB.Container>
        </div>
    );
}

export default Item;