import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState={}) {
 return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
}