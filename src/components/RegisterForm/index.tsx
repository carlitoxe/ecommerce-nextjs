'use client'

import Link from "next/link"
import { signUp } from "@/app/actions"
import { useState } from "react"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const [errorRegistration, setErrorRegistration] = useState<string>('')
  const router = useRouter()

  const notify = () => {
    toast.success("Registration completed succesfully. You can login now.", {
      theme: 'dark'
    });
  }

  const notifyError = (error: string) => {
    toast.error(`${error}`, {
      theme: 'dark'
    });
  }
    
    const handleSubmit = async (formData: FormData) => {
        const data = {
          name: formData.get('firstName'),
          lastName: formData.get('lastName'),
          phone: formData.get('phone'),
          user: {
            email: formData.get('email'),
            password: formData.get('password'),
          }
        }
        // console.log(data)
        await signUp(data)
        .then((res) => {
          console.log(res);
            if (res.message || res.errors) {
              const { message, errors } = res
              console.log(message, errors);
              if (errors[0].message.includes('email must be unique')) {
                notifyError('Registration Error. This email is already registered, try with another.')
                setErrorRegistration('Registration Error. This email is already registered, try with another.')
              } else {
                setErrorRegistration('Registration Error.')
              }
            } else {
              notify()
              router.push('/sign-up/success')
            }
          
    })
  }

    return (
        <section className="bg-gray-50 dark:bg-black w-full">
          <ToastContainer position="bottom-right" />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-6">
          <Link 
            href='/'
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Shopi
          </Link>   
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6" action={handleSubmit}>
                {errorRegistration && (
                         <div className="flex items-center p-3 mb-2 text-sm text-white bg-red-600 rounded-lg" role="alert">
                         <span><ExclamationCircleIcon className='h-6 w-6 mr-2'/></span><span> {errorRegistration} </span> 
                       </div>
                )}
                           <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Charles"
                    // value={credentials.email}
                    // onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Dickens"
                    // value={credentials.email}
                    // onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@gmail.com"
                    // value={credentials.email}
                    // onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    minLength={8}
                    // value={credentials.password}
                    // onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+14324234535"
                    // value={credentials.email}
                    // onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                  // onClick={handleLogin}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}
