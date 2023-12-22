'use client'

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Success() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(3); // Initial countdown value

  useEffect(() => {
    // Redirect to the login page after a delay (e.g., 3 seconds)
  // Redirect to the login page after the countdown reaches 0
    const countdownTimeout = setTimeout(() => {
        router.push('/sign-in');
    }, 3000); // Total countdown time, adjust as needed

    const redirectTimer = setInterval(() => {
        setCountdown((prevCount: number) => prevCount - 1);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => {
        clearInterval(redirectTimer);
        clearTimeout(countdownTimeout);
    };
  }, [router]);

  return (
    <div className="text-center flex flex-col justify-center items-center mt-5">
      <h1 className="font-bold text-2xl">Registration Successful!</h1>
      <CheckCircleIcon className="w-24 h-24 text-green-600 mt-2" />
      <p className="mt-2 text-gray-300">Redirecting to login page in {countdown} seconds...</p>
      <p className="font-bold text-xl mt-2">Or</p>
      <Link href='/sign-in' className="mt-3 text-black hover:text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 text-center dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
    </div>
  );
}