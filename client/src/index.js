import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer_1';
import {createStore} from "redux";

const store = createStore(reducer,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(`스토어겟스테이`+store.getState());

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root')
);