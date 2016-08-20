import React from 'react';//eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import HouseResource from './components/houseComponents/HouseResource';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'; //eslint-disable-line no-unused-vars
import {requestHouseList} from './actions/houselist';
import rootReducer from './reducers/houseResource';


const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(requestHouseList());

render(
  <Provider store={store}>
    <HouseResource/>
  </Provider>,
  document.getElementById('houselist')
);