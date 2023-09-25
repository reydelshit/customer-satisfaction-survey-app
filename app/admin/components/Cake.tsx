'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addCake } from '../action/addCake';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { getAllCake } from '../action/getCake';
import { deleteCake } from '../action/deleteCake';
import { updateCakeFunction } from '../action/updateCake';

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
  const [openModal, setOpenModal] = useState<boolean>(false);
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
        <div className="self-start w-full">
          <h1 className="mt-5">Add Cake</h1>
          <form className="flex flex-col  md:w-fit mt-5 w-full">
            <Input
              className="mb-2 w-full md:w-[25rem]"
              name="cake"
              value={cake}
              onChange={(e) => setCake(e.target.value)}
              placeholder="Cake name"
            />
            <Input
              className="mb-2 w-full md:w-[25rem]"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <Input
              className="mb-2 w-full md:w-[25rem]"
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

        <div className="w-full md:w-[100%] mt-10 md:mt-0">
          {storeCake.length > 0 ? (
            <Table>
              <TableCaption>A list of cake added.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead className="w-[10%]">Cake</TableHead>
                  <TableHead className="w-[50%]">Description</TableHead>
                  <TableHead className="w-[20%]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {storeCake.map((cake) => (
                  <TableRow className="font-medium" key={cake.id}>
                    <TableCell>
                      <img
                        className="w-full h-[4rem] object-contain rounded-md mb-4"
                        src={cake.image!}
                        alt="img"
                      />
                    </TableCell>
                    <TableCell>{cake.name}</TableCell>
                    <TableCell>{cake.description}</TableCell>
                    <TableCell className="flex flex-col md:flex-row">
                      <Dialog>
                        <DialogTrigger
                          className="w-full md:w-[5rem] mb-2 md:mr-2 bg-orange-500 p-2 rounded-md text-white font-semibold"
                          onClick={() =>
                            handleOpenModal({
                              title: cake.name,
                              description: cake.description!,
                              image: cake.image!,
                            })
                          }
                        >
                          Update
                        </DialogTrigger>
                        <DialogContent className="w-[80%]">
                          <DialogHeader>
                            <DialogTitle>Update Form</DialogTitle>

                            <div className="w-full justify-center">
                              <Input
                                className="mb-2 w-full md:w-[25rem]"
                                name="cake"
                                value={updateCake}
                                onChange={(e) => setUpdateCake(e.target.value)}
                                placeholder="Cake name"
                              />

                              <Input
                                className="mb-2 w-full md:w-[25rem]"
                                name="description"
                                value={updateDescription}
                                onChange={(e) =>
                                  setUpdateDescription(e.target.value)
                                }
                                placeholder="Description"
                              />

                              <Input
                                className="mb-2 w-full md:w-[25rem]"
                                name="Image"
                                value={updateImage}
                                onChange={(e) => setUpdateImage(e.target.value)}
                                placeholder="Image url"
                              />

                              <Button onClick={() => updateNow(cake.id)}>
                                Update
                              </Button>
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                      <Button
                        className="w-[100%] md:w-[5rem]"
                        onClick={() => handleDelete(cake.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex items-center space-x-4 w-full">
              <div className="h-[30rem] grid place-items-center place-content-center w-full">
                <div className="spinner"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
