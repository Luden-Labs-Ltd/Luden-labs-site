import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-purple-900 to-black">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold mb-8">LandingPage</h1>
        <Button
          variant="primary"
          onClick={() => navigate('/projects/1')}
          className="px-8 py-3 text-lg"
        >
          Перейти к проекту
        </Button>
      </div>
    </div>
  );
}
