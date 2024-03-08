import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

const UseContextProvider = ({children}) => {
  const [user, setUser] = useState([])
  const [userid, setUserid] = useState(1)
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => result.json()).then((resp) => setUser(resp))
  },[])
  
  return (
    <UserContext.Provider value={{user, setUser, userid, setUserid}}>
      {children}
    </UserContext.Provider>
  )
}

export default UseContextProvider
