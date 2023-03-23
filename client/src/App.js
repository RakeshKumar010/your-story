import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdStory from './components/AdStory'
import Home from './components/Home'
import Stories from './components/Stories'

const App = () => {
  return (
    <div className='appDiv'>

      <BrowserRouter>

        <Nav />
        <Routes>
          
            

            <Route path='/' element={<Home/>} />
            <Route path='/Books' element={<h1>Books</h1>} />
            <Route path='/Stories' element={<Stories/>} />
            <Route path='/About' element={<h1>About</h1>} />
            <Route path='/Contact' element={<h1>Contact</h1>} />
             <Route path='/addstory' element={<AdStory />} />
             <Route path='/dashboard' element={<h1>dashboard</h1>} />
                  




            

          
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App