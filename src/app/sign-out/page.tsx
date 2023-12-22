'use client'

import { useContext, useState } from "react";
import Login from "@/components/Login";
import { AuthContext } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function SignOut() {
  // const [token, setToken] = useState(null);
  // const [errorLogin, setErrorLogin] = useState<string>('')
  const { logout } = useContext(AuthContext);
  const router = useRouter()
  const handleLogout = () => {
    logout()
    router.push('/');
  }
  // const handleLogin = (newToken: string) => {
  //   // Save the token in state or in a global state management solution (e.g., Redux)
  //   setToken(newToken);
  // };

  // const handleLogout = () => {
  //   // Remove the token from state or storage on logout
  //   setToken(null);
  // };

    return (
        <section className="mt-5 text-center">
            <h1 className="text-2xl font-bold">Sign Out</h1>
            <h4 className="text-gray-300 mt-1">Are you sure you want to sign out?</h4>
            <button type="button" onClick={handleLogout} className="mt-5 text-black hover:text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 text-center me-2 mb-2 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button>
        </section>

    )
}