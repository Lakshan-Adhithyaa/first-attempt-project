import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Dumbbell, LayoutGrid, User, Clock, Flame, Target } from 'lucide-react';

function WorkoutCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Strength Training',
      description: 'Build muscle and get stronger',
      icon: <Dumbbell className="w-6 h-6" />,
      difficulty: 'Intermediate',
      duration: '45-60 min',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80'
    },
    {
      title: 'HIIT Cardio',
      description: 'Intense cardio workouts',
      icon: <Flame className="w-6 h-6" />,
      difficulty: 'Advanced',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80'
    },
    {
      title: 'Flexibility',
      description: 'Improve mobility and flexibility',
      icon: <Target className="w-6 h-6" />,
      difficulty: 'Beginner',
      duration: '20-30 min',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div 
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <main className="flex-1 relative z-10 p-6">
          <h1 className="text-2xl font-bold text-white mb-2">Workout Categories</h1>
          <p className="text-gray-400 mb-8">Choose your workout type</p>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-black/60 gradient-overlay" />
                
                <div className="relative p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {category.duration}
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {category.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <nav className="bg-black/90 backdrop-blur-sm border-t border-white/10 p-4 relative z-10">
          <div className="flex justify-around items-center">
            <button onClick={() => navigate('/dashboard')} className="text-white/60 hover:text-red-500">
              <Home size={24} />
            </button>
            <button onClick={() => navigate('/workouts')} className="text-white/60 hover:text-red-500">
              <Dumbbell size={24} />
            </button>
            <button onClick={() => navigate('/categories')} className="text-red-500">
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

export default WorkoutCategories;