import React from 'react';
import * as RB from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import * as Yup from 'yup';
import SmoothMotion from '../common/SmoothMotion';
import * as Interface from './item.interface';

const ItemForm:React.FC<Interface.Property> = (props) => {
    let { id }= useParams<'id'>()!;
    let navigate = useNavigate();
    const [defaultValue, setdefaultValue] = React.useState({id: '',name: '',description: '',image: '',date: new Date()});
    // const [date, setDate] = React.useState(new Date());
    const UserSchema = Yup.object().shape({
        name: Yup.string().required('Please enter name'), 
        description: Yup.string(), 
        image: Yup.string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Please enter a correct url!'
            ),
        date: Yup.date().required('Please enter date'), 
    });
    React.useEffect(()=>{
        if (id) {
            let raw: any = localStorage.getItem('list');
            let list = JSON.parse(raw);
            let exist = list.filter((i: Interface.User)=>i.id === id);
            console.log(exist, "check here")
            if (exist.length > 0) {
                setdefaultValue({...exist[0], date: new Date(exist[0]?.date)});
            } else {
                props.setAlert({ show: true, variant: 'error', message: "Error: ID not found"});
                setTimeout(()=>{
                    props.setAlert({ show: false, variant: 'success', message: ""});
                }, 5000);
                navigate('/create')
            }
        } else {
            navigate('/create')
        }
    },[navigate, id, props]);
    const onSubmitHandler = (values: Interface.User) => {
        if (id) {
            let raw: any = localStorage.getItem('list');
            let list = JSON.parse(raw);
            let exist = list.findIndex((i: Interface.User)=>i.id === id);
            list[exist] = {...values};
            let listValue = JSON.stringify(list);
            localStorage.setItem("list",listValue);
        } else {
            const fileUUID = uuidv4();
            let raw: any = localStorage.getItem('list');
            let list = JSON.parse(raw);
            const listValue = list? JSON.stringify([...list, {...values, id: fileUUID}]): JSON.stringify([{...values, id: fileUUID}]);
            localStorage.setItem("list",listValue);
        }
        navigate('/')
        props.setAlert({ show: true, variant: 'success', message: "User Added Successfully"});
        setTimeout(function(){
            props.setAlert({ show: false, variant: 'success', message: ""});
        }, 5000);
    }
    return (
    <SmoothMotion>
        <div className='m-4'>
            <RB.Container>
                <RB.Row className="justify-content-md-center">
                    <RB.Col xl="auto">
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
                    </RB.Col>
                </RB.Row>
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
                                <Formik enableReinitialize initialValues={defaultValue} onSubmit={onSubmitHandler} validationSchema={UserSchema}>
                                {({ errors, touched }) => (
                                    <Form>
                                        <RB.Form.Label className='text-left'>Name</RB.Form.Label>
                                        <RB.Form.Group id='name' className='mb-2'>
                                            <RB.Form.Control type='text' name="name" as={Field}/>
                                            {errors.name && touched.name ? (
                                                <RB.Form.Text className="text-muted">
                                                    {errors.name}
                                                </RB.Form.Text>
                                            ) : null}
                                        </RB.Form.Group>
                                        <RB.Form.Group className="mb-3" controlId="formBasicEmail">
                                            <RB.Form.Label className='text-color-error'>Description</RB.Form.Label>
                                            <RB.Form.Control type="text" name="description"as={Field}/>
                                            {errors.description && touched.description ? (
                                                <RB.Form.Text className="text-muted">
                                                    {errors.description}
                                                </RB.Form.Text>
                                            ) : null}
                                        </RB.Form.Group>
                                        <RB.Form.Group id='image-link' className='mb-2'>
                                            <RB.Form.Label>Image Link</RB.Form.Label>
                                            <RB.Form.Control type='text' name="image" as={Field}/>
                                            {errors.image && touched.image ? (
                                                <RB.Form.Text className="text-muted">
                                                    {errors.image}
                                                </RB.Form.Text>
                                            ) : null}
                                        </RB.Form.Group>
                                        <RB.Form.Group id='date' className='mb-2'>
                                            <RB.Form.Label>Date</RB.Form.Label>
                                            <div>
                                                <Field className="form-control w-100" as={DatePicker} wrapperClassName="w-100" name="date" selected={defaultValue.date} onChange={(date:any) => setdefaultValue({...defaultValue, date})}></Field>
                                            </div>
                                            {/* <div>
                                                <DatePicker wrapperClassName="w-100" className='form-control' selected={date} onChange={(d:any) => setDate(d)} />
                                            </div> */}
                                            {errors.date && touched.date ? (
                                                <RB.Form.Text className="text-muted">
                                                    {errors.date}
                                                </RB.Form.Text>
                                            ) : null}
                                        </RB.Form.Group>
                                        <RB.Button className='w-100 mt-4' type='submit'>{id? 'Update': 'Add'}</RB.Button>
                                    </Form>
                                )}
                                    
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
    </SmoothMotion>
        
    )
}


export default ItemForm
