import React from 'react'
import io from 'socket.io-client'
import { useAuth0 } from "@auth0/auth0-react";
export const CTX = React.createContext();





const initState = {
    General: [
        {from: '', msg:'Welcome'},
    ],
    Soprano: [
        {from: '', msg:''},
    ],
    Alto: [
        {from: '', msg:''},
    ],
    Tenor: [
        {from: '', msg:''},
    ],
    Musicians: [
        {from: '', msg:''},
    ]
}

function reducer(state, action) {
    const {from, msg, section}= action.payload;
    switch(action.type) {
     case 'RECEIVE_MESSAGE':
         return {
            ...state,
            [section]: [
                ...state[section],
                {from, msg}
            ]
            } 
    default: 
            return state  
    }
}


let socket;

function sendChatAction (value) {
    socket.emit('chat message', value);

}

export default function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initState)


    if (!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg){
            console.log({msg});
            dispatch({type: 'RECEIVE_MESSAGE', payload:msg});
          });
        
    }
    
   
const { user} = useAuth0();  
   
        return (
            <CTX.Provider value={{allChats, sendChatAction, user}}>
               {props.children} 
            </CTX.Provider>
        )
    
}
