import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdStory from './components/AdStory'
import Home from './components/Home'
import Stories from './components/Stories'
import About from './components/About'
import Book from './components/Book'

const App = () => {
  return (
    <div className='appDiv'>

      <BrowserRouter>

        <Nav />
        <Routes>
          
            

            <Route path='/' element={<Home/>} />
            <Route path='/Books' element={<Book/>} />
            <Route path='/Stories' element={<Stories/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<h1>Contact</h1>} />
             <Route path='/addstory' element={<AdStory />} />
             <Route path='/dashboard' element={<h1>dashboard</h1>} />
                  




            

          
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App