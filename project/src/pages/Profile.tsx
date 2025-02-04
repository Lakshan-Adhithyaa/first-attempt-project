import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Dumbbell, LayoutGrid, User, Settings, Award, Calendar, Bell, ChevronRight, Edit2, LogOut, Flame } from 'lucide-react';

function Profile() {
  const navigate = useNavigate();

  const userStats = {
    workouts: 248,
    calories: '12.4k',
    streak: 12,
    level: 'Gold'
  };

  const achievements = [
    { title: '5 Day Streak', date: '2024-03-15', icon: <Award className="w-6 h-6" /> },
    { title: '100 Workouts', date: '2024-03-10', icon: <Dumbbell className="w-6 h-6" /> },
    { title: '10k Calories', date: '2024-03-05', icon: <Flame className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div 
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <main className="flex-1 relative z-10 p-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <User size={32} className="text-white" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Edit2 size={16} className="text-white" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">John Doe</h1>
              <p className="text-gray-400">Premium Member</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-red-600/20 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-1">Workouts</h3>
              <p className="text-2xl text-white font-bold">{userStats.workouts}</p>
            </div>
            <div className="bg-red-600/20 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-1">Calories</h3>
              <p className="text-2xl text-white font-bold">{userStats.calories}</p>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-500 p-2 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{achievement.title}</h3>
                      <p className="text-gray-400 text-sm">{achievement.date}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Settings Menu */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <Settings className="text-red-500" />
                <span className="text-white">Settings</span>
              </div>
              <ChevronRight className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <Bell className="text-red-500" />
                <span className="text-white">Notifications</span>
              </div>
              <ChevronRight className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <LogOut className="text-red-500" />
                <span className="text-white">Logout</span>
              </div>
              <ChevronRight className="text-gray-400" />
            </button>
          </div>
        </main>

        {/* Navigation Bar */}
        <nav className="bg-black/90 backdrop-blur-sm border-t border-white/10 p-4 relative z-10">
          <div className="flex justify-around items-center">
            <button onClick={() => navigate('/dashboard')} className="text-white/60 hover:text-red-500">
              <Home size={24} />
            </button>
            <button onClick={() => navigate('/workouts')} className="text-white/60 hover:text-red-500">
              <Dumbbell size={24} />
            </button>
            <button onClick={() => navigate('/categories')} className="text-white/60 hover:text-red-500">
              <LayoutGrid size={24} />
            </button>
            <button onClick={() => navigate('/profile')} className="text-red-500">
              <User size={24} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Profile;