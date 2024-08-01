'use client'
import axios from 'axios';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
    name: Yup.string().required('required'),
    category: Yup.string().required('required'),
    price: Yup.string().required('required'),
    review: Yup.string().required('required')
});



const Product = () => {

const router = useRouter();

   
  const ProductPurchaseForm = useFormik({
    initialValues:{
        name:'',
        category:'',
        price:'',
        review:''
    },

    onSubmit:(values, {resetForm, setSubmitting})=> {
        console.log(values);
        

        axios.post( 'http://localhost:5000/product/add', values)
.then((response) => {
  console.log(response.status);

resetForm();
toast.success('Product Selected Successfully');
router.push('/ManageProduct');

}).catch((err) => {
  console.log(err);
  if(err.response.data.code === 11000){
    toast.error('Product already added');
  }
  setSubmitting(false);
});
    },
    validationSchema : ProductSchema
  })








  return (
    <div className='max-w-[90%] mx-auto '>

<>
  {/* Hero */}
  <div className="relative overflow-hidden">
    <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
      <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
        {/* Title */}
        <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-neutral-200">
          Get Better Products for every{" "}
          <span className="text-blue-600 dark:text-blue-500">team</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 dark:text-neutral-500">
          Built on standard web technology, teams use Preline to build beautiful
          cross-platform hybrid apps in a fraction of the time.
        </p>
        {/* End Title */}
        <div className="mt-8 grid">
         
        </div>
        {/* Form */}
        <form onSubmit={ProductPurchaseForm.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-name-2"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">Product name</span>
            </label>
            <input
              type="text"
              id="name"
              onChange={ProductPurchaseForm.handleChange}
              value={ProductPurchaseForm.values.name}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter product name"
            />
            {
                ProductPurchaseForm.touched.name &&(
                    <p className='text-xs text-red-600 mt-2'>
                        {ProductPurchaseForm.errors.name}
                    </p>

                )
            }
          </div>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-email-2"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">product Category</span>
            </label>
            <input
              type="text"
              id="category"
              onChange={ProductPurchaseForm.handleChange}
              value={ProductPurchaseForm.values.category}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Category"
            />
             {
                ProductPurchaseForm.touched.category &&(
                    <p className='text-xs text-red-600 mt-2'>
                        {ProductPurchaseForm.errors.category}
                    </p>

                )
            }
          </div>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-password-2"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">Product price</span>
            </label>
            <input
              type="number"
              id="price"
              onChange={ProductPurchaseForm.handleChange}
              value={ProductPurchaseForm.values.price}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter product price"
            />
             {
                ProductPurchaseForm.touched.price &&(
                    <p className='text-xs text-red-600 mt-2'>
                        {ProductPurchaseForm.errors.price}
                    </p>

                )
            }
          </div>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-password-2"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">Product review</span>
            </label>
            <input
              type="text"
              id="review"
              onChange={ProductPurchaseForm.handleChange}
              value={ProductPurchaseForm.values.review}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Reviews"
            />
             {
                ProductPurchaseForm.touched.review &&(
                    <p className='text-xs text-red-600 mt-2'>
                        {ProductPurchaseForm.errors.review}
                    </p>

                )
            }
          </div>
          <div className="grid">
            <button
              type="submit"
              disabled={ProductPurchaseForm.isSubmitting}
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Get Product
            </button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </div>
    <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-center bg-cover" />
    {/* End Col */}
  </div>
  {/* End Hero */}
</>


    </div>
  )
}

export default Product