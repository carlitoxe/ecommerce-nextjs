import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link"
import { useContext, useState } from "react";
import { signIn } from "@/app/actions";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

interface Credentials {
  email: string;
  password: string;
}

export default function Login() {
  // console.log(signIn);
  const [errorLogin, setErrorLogin] = useState<string>('')
  const router = useRouter()

  // const [credentials, setCredentials] = useState<Credentials>({
  //   email: '',
  //   password: '',
  // });
  // const auth = useAuth();

  // const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
  //   setCredentials({
  //     ...credentials,
  //     [target.name]: target.value,
  //   });
  // };
  const handleLogin = async (formData: FormData) => {
    const credentials = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(credentials)
    await signIn(credentials)
    .then((res) => {
      if (res !== 'Unauthorized') {
        const { user, token } = res
        Cookies.set('user', JSON.stringify(user), { expires: 5 })
        Cookies.set('token', token, { expires: 5 })
        document.location.href="/"
      } else {
        setErrorLogin('Incorrect email or password')
      }
    })
    
    // try {
    //   const response = await fetch('https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       accept: '*/*',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(credentials),
    //   });
      
      
    //   if (response.ok) {
    //     const { token } = await response.json();
    //     console.log(token);
        
    //     // Save the token securely (e.g., in localStorage or a secure cookie)
    //     // onLogin(token);
    //   } else {
    //     const { message } = await response.json();
    //     // setErrorLogin(message)
    //     // Handle login failure
    //     console.error(`Login failed: ${message}`);
    //   }
    // } catch (error) {
    //   console.error('An error occurred during login:', error);
    // }
  };
  
    return (
        <section className="bg-gray-50 dark:bg-black w-full">
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
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action={handleLogin}>
                {errorLogin && (
                         <div className="flex items-center p-3 mb-2 text-sm text-white bg-red-600 rounded-lg" role="alert">
                         <span><ExclamationCircleIcon className='h-6 w-6 mr-2'/></span><span> {errorLogin} </span> 
                       </div>
                )}
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="/password-recovery"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                  // onClick={handleLogin}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/sign-up"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    )
}