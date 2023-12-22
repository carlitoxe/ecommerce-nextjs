'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PasswordRecoveryForm from '@/components/PasswordRecoveryForm';
import { handleRecoverySubmit } from '../actions';

export default function PasswordRecovery() {

  return (
    <>
      {/* {isRequestSubmitted ? (
        <div>
          <h1>Password Recovery Requested</h1>
          <p>
            We've sent an email to your address with instructions on how to reset your password. Please check your email.
          </p>
        </div>
      ) : ( */}
        <PasswordRecoveryForm />
      {/* )} */}
    </>
  );
};
