'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { loginAdmin } from '../action/loginAdmin';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const checkIfExist = await loginAdmin({ username, password });

    console.log('test');
    if (checkIfExist) {
      router.push('/admin');
    }

    return;
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username or email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <Button onClick={() => handleLogin()}>Login</Button>
      </div>
    </div>
  );
}
