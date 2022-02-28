import React, { createRef } from 'react';
// import * as RBS from 'react-bootstrap';
import { Form, Button, Card } from 'react-bootstrap';

function ItemForm() {
    const nameRef = createRef<string | null>();
    const descriptionRef = createRef<string | null>();
    const imageRef = createRef<string | null>();
    const dateRef = createRef<string | null>();
    const onClickHandler = (e: any) => {
        console.log("check here", e)
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-left mb-4 font-weight-bold'> Create User</h2>
                    <Form>
                        <Form.Group id='name' className='mb-2'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' required />
                        </Form.Group>
                        <Form.Group id='description' className='mb-2'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type='text'  required />
                        </Form.Group>
                        <Form.Group id='image-link' className='mb-2'>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control type='text'required />
                        </Form.Group>
                        <Form.Group id='date' className='mb-2'>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='text'  required />
                        </Form.Group>
                        <Button className='w-100 mt-4' type='submit' onClick={onClickHandler}>Add</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-left mt-2'>
                Check here
            </div>
        </div>
    )
}


export default ItemForm
