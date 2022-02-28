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
                        <ItemList />
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