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
import Profile from './components/Profile'
import UpdateStories from './components/UpdateStories'
import Top from './components/Top'

const App = () => {
  return (
    <div className='appDiv'>

      <BrowserRouter>

        <Nav />
    <Top/>

        <Routes>
          
            

            <Route path='/' element={<Home/>} />
            <Route path='/Books' element={<Book/>} />
            <Route path='/Stories' element={<Stories/>} />
            <Route path='/About' element={<About/>} />
             <Route path='/addstory' element={<AdStory />} />
             <Route path='/profile' element={<Profile/>} />
            <Route path='/Stories/:id' element={<FullStory/>}/>
            <Route path='/updatestory/:id' element={<UpdateStories/>}/>
                  




            

          
        </Routes>
    <Footer/>

        
      </BrowserRouter>

    </div>
  )
}

export default App