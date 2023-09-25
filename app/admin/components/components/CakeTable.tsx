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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function CakeTable({
  storeCake,
  handleOpenModal,
  updateNow,
  updateCake,
  setUpdateCake,
  updateDescription,
  setUpdateDescription,
  updateImage,
  setUpdateImage,
  handleDelete,
}: {
  storeCake: any[];
  handleOpenModal: (e: any) => void;
  updateNow: (e: any) => void;
  updateCake: string;
  setUpdateCake: (value: string) => void;
  updateDescription: string;
  setUpdateDescription: (value: string) => void;
  updateImage: string;
  setUpdateImage: (value: string) => void;
  handleDelete: (e: any) => void;
}) {
  return (
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
  );
}
