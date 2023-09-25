'use client';

import { useEffect, useState } from 'react';
import { loginAdmin } from './action/loginAdmin';
import { logoutAdmin } from './action/logoutAdmin';

// component
import AdminHeader from './components/AdminHeader';
import AdminTab from './components/AdminTab';
import AdminPanel from './components/AdminPanel';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [storedId, setStoreId] = useState<number>(0);
  const [warning, setWarning] = useState<string>('');

  const handleLogin = async () => {
    const checkIfExist = await loginAdmin({ username, password });

    if (checkIfExist) {
      setIsLoggedIn(true);
      setStoreId(checkIfExist.id);
      localStorage.setItem('token', username);
    } else {
      setWarning('Invalid username or password');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    await logoutAdmin(storedId);

    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col p-5 md:p-8">
      {isLoggedIn ? (
        <>
          <AdminHeader handleLogout={handleLogout} />
          <AdminTab />
        </>
      ) : (
        <AdminPanel
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          warning={warning}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
}
