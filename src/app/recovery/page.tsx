'use client'

import { useState } from "react";
import { handleResetSubmit } from "../actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Recovery() {
    const [error, setError] = useState('');
    const [isResetSubmitted, setResetSubmitted] = useState(false);
    const searchParams = useSearchParams()
 
    const token = searchParams.get('token')
    console.log(token);

    const handleSubmit = async (formData: FormData) => {
        const password = formData.get('password')
        const confirmPassword = formData.get('confirm-password');
        if (password !== confirmPassword) {
            setError('Passwords must be the same')
            console.error('Passwords are not the same')
            return
        } 
        await handleResetSubmit(token, password)
            .then(res => {
              if (res !== 'Unauthorized') {
                console.log(res);
                
                console.log('Success');
                setResetSubmitted(true)
                setError('')
              } else {
                setError('Error changing the password')
              }
            })
            .catch(error => console.error(error))
   
      };
    

    return (
        <section className="bg-gray-50 dark:bg-transparent mt-8 w-full">
{isResetSubmitted ? (
  <div className='text-center flex flex-col items-center gap-2'>
          <h1 className='font-bold text-2xl px-4'>Password Reset Success</h1>
          <CheckCircleIcon className='w-20 h-20 text-green-600' />
          <p className='font-bold text-xl'>You can Login now</p>
      <Link href='/sign-in' className="mt-2 text-black hover:text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 text-center dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
    {/* <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      />
      Flowbite
    </a> */}
    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-transparent dark:border-gray-700 sm:p-8">
      <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Change Password
      </h2>
      <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action={handleSubmit}>
      {error && (
                         <div className="flex items-center p-3 mb-2 text-sm text-white bg-red-600 rounded-lg" role="alert">
                         <span><ExclamationCircleIcon className='h-6 w-6 mr-2'/></span><span> {error} </span> 
                       </div>
                )}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            minLength={8}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            minLength={8}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start">
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Reset password
        </button>
      </form>
    </div>
  </div>
      )}
  
</section>

    )
}