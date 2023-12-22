"use server";
import axios from "axios";

type CredentialsT = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

type RegisterFormT = {
  name: FormDataEntryValue | null
  lastName: FormDataEntryValue | null
  phone: FormDataEntryValue | null
  user: {
    email: FormDataEntryValue | null
    password: FormDataEntryValue | null
  }
}

export const signIn = async (credentials: CredentialsT) => {
  try {
    const response = await fetch("https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const { user, token } = await response.json();

      return { user, token };
      // Save the token securely (e.g., in localStorage or a secure cookie)
      // onLogin(token);
    } else {
      const { message } = await response.json();
      console.error(`Login failed: ${message}`);
      return message;
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
  }
};

export const signUp = async (data: RegisterFormT) => {
  try {
    const response = await fetch("https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const res = await response.json();
      return res;
      // Save the token securely (e.g., in localStorage or a secure cookie)
      // onLogin(token);
    } else {
      const { message, error, errors } = await response.json();
      console.error(`Registration failed: ${message}`);
      return { message, error, errors };
    }
  } catch (error) {
    console.error("An error occurred during registration:", error);
  }
};

export const handleRecoverySubmit = async (email: FormDataEntryValue | null) => {
  try {
    // Send a request to your backend API to initiate the password recovery
    // const response = await fetch('https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/auth/recovery', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // });

   const response = await axios.post('https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/auth/recovery', {
        email
    })
    // .then(function (response) {
    //   const { message } = response.data
    //   console.log(message);
    //   return message;
    // })
    // .catch(function (error) {
    //   const { message } = response.data
    //   // Handle error, e.g., display an error message to the user
    //   console.error('Error initiating password recovery:', response.statusText);
    //   return message
    // });
    console.log(response);
    
    if (response.statusText === 'OK') {
      const { message } = response.data
      console.log(message);
      return message;
    } else {
      const { message } = response.data
      // Handle error, e.g., display an error message to the user
      console.error('Error initiating password recovery:', response.statusText);
      return message
    }
  } catch (error) {
    console.error('Error password recovery:', error);
  }
};

export const handleResetSubmit = async (token: string | null, password: FormDataEntryValue | null) => {
  // Send a request to your backend API to reset the password using the token
  // You can use fetch or any HTTP library of your choice
  // Example using fetch:
  try {
    const response = await axios.post(`https://intense-shore-79834-3a42a544c02e.herokuapp.com/api/v1/auth/change-password`, {
      token,
      newPassword: password
  });

  if (response.statusText === 'OK') {
    const { message } = response.data
    console.log(message);
    return message;
  } else {
    // Handle error, e.g., display an error message to the user
    const { message } = response.data
    // Handle error, e.g., display an error message to the user
    console.error('Error trying to change the password:', response.statusText);
    return message
  }
    
  } catch (error) {
    console.error('Error changing password:', error);
    
  }

};