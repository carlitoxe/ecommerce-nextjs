import { useState } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { handleRecoverySubmit } from '@/app/actions';

export default function PasswordRecoveryForm() {
  // const [email, setEmail] = useState('');
  const [isRequestSubmitted, setRequestSubmitted] = useState(false);
  const [error, setError] = useState('')

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email')
    console.log(email);
    await handleRecoverySubmit(email)
    .then(res => {
      if (res === 'Mail sent') {
        console.log('Mail sent');
        setRequestSubmitted(true)
        setError('')
      } else {
        setError('This email is not registered')
      }
    })
    .catch(error => console.error(error))
  };

  // console.log(error);
  
  return (
    <section className="bg-gray-50 dark:bg-black w-full">
      {isRequestSubmitted ? (
        <div className='text-center flex flex-col items-center gap-2 mt-5'>
          <h1 className='font-bold text-2xl px-4'>Password Recovery Requested</h1>
          <CheckCircleIcon className='w-20 h-20 text-green-600' />
          <p className='font-bold text-xl'>Please check your email.</p>
          <p className='mt-2 px-8'>
            Weve sent an email to your address with instructions on how to reset your password.
          </p>
        </div>
      ) : 
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-6">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-black dark:border-gray-700 sm:p-8">
  <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    Forgot your password?
  </h1>
  <p className="font-light text-gray-500 dark:text-gray-400">
    Dont fret! Just type in your email and we will send you a link to reset
    your password!
  </p>
  <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action={handleSubmit}>
  {error && (
                         <div className="flex items-center p-3 mb-2 text-sm text-white bg-red-600 rounded-lg" role="alert">
                         <span><ExclamationCircleIcon className='h-6 w-6 mr-2'/></span><span> {error} </span> 
                       </div>
                )}
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="your.email@gmail.com"
        required
        // onChange={e => setEmail(e.target.value)}
      />
    </div>
    <button
      type="submit"
      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Send Mail
    </button>
  </form>
</div>

    
      </div>}

    </section>

  );
};

