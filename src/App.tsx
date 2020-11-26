import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import { Main } from './pages';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

export default App;
