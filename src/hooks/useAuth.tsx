'use client'

import { createContext, useContext, useState, useEffect, MouseEventHandler } from "react";
import Cookies from "js-cookie";

type auth = {
  handleLogin: (formData: FormData) => Promise<void>;
}

type UserT = {
  id: number
  email: string
  role: string
  createdAt: string
} | null


type AuthContextState = {
  user: UserT
  setUser: Function
  token: string | null
  logout: Function
}

type CredentialsT = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

let defaultValue = {} as AuthContextState

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<UserT>(null);
    const [token, setToken] = useState<string | null>(null);
  
    useEffect(() => {
      // Retrieve the token from the cookie during app initialization
      const storedToken: string | undefined = Cookies.get('token');
      const storedUser: string | undefined = Cookies.get('user');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    }, []);

    const logout = () => {
      setToken(null);
      setUser(null);
      // Remove the token from the cookie
      Cookies.remove('token');
      Cookies.remove('user');
    };
  
    // const auth = useAuthProvider()
    // const signIn = async (credentials: CredentialsT) => {    
    //   try {
    //     const response = await fetch('https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/auth/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(credentials),
    //     });
        
    //     if (response.ok) {
    //       const { token } = await response.json();
    //       console.log(token);
          
    //       // Save the token securely (e.g., in localStorage or a secure cookie)
    //       // onLogin(token);
    //     } else {
    //       const { message } = await response.json();
    //       // Handle login failure
    //       console.error(`Login failed: ${message}`);
    //     }
    //   } catch (error) {
    //     console.error('An error occurred during login:', error);
    //   }
    //   // auth.signIn(credentials.email, credentials.password)
    // };
    
   return (
    <AuthContext.Provider value={{user, setUser, token, logout}}>
      {children}
    </AuthContext.Provider>
   )
   
}

// export const useAuth = () => {
//     return useContext(AuthContext)
// }

// function useAuthProvider() {
//   // const [user, setUser] = useState(null);
  
//   // const signIn = async (credentials: CredentialsT) => {      
//   //     try {
//   //       const response = await fetch('https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/auth/login', {
//   //         method: 'POST',
//   //         headers: {
//   //           accept: '*/*',
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify(credentials),
//   //       });
        
//   //       if (response.ok) {
//   //         const { token } = await response.json();
//   //         console.log(token);
          
//   //         // Save the token securely (e.g., in localStorage or a secure cookie)
//   //         // onLogin(token);
//   //       } else {
//   //         const { message } = await response.json();
//   //         // Handle login failure
//   //         console.error(`Login failed: ${message}`);
//   //       }
//   //     } catch (error) {
//   //       console.error('An error occurred during login:', error);
//   //     }
//   //     // auth.signIn(credentials.email, credentials.password)
//   //   };
//     // const logOut = () => {
  
//     //   Cookies.remove('token');
//     //   setUser(null);
//     //   delete axios.defaults.headers.Authorization;
//     //   // const router = useRouter();
//     //   // router.push('/')
//     //   window.location.href = '/login';
//     // }
  
//     return {
//       // user,
//       signIn,
//       // logOut
//     };
//   }
