import React, { useState } from 'react'
import LiveAdStory from './LiveAdStory';

const AdStory = () => {
    const [val, setVal] = useState({
        title: "",
        thumbnail: "",
        description: "",
        type:""
    })
    const changeFun = (e) => {
        const { value, name }=e.target;
        setVal((obj) => {
            return ({
                ...obj,
                [name]:value
            })
        })
    }
    const submitFun = async (e) => {
        e.preventDefault()
        let result = await fetch('http://localhost:5000/addstory', {
            method: 'post',
            body:JSON.stringify({...val}),
            headers:{'content-type':'application/json'}
        })
        result= await result.json()
        console.log(result)
    }
    return (
      <>
      <div>
          <form onSubmit={submitFun}>
              {val.title}
              <input type="text" name='title'  onChange={changeFun} placeholder='Enter the title'/>
              <input type="text" name='thumbnail' onChange={changeFun} placeholder='Enter the thumbnail' />
              <input type="text" name='description' onChange={changeFun}  placeholder='Enter the description'/>
              <input type="text" name='type'  onChange={changeFun} placeholder='Enter the type'/>
              <button>Add</button>
          </form>
          
            </div>
            <div className='liveMain'>
                <LiveAdStory/>
            </div>
            </>
  )
}

export default AdStory