import { Label } from '@/components/ui/label';
import Overview from './components/Overview';
import { ToggleTheme } from '@/components/ToggleTheme';

export default function Admin() {
  return (
    <div className="flex flex-col p-8">
      <div className="mb-5 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Manager</h1>
          <Label>
            Manage, View Analytics, See Responses, and View Rankings
          </Label>
        </div>

        <ToggleTheme />
      </div>

      <Overview />
    </div>
  );
}
