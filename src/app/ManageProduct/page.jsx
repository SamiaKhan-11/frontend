'use client'
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProduct = () => {

  const runOnce = useRef(false);

  const [Productlist, setProductlist] = useState([])

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/product/getall')
    console.log(res.data);
    setProductlist(res.data);
  }


  const deleteProduct = (id) => {
    axios.delete('http://localhost:5000/product/delete/' + id)
      .then((response) => {
        toast.success(' Product Deleted Successfully')
        fetchProducts();
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to delete product');

      });
  }

  useEffect(() => {
    if (!runOnce.current) {
      fetchProducts();
      runOnce.current = true;
    }

  }, [])

  const displayproduct = () => {
    return (

      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 mb-10">
        <thead className="bg-gray-200 dark:bg-neutral-800">
          <tr>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Product
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Category
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Review
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Date
                </span>
              </div>
            </th>
            <th colspan={2} scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  {/* Status */}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">

          {
            Productlist.map(product => {
              return (
                <tr key={product._id} className="bg-black hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <td className="size-px whitespace-nowrap align-top">
                    <a className="block p-4" href="#">
                      <div className="flex items-center gap-x-4">

                        <img
                          className="shrink-0 size-[38px] rounded-3xl w-12 "
                          src="https://i.pinimg.com/564x/98/6f/00/986f0030e53505927d45fde3c2115af3.jpg"

                        />


                        <div>
                          <span className="block text-sm font-semibold text-gray-400 dark:text-neutral-200">
                            {product.name}
                          </span>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className="size-px whitespace-nowrap align-top">
                    <a className="block p-6" href="#">
                      <div className="flex items-center gap-x-3">

                        <div className="grow">
                          <span className="block text-sm font-semibold text-gray-400 dark:text-neutral-200">
                            {product.category}
                          </span>

                        </div>
                      </div>
                    </a>
                  </td>
                  <td className="h-px w-72 min-w-72 align-top">
                    <a className="block p-4" href="#">
                      <div className="flex gap-x-1 mb-2">

                      </div>
                      <span className="block text-sm font-semibold text-gray-400 dark:text-neutral-200 ">
                        {product.review}
                      </span>

                    </a>
                  </td>
                  <td className="size-px whitespace-nowrap align-top">
                    <a className="block p-6" href="#">
                      <span className="text-sm text-gray-400 dark:text-neutral-400">
                        {new Date(product.createdAt).toDateString()}
                      </span>
                    </a>
                  </td>

                  <td className="size-px whitespace-nowrap align-top">
                    <Link className="block p-6" href={"/UpdateProduct/"+product._id} >
                      <button
                        className="py-2 px-4 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">

                        Edit
                      </button>
                    </Link>
                  </td>

                  <td className="size-px whitespace-nowrap align-top">
                    <a className="block p-6" href="#">
                      <button onClick={() => { deleteProduct(product._id) }}
                        className="py-2 px-4 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">

                        Remove
                      </button>
                    </a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    )
  }

  return (
    <div className='max-w-[80%] mx-auto -mt-10 '>
      <h1 className='text-3xl text-center font-bold mb-4'>Manage Products</h1>
      {displayproduct()}
    </div>
  )
}

export default ManageProduct