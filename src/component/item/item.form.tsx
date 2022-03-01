import React, { useState } from 'react';
import { Button, Card, Form as BForm} from 'react-bootstrap';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    name: string;
    description: string;
    image: string;
    date: string;
}
const defaultValues = {
    name: '',
    description: '',
    image: '',
    date: ''
}

function ItemForm() {
    const onSubmitHandler = (values: Values) => {
        let raw: any = localStorage.getItem('list');
        let list: Values[] = JSON.parse(raw);
        const listValue = JSON.stringify([...list, values]);
        localStorage.setItem("list",listValue);
    }
    return (
        <div>
            <Card>
                <Card.Header>
                    <h2 className='text-left font-weight-bold'> Create User</h2>
                </Card.Header>
                <Card.Body>
                    <Formik initialValues={defaultValues} onSubmit={onSubmitHandler}>
                        <Form>
                            <BForm.Label className='text-left'>Name</BForm.Label>
                            <BForm.Group id='name' className='mb-2'>
                                <BForm.Control type='text' required name="name" as={Field}/>
                            </BForm.Group>
                            <BForm.Group className="mb-3" controlId="formBasicEmail">
                                <BForm.Label>Description</BForm.Label>
                                <BForm.Control type="text" name="description" as={Field}/>
                            </BForm.Group>
                            <BForm.Group id='image-link' className='mb-2'>
                                <BForm.Label>Image Link</BForm.Label>
                                <BForm.Control type='text' name="image" as={Field}/>
                            </BForm.Group>
                            <BForm.Group id='date' className='mb-2'>
                                <BForm.Label>Date</BForm.Label>
                                <BForm.Control type='text' required name="date" as={Field}/>
                            </BForm.Group>
                            <Button className='w-100 mt-4' type='submit'>Add</Button>
                        </Form>
                    </Formik>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Give Feedback
            </div>
        </div>
    )
}


export default ItemForm
