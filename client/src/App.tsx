import React from 'react';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routing />
        </BrowserRouter>
    );
};
export default App;
