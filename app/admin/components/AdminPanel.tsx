'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { loginAdmin } from '../action/loginAdmin';
import { useRouter } from 'next/navigation';

export default function AdminPanel({
  username,
  password,
  setUsername,
  setPassword,
  warning,
  handleLogin,
}: {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  warning: string;
  handleLogin: () => void;
}) {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center flex-col p-2">
      <h1 className="font-bold">Admin Panel</h1>
      <div className="flex flex-col justify-center w-full md:w-[30%] h-[15rem] items-center">
        <input
          className="w-full md:w-[80%] placeholder:text-center mb-2 border-2 p-2 rounded-md text-center"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username or email"
        />
        <input
          value={password}
          className="w-full md:w-[80%] placeholder:text-center  mb-2 border-2 p-2 rounded-md text-center"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />

        {warning.length > 0 && (
          <span className="m-2 text-sm text-red-600">{warning}</span>
        )}
        <Button className="w-[8rem]" onClick={() => handleLogin()}>
          Login
        </Button>
      </div>
    </div>
  );
}
