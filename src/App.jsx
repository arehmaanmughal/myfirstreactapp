import React from 'react'
import UseContextProvider from './context/UseContextProvider'
import Routes from './routes'
const App = () => {
  return (
    <UseContextProvider>
     <Routes/>
    </UseContextProvider>
  )
}

export default App

