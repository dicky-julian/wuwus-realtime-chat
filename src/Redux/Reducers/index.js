import { combineReducers } from 'redux';
import auth from './auth';
import config from './config';
import user from './user';
import room from './room';

export default combineReducers({ auth, config, user, room });