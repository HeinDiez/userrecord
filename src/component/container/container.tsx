import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../common/header';
import Item from '../item/item';
import ItemForm from '../item/item.form';
import Error from '../common/error';
import SmoothMotion from '../common/SmoothMotion';


function Container() {
    const [displayAlert, setAlert] = React.useState({ show: false, variant: 'success', message: ""});
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Header />}>
                        <Route index element={<Item displayAlert={displayAlert} setAlert={setAlert}/>} />
                        <Route path={'/create'} element={<ItemForm setAlert={setAlert}/>} />
                        <Route path='*' element={<Error />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Container;