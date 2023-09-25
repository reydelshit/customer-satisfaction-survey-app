'use client';

import { addCake } from '../action/addCake';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';
import { getAllCake } from '../action/getCake';
import { deleteCake } from '../action/deleteCake';
import { updateCakeFunction } from '../action/updateCake';

// component
import CakeForm from './components/CakeForm';
import CakeTable from './components/CakeTable';

interface Cake {
  id: number;
  name: string;
  description?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export default function Cake() {
  const { toast } = useToast();

  const [storeCake, setStoreCake] = useState<Cake[]>([]);
  const [cake, setCake] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const [updateCake, setUpdateCake] = useState<string>('');
  const [updateDescription, setUpdateDescription] = useState<string>('');
  const [updateImage, setUpdateImage] = useState<string>('');

  const getCake = async () => {
    const cakes = await getAllCake();
    setStoreCake(cakes);
  };
  useEffect(() => {
    getCake();
  }, []);

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
    getCake();
  };

  const handleDelete = async (id: number) => {
    await deleteCake(id);
    getCake();

    toast({
      title: 'Cake deleted',
      description: 'Successfully deleted cake from the list',
    });
  };

  const handleOpenModal = ({
    title,
    description,
    image,
  }: {
    title: string;
    description: string;
    image: string;
  }) => {
    setUpdateDescription(description);
    setUpdateCake(title);
    setUpdateImage(image);
  };

  const updateNow = async (id: number) => {
    await updateCakeFunction({
      id,
      cake: updateCake,
      description: updateDescription,
      image: updateImage,
    });

    toast({
      title: 'Cake Updated',
      description: 'Successfully updated the cake',
    });

    getCake();
  };

  return (
    <div className="flex flex-col md:justify-between md:flex-row md:gap-10">
      <Toaster />

      <div className="w-full flex justify-around flex-col md:flex-row">
        <CakeForm
          cake={cake}
          setCake={setCake}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          handleSubmit={handleSubmit}
        />

        <CakeTable
          storeCake={storeCake}
          handleOpenModal={handleOpenModal}
          updateNow={updateNow}
          updateCake={updateCake}
          setUpdateCake={setUpdateCake}
          updateDescription={updateDescription}
          setUpdateDescription={setUpdateDescription}
          updateImage={updateImage}
          setUpdateImage={setUpdateImage}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
