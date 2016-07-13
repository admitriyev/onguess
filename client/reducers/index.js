import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import comments from './comments';

const rootReducer = combineReducers({projects, comments, routing: routerReducer });

export default rootReducer;
