import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../common/header';
import Item from '../item/item';
import Error from '../common/error';

function Container() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Item />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Container;