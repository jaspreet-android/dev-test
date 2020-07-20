import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from './components/Box';

const App = _ => {

    return (
        <BrowserRouter>
            <div>
                <Box></Box>
            </div>
        </BrowserRouter>
    )
}

export default App
