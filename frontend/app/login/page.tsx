'use client'

import React from 'react';
import { signIn } from 'next-auth/react';

export default function page() {
  return (
    <div>
        <h1>Login Page</h1>
        <button className='p-3 rounded-xl shadow-xl bg-gray-700 hover:bg-gray-800' onClick={() => signIn('google', {callbackUrl: "/"})}>Login with google</button>
        
        <button className='p-3 rounded-xl shadow-xl bg-gray-700 hover:bg-gray-800' onClick={() => signIn('github', {callbackUrl: "/"})}>Login with github</button>
    </div>
  )
}
