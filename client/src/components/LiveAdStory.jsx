import React, { useEffect, useState } from 'react'

const LiveAdStory = () => {
        const [data,setData]=useState()

    useEffect(() => {
        async function getData() {
            let result = await fetch('http://localhost:5000/addstory', {
            method: 'get',
            headers:{'content-type':'application/json'}
            })
            result = await result.json()
            setData(result)

        }
        getData()
    })
  return (
      <div>{data && data.map((value) => {
          return (
              <div key={value._id}>
                  <p>{value.title}</p>
                  <img src={value.thumbnail} alt="thum" />
            </div>
        )
    })}</div>
  )
}

export default LiveAdStory