const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore;
const combainereducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()

const BUY_CAKE =  'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// const initalState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20
// }

const initalStateCake ={
    numOfCakes : 10
}

const initalStateIceCream ={
    numOfIceCreams : 20
}

// const reducer = (state = initalState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const Cakereducer =(state = initalStateCake,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }

}

const IceCreamreducer =(state = initalStateIceCream,action)=>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }

}

const reducer = combainereducers({
    cake: Cakereducer,
    iceCream: IceCreamreducer
})
const store = createStore(reducer,applyMiddleware(logger))

console.log('Initial State',store.getState());
//const unSubscribe = store.subscribe(()=> console.log('Update state',store.getState()))
const unSubscribe = store.subscribe(()=> {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unSubscribe()