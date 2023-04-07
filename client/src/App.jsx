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
import ChildStory from './components/ChildStory'
import MotivationalStory from './components/MotivationalStory'
import RandomStory from './components/RandomStory'
import FunnyStory from './components/FunnyStory'


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
            <Route path='/childstory' element={<ChildStory/>}/>
            <Route path='/motivationalstory' element={<MotivationalStory/>}/>
            <Route path='/randomstory' element={<RandomStory/>}/>
            <Route path='/funnystory' element={<FunnyStory/>}/>
          
        </Routes>

    <Footer/>

        
      </BrowserRouter>

    </div>
  )
}

export default App