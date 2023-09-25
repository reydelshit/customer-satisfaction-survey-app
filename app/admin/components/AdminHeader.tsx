import { ToggleTheme } from '@/components/ToggleTheme';
import { Label } from '@/components/ui/label';
import { ExitIcon } from '@radix-ui/react-icons';

export default function AdminHeader({
  handleLogout,
}: {
  handleLogout: () => void;
}) {
  return (
    <div className="mb-5 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">Manager</h1>
        <Label>Manage, View Analytics, See Responses, and View Rankings</Label>
      </div>
      <div className="flex items-center gap-5">
        <ToggleTheme />
        <ExitIcon onClick={() => handleLogout()} className="cursor-pointer" />
      </div>
    </div>
  );
}
