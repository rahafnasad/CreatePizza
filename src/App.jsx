import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from './Home'
import Cheese from './Cheese'
import PizaaContextProvider from './PizzContext'
import Final from './Final'
import FinalShow from './FinalShow'
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<Home/>,
    children:[
      {
        index:true,
        element:<Component/>
      },
      ,{
        path:'/cheese',
        element:<Cheese/>
      },
      {
        path:'/final',
        element:<Final/>
      },
        {
        path:'/filalShow',
        element:<FinalShow/>
      },
    ]
  },
 
  ])
  return (
    <PizaaContextProvider>
      <RouterProvider router={router}/>

    </PizaaContextProvider>

  )
}

export default App
