import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <>
      <div className='homeMain'>
          <div className="div1">
              <div className="weare">
                  <p>We're So Excited...</p>
                  <h1>To Listen Your Story!</h1>
                  <div className="btnHome">
                  <Link to='/Stories' className='readtopstories'>Read Top Stories</Link>
                  <Link to='/About' className='whoareyou'>who are you?</Link>
                  </div>
                  
              </div>

          </div>
          <div className="div2">
              <img src="https://shareherestory.vercel.app/static/media/share.b57875c89278c3c66fc4.png" alt="homepage" />
          </div>
          
            </div>
            <div className="homeContainer">
                <div className="homeContainerdiv1">
                    <p className='topStories'>Top Motivational Stories</p>
                    {/* <p className='topStories'>Top Short Stories</p> */}
                    <img src="https://cdn.wallpapersafari.com/65/11/wrexsb.jpg" alt="topStories" />
                </div>
                <div className="homeContainerdiv2">
                    <p className='topmotivation'>Top Motivational Stories</p>
                    <img src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?cs=srgb&dl=pexels-keegan-houser-1478685.jpg&fm=jpg" alt="topStories" />

                </div>
                <div className="homeContainerdiv3">
                    <p className='funnystories'>Funny Stories</p>
                    <img src="https://wallpaperaccess.com/full/504272.jpg" alt="topStories" />

                </div>
                <div className="homeContainerdiv4">
                    <p className='random'>Random Stories</p>
                    <img src="https://wallpapercave.com/wp/wp7885983.jpg" alt="topStories" />

                </div>
            </div>
            </>
  )
}

export default Home