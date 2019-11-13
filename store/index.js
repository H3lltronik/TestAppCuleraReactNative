import {createStore} from 'redux';
import Reducers from './reducers'

export default configureStore = () => {
    let store = createStore(Reducers, [])
    return store
}

