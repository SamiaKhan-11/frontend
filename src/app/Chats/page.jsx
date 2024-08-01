'use client';
import React, { useState } from 'react'

const Chatpage = () => {

    const [message, setMessage] = useState([]);
    console.log(message);

    const Addmessage = (e) => {
        if (e.code === 'Enter') {
            const newMessage = { text: e.target.value, completed: false, createdAt: new Date() }
            setMessage([...message, newMessage])
        }

    }
    return (
        <div className='-mt-16'>
            <p className='text-4xl font-bold text-center m-2 '> Welcome to Chats</p>
            <div className='border-2 bg-slate-600 max-w-[50%] mx-auto p-2 h-5/6 mt-1'>

                <div className='flex p-1 gap-4 bg-slate-200 rounded-md'>
                    <span className='text-5xl rounded-full bg-black ml-2 h-14'>&#128102;</span>
                    <h1 className='text-center font-bold text-2xl mt-2'> Alex</h1>
                </div>

                <div className='p-2 bg-slate-200 mt-2 h-72 overflow-y-scroll' style={{

                    backgroundImage: "url('https://t3.ftcdn.net/jpg/01/99/79/88/360_F_199798806_PAFfWGapie6Mk8igqKHbhIIa9LwQcvQr.jpg')"

                }}
                >

                    <div className='flex gap-2 mb-2 block'>
                        <button className='p-1 rounded-full w-fit bg-slate-400'></button>
                        <p className='p-2 bg-slate-500 rounded-full w-fit '> Hello</p>
                    </div>


                    <div className=' h-44'   >
                        {
                            message.map((text, index) => {
                                return <div key={index} className='p-2 m-2 w-fit bg-slate-500 rounded-full text-end'>
                                    <p className={text.completed ? 'line-through' : ''}> {text.text}</p>
                                </div>
                            })
                        }

                    </div>

                    <span className='flex gap-1 fixed w-3/5 '>

                        <button>
                            <img src="https://cdn-icons-png.flaticon.com/128/907/907717.png" alt="" className=' h-7 w-7 mt-2 rounded-full bg-white ' />
                        </button>

                        <input type="text" placeholder='Type a text' className='w-2/3 bg-slate-500 text-white rounded-full border-2 p-2   ' onKeyDown={Addmessage} />

                        <button className=''><img src="https://cdn-icons-png.flaticon.com/128/7358/7358439.png" alt="" className='h-10 w-10 mt-1 bg-green-300 rounded-lg p-2' /></button>
                    </span>


                </div>

            </div>














            {/* <div className=' bg-no-repeat'
        //  style={{ backgroundImage:"url('https://cdn-icons-png.flaticon.com/128/7358/7358439.png')"}}
        >
            <img src="https://cdn-icons-png.flaticon.com/128/7358/7358439.png" alt="" className='h-10'/>

      
        </div> */}


        </div>
    )
}

export default Chatpage