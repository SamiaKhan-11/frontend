'use client';
import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Email is Required'),

  password: Yup.string().required('Password is Required')
    .matches(/[a-z]/, 'must include lowercase')
    .matches(/[A-Z]/, 'must include uppercase')
    .matches(/[0-9]/, 'must include numbers')
    .matches(/[\W]/, 'must include special characters')


})



const Login = () => {

  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: (values) => {
      console.log(values);

      axios.post( 'http://localhost:5000/user/authenticate', values)
      .then((response) => {
        toast.success('Login Success');

        localStorage.setItem('token' , response.data.token)

        
      }).catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        
      });
    },

    validationSchema: SignupSchema

  })


  return (
    // <div className='max-w-[40%] mx-auto'>

    //   <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
    //     <div className="p-4 sm:p-7">
    //       <div className="text-center">
    //         <h1 className="block text-2xl font-bold text-gray-800 dark:text-white ">
    //           Log in
    //         </h1>

    //       </div>
    //       <div className="mt-5">
    //         <button
    //           type="button"
    //           className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800
    //           bg-blue-400
    //           "
    //         >
    //           {/* <svg
    //             className="w-4 h-auto"
    //             width={46}
    //             height={47}
    //             viewBox="0 0 46 47"
    //             fill="none"
    //           >
    //             <path
    //               d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
    //               fill="#4285F4"
    //             />
    //             <path
    //               d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
    //               fill="#34A853"
    //             />
    //             <path
    //               d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
    //               fill="#FBBC05"
    //             />
    //             <path
    //               d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
    //               fill="#EB4335"
    //             />
    //           </svg> */}
    //           <p className='text-5xl'>&#9786; </p>
    //         </button>
    //         <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">

    //         </div>
    //         {/* Form */}
    //         <form onSubmit={LoginForm.handleSubmit} >
    //           <div className="grid gap-y-4">

    //             {/* Form Group */}
    //             <div>
    //               <label
    //                 htmlFor="username"
    //                 className="block text-sm mb-2 dark:text-white"
    //               >
    //                 Username
    //               </label>
    //               <div className="relative">
    //                 <input
    //                   type="text"
    //                   id="username"
    //                   onChange={LoginForm.handleChange}
    //                   value={LoginForm.values.username}
    //                   className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                   required=""
    //                   aria-describedby="email-error"
    //                 />
    //                 <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
    //                   <svg
    //                     className="size-5 text-red-500"
    //                     width={16}
    //                     height={16}
    //                     fill="currentColor"
    //                     viewBox="0 0 16 16"
    //                     aria-hidden="true"
    //                   >
    //                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    //                   </svg>
    //                 </div>
    //               </div>
    //               {/* <p className="hidden text-xs text-red-600 mt-2" id="email-error">
    //           Please include a valid email address so we can get back to you
    //         </p> */}
    //               {
    //                 LoginForm.touched.username && (

    //                   <p className=" text-xs text-red-600 mt-2" id="email-error">
    //                     {LoginForm.errors.username}
    //                   </p>
    //                 )
    //               }
    //             </div>
    //             {/* End Form Group */}
    //             {/* Form Group */}

    //             {/* Form Group */}
    //             <div>
    //               <label
    //                 htmlFor="email"
    //                 className="block text-sm mb-2 dark:text-white"
    //               >
    //                 Email address
    //               </label>
    //               <div className="relative">
    //                 <input
    //                   type="email"
    //                   id="email"
    //                   name="email"
    //                   className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                   required=""
    //                   aria-describedby="email-error"
    //                 />
    //                 <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
    //                   <svg
    //                     className="size-5 text-red-500"
    //                     width={16}
    //                     height={16}
    //                     fill="currentColor"
    //                     viewBox="0 0 16 16"
    //                     aria-hidden="true"
    //                   >
    //                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    //                   </svg>
    //                 </div>
    //               </div>
    //               <p className="hidden text-xs text-red-600 mt-2" id="email-error">
    //                 Please include a valid email address so we can get back to you
    //               </p>
    //             </div>
    //             {/* End Form Group */}
    //             {/* Form Group */}
    //             <div>
    //               <div className="flex justify-between items-center">
    //                 <label
    //                   htmlFor="password"
    //                   className="block text-sm mb-2 dark:text-white"
    //                 >
    //                   Password
    //                 </label>
    //                 <a
    //                   className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
    //                   href="../examples/html/recover-account.html"
    //                 >
    //                   Forgot password?
    //                 </a>
    //               </div>
    //               <div className="relative">
    //                 <input
    //                   type="password"
    //                   id="password"
    //                   name="password"
    //                   className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //                   required=""
    //                   aria-describedby="password-error"
    //                 />
    //                 <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
    //                   <svg
    //                     className="size-5 text-red-500"
    //                     width={16}
    //                     height={16}
    //                     fill="currentColor"
    //                     viewBox="0 0 16 16"
    //                     aria-hidden="true"
    //                   >
    //                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    //                   </svg>
    //                 </div>
    //               </div>
    //               <p className="hidden text-xs text-red-600 mt-2" id="password-error">
    //                 8+ characters required
    //               </p>
    //             </div>
    //             {/* End Form Group */}
    //             {/* Checkbox */}
    //             <div className="flex items-center">
    //               <div className="flex">
    //                 <input
    //                   id="remember-me"
    //                   name="remember-me"
    //                   type="checkbox"
    //                   className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
    //                 />
    //               </div>
    //               <div className="ms-3">
    //                 <label htmlFor="remember-me" className="text-sm dark:text-white">
    //                   Remember me
    //                 </label>
    //               </div>
    //             </div>
    //             {/* End Checkbox */}
    //             <button
    //               type="submit"
    //               className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    //             >
    //               Sign in
    //             </button>
    //           </div>
    //         </form>
    //         {/* End Form */}
    //       </div>
    //     </div>
    //   </div>



    // </div>



    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  -mt-20">
      <div className="mx-auto max-w-lg shadow-2xl ">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
          inventore quaerat mollitia?
        </p>

        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={LoginForm.handleSubmit} >
          <p className="text-center text-lg font-medium">Login to your account</p>

          {/* <div>
            <label htmlFor="username" className="sr-only">Username</label>

            <div className="relative"  >

              <div className='h-5 w-5 text-2xl'>
              </div>


              <input
                type="text"
                id="username"
                onChange={LoginForm.handleChange}
                value={LoginForm.values.username}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter username"


              />

              {<span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                <img src="https://cdn-icons-png.flaticon.com/128/14608/14608342.png" alt="" className='absolute mt-8 -ml-2  place 
                p-1.5 opacity-60  ' />

              </span>}
            </div>
            {
              LoginForm.touched.username && (
                <p className='text-xs text-red-600 mt-2'>{LoginForm.errors.username}</p>
              )
            }
          </div> */}

          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                id='email'
                onChange={LoginForm.handleChange}
                value={LoginForm.values.email}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
            {
              LoginForm.touched.email && (
                <p className='text-xs text-red-600 mt-2'> {LoginForm.errors.email} </p>
              )
            }
          </div>


          <div>
            <label htmlFor="password" className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                id='password'
                onChange={LoginForm.handleChange}
                value={LoginForm.values.password}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            {
              LoginForm.touched.password && (
                <p className='text-xs text-red-600 mt-2'>{LoginForm.errors.password}</p>
              )
            }
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Log in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <a className="underline" href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>


  )
}

export default Login