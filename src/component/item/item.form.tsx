import React from 'react';
import * as RB from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

interface Values {
    name: string;
    description: string;
    image: string;
    date: string;
}

interface Property {
    setAlert: Function;
}
const defaultValues = {
    name: '',
    description: '',
    image: '',
    date: ''
}

const ItemForm:React.FC<Property> = (props) => {
    let navigate = useNavigate();
    const [time, setTime] = React.useState(5);
    const onSubmitHandler = (values: Values) => {
        let raw: any = localStorage.getItem('list');
        let list: Values[] = JSON.parse(raw);
        const listValue = list? JSON.stringify([...list, {...values, id: list.length + 1}]): JSON.stringify([{...values, id: 1}]);
        localStorage.setItem("list",listValue);
        navigate('/')
        props.setAlert({ show: true, variant: 'success', message: "User Added Successfully"});
        let interval = setInterval(() => {
            let oras = time;
            setTime(--oras);
            if (time === 1) { 
                clearInterval(interval); 
                props.setAlert({ show: false, variant: 'success', message: ""});
            }
        }, 1000)
    }
    return (
        <div className='m-4'>
            <RB.Container>
                <RB.Row className="justify-content-md-center">
                    <RB.Col xl="auto">
                        <RB.Card className='mb-4' style={{ width: '35rem' }}>
                            <RB.Card.Header>
                                <h2 className='text-left font-weight-bold'>User</h2>
                            </RB.Card.Header>
                            <RB.Card.Body>
                                <Formik initialValues={defaultValues} onSubmit={onSubmitHandler}>
                                    <Form>
                                        <RB.Form.Label className='text-left'>Name</RB.Form.Label>
                                        <RB.Form.Group id='name' className='mb-2'>
                                            <RB.Form.Control type='text' required name="name" as={Field}/>
                                        </RB.Form.Group>
                                        <RB.Form.Group className="mb-3" controlId="formBasicEmail">
                                            <RB.Form.Label>Description</RB.Form.Label>
                                            <RB.Form.Control type="text" name="description" as={Field}/>
                                        </RB.Form.Group>
                                        <RB.Form.Group id='image-link' className='mb-2'>
                                            <RB.Form.Label>Image Link</RB.Form.Label>
                                            <RB.Form.Control type='text' name="image" as={Field}/>
                                        </RB.Form.Group>
                                        <RB.Form.Group id='date' className='mb-2'>
                                            <RB.Form.Label>Date</RB.Form.Label>
                                            <RB.Form.Control type='text' required name="date" as={Field}/>
                                        </RB.Form.Group>
                                        <RB.Button className='w-100 mt-4' type='submit'>Add</RB.Button>
                                    </Form>
                                </Formik>
                            </RB.Card.Body>
                        </RB.Card>
                        <div className='w-100 text-center mt-2'>
                            Give Feedback
                        </div>
                    </RB.Col>
                </RB.Row>
            </RB.Container>
        </div>
    )
}


export default ItemForm
