import React from 'react'
import {Routes,Route} from "react-router-dom"
import AddTask from '../Pages/AddTask'
import Home from '../Pages/Home'
import RenderTask from '../Pages/RenderTask'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
           <Route path='/addTask' element={<AddTask/>}/>
           <Route path='/allTask' element={<RenderTask/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes