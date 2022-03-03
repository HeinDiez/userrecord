import React from 'react';
import * as RB from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import * as Yup from 'yup';

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

const UserSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter website'),
});

const ItemForm:React.FC<Property> = (props) => {
    let navigate = useNavigate();
    const [time, setTime] = React.useState(5);
    const [picker, onOpenDatePicker] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    const onSubmitHandler = (values: Values) => {
        const fileUUID = uuidv4();
        let raw: any = localStorage.getItem('list');
        let list: Values[] = JSON.parse(raw);
        console.log(values, "test")
        const listValue = list? JSON.stringify([...list, {...values, id: fileUUID, date}]): JSON.stringify([{...values, id: fileUUID, date}]);
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
                                <div className="d-flex">
                                    <h2 className='text-left font-weight-bold'>User</h2>
                                    <div className="m-auto p-2"/>
                                    <RB.CloseButton className='mt-1' onClick={()=>navigate('/')} />
                                </div>
                            </RB.Card.Header>
                            <RB.Card.Body>
                                <Formik initialValues={defaultValues} onSubmit={onSubmitHandler} validationSchema={UserSchema}>
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
                                            <div>
                                                <DatePicker wrapperClassName="w-100" className='form-control' selected={date} onChange={(d:any) => setDate(d)} />
                                            </div>
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
