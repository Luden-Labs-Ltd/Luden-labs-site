import type { Project } from '@/entities/project'
import { Card } from '@/shared/ui';
import { X } from 'lucide-react'

type Props = {
  currentProject?: Project;
  onClick?: () => void;
  onVisited?: () => void;
}

export function Popover({ currentProject, onClick, onVisited }: Props) {

  // Records the current project as visited in localStorage and notifies the parent.
  const setProjectAsVisited = () => {
    // Persist the current project's name to localStorage if it's not already there.
    if (!currentProject) return;
    const storageKey = "visitedProjects";
    const raw = localStorage.getItem(storageKey);
    let visited: string[] = [];

    if (raw) {
      try {
        // Accept only string arrays; ignore any unexpected shapes.
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          visited = parsed.filter((item) => typeof item === "string");
        }
      } catch {
        // Reset if storage is corrupted or not JSON.
        visited = [];
      }
    } else {
      // Initialize storage when it doesn't exist yet.
      localStorage.setItem(storageKey, JSON.stringify([]));
    }

    // Add unique entries only.
    if (!visited.includes(currentProject.name)) {
      visited.push(currentProject.name);
      localStorage.setItem(storageKey, JSON.stringify(visited));
    }

    // Let the parent update derived UI (e.g., opacity) immediately.
    onVisited?.();
  }

  return (
    <Card className="absolute bottom-10 left-12 w-104">
        <section className='flex flex-col w-full'>
          {/* top section */}
          <section className='flex justify-between items-center'>
            {/* label */}
            <span className='bg-red-500 flex items-center text-white text-xs rounded-full px-4.5 h-6'>
              {currentProject!.category}
            </span>
            {/* 'X' button */}
            <button 
              className='bg-black/40 rounded-full p-0.5'
              onClick={onClick}  
            >
              <X className='text-white w-6 h-6 '/>
            </button>

          </section>

          {/* Image section */}
          <section className='h-[200px] aspect-video bg-black mt-4 overflow-hidden rounded-2xl'>
            {/* Image */}
            <img 
              src="https://img.freepik.com/premium-vector/city-street-small-town-walk-building-people-walking-abstract-concept-graphic-design_133260-4131.jpg" 
              alt="" 
              className='w-full h-full object-cover'
            />

          </section>
          {/* section with heading and description */}
          <section className='flex flex-col mt-4'>
              {/* heading */}
              <h3 className='text-lg mb-1'>{currentProject!.name}</h3>
              {/* description */}
              <p className='whitespace-pre-wrap text-sm'>
                {currentProject!.description}
              </p>

          </section>

          {/* section with 'more info' button */}
          <section className='flex mt-4'>
            {/* button */}
            <button
              className='bg-green-800 flex items-center text-white  rounded-full px-10 py-2 text-sm'
              onClick={() => setProjectAsVisited()}  
            >
              Узнать больше
            </button>
            
          </section>

        </section>

      </Card>
  )
}
