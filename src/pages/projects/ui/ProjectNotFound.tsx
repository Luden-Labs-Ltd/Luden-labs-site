import { Navbar } from "@/shared/ui/navbar";

export function ProjectNotFound() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <div className='flex min-h-[calc(100vh-4rem)] items-center justify-center'>
        <div className='text-center'>
          <h1 className='mb-4 text-2xl font-bold'>Проект не найден</h1>
        </div>
      </div>
    </div>
  );
}
