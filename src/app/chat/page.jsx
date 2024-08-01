'use client';
import React, { useState } from 'react'
// import classes from './chat.module.css';
import Image from './image2.png';
import Link from 'next/link';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Chats = () => {



  const [message, setmessage] = useState([]);
  console.log(message);


  const AddMessage = (e) => {

    if (e.code === 'Enter') {
      // console.log(e.target.value);
      if (!e.target.value) {
        alert('You have to enter a message');
        return;
      }

      const newTask = { text: e.target.value, completed: false, createdAt: new Date() };
      setmessage([...message, newTask]);
    }
  }

 



  // ReactDOM.render(element, document.body)


  return (
    <div className=''>

<span className='space-x-1'>
      <h1 className='text-center font-bold text-3xl -mt-16 py-3 mb-3'>Welcome to Chats
        {
          <button className=' text-2xl bg-slate-300 p-1 rounded-full ml-2 ' >
            <Link href="/Chats">&#128516; </Link></button>
        }

      </h1>
      </span>


      <div className=''>

        <div className='max-w-[60%] mx-auto overflow-y-scroll h-64 overflow-y-hidden bg-slate-300 '
          style={{
            
             backgroundImage: "url('https://t3.ftcdn.net/jpg/01/99/79/88/360_F_199798806_PAFfWGapie6Mk8igqKHbhIIa9LwQcvQr.jpg')"
            
          }} 
          
          >
            {/* { <img src={Image.src} alt="" className='' />}  */}

          {
            message.map((val, index) => {
              return <div key={index} className='p-2 '>


                <p className={val.completed ? 'line-through' : ''}> {val.text}

                </p>
              </div>
            })

          }

        </div>





        <footer className='bg-black h-36'>
          <div className=' mt-9 max-w-[70%] mx-auto '>
            <div className=' p-4 flex gap-2 '>
              <input type="text" className='border-2 rounded border-green-200 w-full p-3 mt-4 bg-black text-white ' placeholder='Type a Message'

                onKeyDown={AddMessage}
              />
              {<button onClick={() => { AddMessage(index) }}
                className=' bg-green-500 text-white rounded p-2 h-10 mt-5 '>
                {/* <FontAwesomeIcon icon={faPaperPlane} />  */}Send
              </button>}
            </div>

          </div>


        </footer>



      </div>

    </div>

  )
}

export default Chats