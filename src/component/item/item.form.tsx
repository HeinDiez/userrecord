import React, { createRef } from 'react';
// import * as RBS from 'react-bootstrap';
import { Form, Button, Card } from 'react-bootstrap';

function ItemForm() {
    const nameRef = createRef<string | null>();
    const descriptionRef = createRef<string | null>();
    const imageRef = createRef<string | null>();
    const dateRef = createRef<string | null>();
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'> Add new item</h2>
                    <Form>
                        <Form.Group id='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' required />
                        </Form.Group>
                        <Form.Group id='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type='text'  required />
                        </Form.Group>
                        <Form.Group id='image-link'>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control type='text'required />
                        </Form.Group>
                        <Form.Group id='date'>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='text'  required />
                        </Form.Group>
                        <Button className='w-100 mt-4' type='submit'>Add</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Check here
            </div>
        </div>
    )
}


export default ItemForm
