import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Dumbbell, LayoutGrid, User } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <div 
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <main className="flex-1 relative z-10 p-6">
          <h1 className="text-2xl font-bold text-white mb-8">Welcome back!</h1>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-red-600/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Daily Goal</h3>
              <p className="text-gray-300">2/5 workouts completed</p>
            </div>
            <div className="bg-red-600/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Calories</h3>
              <p className="text-gray-300">320 burned today</p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Today's Workout</h2>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Full Body Strength</h3>
              <p className="text-gray-300 mb-4">45 mins • Intermediate</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Start Workout
              </button>
            </div>
          </section>
        </main>

        <nav className="bg-black/90 backdrop-blur-sm border-t border-white/10 p-4 relative z-10">
          <div className="flex justify-around items-center">
            <button onClick={() => navigate('/dashboard')} className="text-red-500">
              <Home size={24} />
            </button>
            <button onClick={() => navigate('/workouts')} className="text-white/60 hover:text-red-500">
              <Dumbbell size={24} />
            </button>
            <button onClick={() => navigate('/categories')} className="text-white/60 hover:text-red-500">
              <LayoutGrid size={24} />
            </button>
            <button onClick={() => navigate('/profile')} className="text-white/60 hover:text-red-500">
              <User size={24} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;