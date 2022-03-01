import React from 'react';
import * as RB from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Error:React.FC = (props: any) => {
    const [time, setTime] = React.useState(5);
    let navigate = useNavigate();
    let interval = setInterval(() => {
        let oras = time;
        setTime(--oras);
        if (time === 1) { 
            clearInterval(interval); 
            navigate("/");
        }
    }, 1000)
    return (
        <RB.Container>
            <RB.Row>
                <RB.Col className='text-center'>
                    <h1 className="display-4 color-blue" style={{ color: "red"}}>Page Not Found</h1>
                </RB.Col>
            </RB.Row>
            <RB.Row>
                <RB.Col className='text-center'>You will be redirected in {time} or click on this <Link to="/">link</Link></RB.Col>
            </RB.Row>
        </RB.Container>
    )
}

export default Error
