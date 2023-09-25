'use client';

import { Label } from '@/components/ui/label';
import Overview from './components/Overview';
import { ToggleTheme } from '@/components/ToggleTheme';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Listing from './components/Listing';
import Rankings from './components/Rankings';
import Cake from './components/Cake';
import AdminPanel from './components/AdminPanel';
import { getLoginSession } from './action/getLoginSession';
import { useEffect, useState } from 'react';
import { loginAdmin } from './action/loginAdmin';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface Account {
  id: number;
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export default function Admin() {
  const [account, setAccount] = useState<Account[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = async () => {
    const checkIfExist = await loginAdmin({ username, password });

    console.log('test');
    if (checkIfExist) {
      setIsLoggedIn(true);

      localStorage.setItem('token', username);
    }

    return;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex flex-col p-5 md:p-8">
      {isLoggedIn ? (
        <>
          <div className="mb-5 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Manager</h1>
              <Label>
                Manage, View Analytics, See Responses, and View Rankings
              </Label>
            </div>
            <ToggleTheme />
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="listing">Survey Listing</TabsTrigger>
              <TabsTrigger value="rankings">Rankings</TabsTrigger>
              <TabsTrigger value="cake">Cake</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Overview />
            </TabsContent>
            <TabsContent value="listing">
              <Listing />
            </TabsContent>

            <TabsContent value="rankings">
              <Rankings />
            </TabsContent>

            <TabsContent value="cake">
              <Cake />
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <div className="w-full h-[80vh] flex justify-center items-center flex-col p-2">
          <h1 className="font-bold">Admin Panel</h1>
          <div className="flex flex-col justify-center w-full md:w-[30%] h-[15rem] items-center">
            <input
              className="w-full md:w-[80%] placeholder:text-center mb-2 border-2 p-2 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username or email"
            />
            <input
              value={password}
              className="w-full md:w-[80%] placeholder:text-center  mb-2 border-2 p-2 rounded-md"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <Button className="w-[8rem]" onClick={() => handleLogin()}>
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
