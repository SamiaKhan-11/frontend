'use client'
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateProduct = () => {


  const { id } = useParams();
  const [productList, setproductList] = useState(null);
  const router = useRouter();

  const getProductlist = async () => {
    const res = await axios.get('http://localhost:5000/product/getbyid/' + id)
    console.log(res.data);
    setproductList(res.data);

  }

  useEffect(() => {
    getProductlist();


  }, [])

  const submitForm = (values) => {
    console.log(values);

    axios.put('http://localhost:5000/product/update/' +id,values)
    .then((result) => {
      toast.success('Info updated successfully')
      router.back();
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to update')
      
    });
    
  }



  return (
    <div className='max-w-[80%] mx-auto -mt-10'>
      <h1 className='text-center font-bold text-3xl mb-4 '>Update Product</h1>
      {
        productList !== null ? (
          <Formik initialValues={productList} onSubmit={submitForm} >
            {
              (updateForm) => {
                return(
                  <form className='p-4 rounded-lg space-y-4  bg-slate-950 '  onSubmit={updateForm.handleSubmit}style={{backgroundImage:"url( 'https://preline.co/assets/svg/examples-dark/squared-bg-element.svg' )"}}>
                  <label htmlFor="name" className='sr-only' >Name</label>
                  <input
                  id='name'
                  onChange={updateForm.handleChange}
                  value={updateForm.values.name}
                  type="text" className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11 hover:bg-white/20  ' />

                  <label htmlFor="email" className='sr-only'>Email Address</label>
                  <input 
                   id='category'
                   onChange={updateForm.handleChange}
                   value={updateForm.values.category}
                  type="text" className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11 hover:bg-white/20  ' />

                  <label htmlFor="password" className='sr-only'>Password</label>
                  <input 
                   id='price'
                   onChange={updateForm.handleChange}
                   value={updateForm.values.price}
                  type="number" className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11 hover:bg-white/20 ' />

                  <label htmlFor="city" className='sr-only'>City</label>
                  <input 
                   id='review'
                   onChange={updateForm.handleChange}
                   value={updateForm.values.review}
                  type="text" className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11 hover:bg-white/20 ' />

                  <button className='bg-blue-500 text-white px-4 py-3 rounded-lg mt-5
                   sm:p-4 inline-flex justify-center items-center text-sm font-medium border border-transparent bg-white/10 hover:bg-white/20 w-[30%] ml-72'>Submit</button>
                </form>
                )
              }
            }

          </Formik>
        ) : (
          <h1>Loading...</h1>
        )
      }
     
    </div>
  )
}

export default UpdateProduct