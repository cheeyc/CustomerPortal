import rootReducer from './reducers/Reducer';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({reducer: rootReducer});
