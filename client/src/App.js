import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdStory from './components/AdStory'
import Home from './components/Home'
import Stories from './components/Stories'
import About from './components/About'
import Book from './components/Book'
import Footer from './components/Footer'
import FullStory from './components/FullStory'

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
             <Route path='/addstory' element={<AdStory />} />
             <Route path='/profile' element={<h1>dashboard</h1>} />
            <Route path='/Stories/:id' element={<FullStory/>}/>
                  




            

          
        </Routes>
    <Footer/>

        
      </BrowserRouter>

    </div>
  )
}

export default App