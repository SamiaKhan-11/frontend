import React from 'react'
import myImage from './vercel.svg';
const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'red' , fontSize:'40px', textAlign:'center' }}>Home Page</h1>


    <hr />

    <input type="text" />


    <button className='p-3 rounded-md bg-blue-500 text-white m-5'>Learn More</button>

<img src="/image.png" alt="" />
<img src={myImage.src} alt="" />
    </div>
    
  )
}

export default Home;
