import type { ProjectInfo } from "../model";
import { Card } from "@/shared/ui";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  currentProject: ProjectInfo;
  onClick?: () => void;
  onVisited?: () => void;
};

export function Popover({ currentProject, onClick, onVisited }: Props) {
  const navigate = useNavigate();

  // Records the current project as visited in localStorage and notifies the parent.
  const setProjectAsVisited = () => {
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
  };

  const handleLearnMore = () => {
    setProjectAsVisited();
    navigate(`/projects/${currentProject.slug}`);
  };

  return (
    <Card className='absolute bottom-[20%] left-12 w-[50%] max-w-104'>
      <section className='flex w-full flex-col'>
        <section className='flex items-center justify-between'>
          {/* label */}
          <span className='flex h-6 items-center rounded-full bg-red-500 px-4.5 text-xs text-white'>
            {currentProject!.category}
          </span>
          {/* 'X' button */}
          <button className='rounded-full bg-black/40 p-0.5' onClick={onClick}>
            <X className='h-6 w-6 text-white' />
          </button>
        </section>

        {/* Image section */}
        <section className='mt-4 aspect-video max-h-[200px] overflow-hidden rounded-2xl bg-black'>
          {/* Image */}
          <img
            src='https://img.freepik.com/premium-vector/city-street-small-town-walk-building-people-walking-abstract-concept-graphic-design_133260-4131.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
        </section>
        {/* section with heading and description */}
        <section className='mt-4 flex flex-col'>
          {/* heading */}
          <h3 className='mb-1 text-lg'>{currentProject!.name}</h3>
          {/* description */}
          <p className='text-sm whitespace-pre-wrap'>
            {currentProject!.description}
          </p>
        </section>

        {/* section with 'more info' button */}
        <section className='mt-4 flex'>
          {/* button */}
          <button
            className='flex items-center rounded-full bg-green-800 px-10 py-2 text-sm text-white hover:bg-green-700 transition-colors'
            onClick={handleLearnMore}
          >
            Узнать больше
          </button>
        </section>
      </section>
    </Card>
  );
}
