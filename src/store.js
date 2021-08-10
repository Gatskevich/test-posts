
import { createStore , combineReducers} from 'redux';
import reducer from './reducers';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  reducer,
  form: formReducer
})
const store = createStore(rootReducer);

export default store;