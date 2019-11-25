import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'

import reducer from './reducer';
import saga from './saga';

export const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    guestsState: reducer,
    form: formReducer,
});

export default function configureStore() {
    const middlewares = [
        sagaMiddleware
    ];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Prevent recomputing reducers for `replaceReducer`
                shouldHotReload: false,
            })
            : compose;

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    const store = createStore(
        rootReducer,
        composeEnhancers(...enhancers)
    );

    sagaMiddleware.run(saga);

    return store;
}
