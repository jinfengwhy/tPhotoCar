import { combineReducers } from 'redux';
import photo from './photo';
import autho from './autho';
import price from './price';

export default combineReducers({
  photo,
  autho,
  price
});
