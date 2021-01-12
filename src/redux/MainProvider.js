import React from "react"
import {Provider} from "react-redux"
import initialState from "./initialState"
import {createStore} from "redux"
import reducer from "./reducer"

function MainProvider ({children}){
    return (
        <Provider store={createStore(reducer,initialState)}>
            {children}
        </Provider>
    )
}

export default MainProvider