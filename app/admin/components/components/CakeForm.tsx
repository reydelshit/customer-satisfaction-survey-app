import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CakeForm({
  cake,
  setCake,
  description,
  setDescription,
  image,
  setImage,
  handleSubmit,
}: {
  cake: string;
  setCake: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
  handleSubmit: (e: any) => void;
}) {
  return (
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
        <Button onClick={(e) => handleSubmit(e)} className="w-[8rem] self-end">
          Add
        </Button>
      </form>
    </div>
  );
}
