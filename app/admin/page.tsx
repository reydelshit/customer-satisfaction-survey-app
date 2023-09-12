import Overview from './components/Overview';

export default function Admin() {
  return (
    <div className="flex flex-col p-8 border-2 border-orange-400">
      <h1 className="text-4xl font-bold mb-5">Admin</h1>
      <Overview />
    </div>
  );
}
