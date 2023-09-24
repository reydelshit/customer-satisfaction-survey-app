'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addCake } from '../action/addCake';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useState } from 'react';

export default function Cake() {
  const { toast } = useToast();

  const [cake, setCake] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addCake({
      cake,
      description,
      image,
    });

    toast({
      title: 'Added cake',
      description: 'Successfully added cake to the list',
    });

    setCake('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <Toaster />
      <div>
        <h1 className="mt-5">Add Cake</h1>
        <form className="flex flex-col w-fit mt-5">
          <Input
            className="mb-2 w-[25rem]"
            name="cake"
            value={cake}
            onChange={(e) => setCake(e.target.value)}
            placeholder="Cake name"
          />
          <Input
            className="mb-2 w-[25rem]"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <Input
            className="mb-2 w-[25rem]"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image url"
          />
          <Button
            onClick={(e) => handleSubmit(e)}
            className="w-[8rem] self-end"
          >
            Add
          </Button>
        </form>
      </div>

      <div>list of cake here</div>
    </div>
  );
}
