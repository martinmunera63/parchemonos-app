import React, { useState, createContext, useEffect } from 'react'

const initialState = {
    name: '',
    email: '',
    identification: '',
    phone: '',
    isAuthenticated: false
}
export const UserContext = createContext(initialState)

export const UserContextStore = (props) => {

    useEffect(() => {
        checkLocalToken ()
      }, [])
    
    const checkLocalToken = ()  => {
        const token = localStorage.getItem('TOKEN')
        if(token) {
            setUser({isAuthenticated:true})
        }
    }
    const [user, setUser] = useState(initialState)
    return (
        <UserContext.Provider value={{user, setUser}}>
        { props.children }
        </UserContext.Provider>
    )
}
