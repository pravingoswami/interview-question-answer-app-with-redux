import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { StartGetQuestion } from './actions/questionsAction';
import { StartGetSections } from './actions/sectionsAction';
import { StartGetTag } from './actions/tagsAction';
import { StartGetTagging } from './actions/taggingsAction';
// import * as serviceWorker from './serviceWorker';

const  store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(StartGetQuestion())
store.dispatch(StartGetSections())
store.dispatch(StartGetTag())
store.dispatch(StartGetTagging())

console.log(store.getState())
const jsx =(<Provider store = {store} >
                <App/> 
            </Provider>)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
