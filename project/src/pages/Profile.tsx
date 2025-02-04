import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Dumbbell, LayoutGrid, User, Settings, Award, 
  Calendar, Bell, ChevronRight, Edit2, LogOut, Flame,
  Camera, Trash2
} from 'lucide-react';

function Profile() {
  const navigate = useNavigate();
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

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

  const handleAvatarClick = () => {
    setShowAvatarMenu(!showAvatarMenu);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setShowAvatarMenu(false);
  };

  const removeAvatar = () => {
    setAvatar(null);
    setShowAvatarMenu(false);
  };

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
          <motion.div 
            className="flex items-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={handleAvatarClick}
              >
                {avatar ? (
                  <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={32} className="text-white" />
                )}
              </motion.div>
              <AnimatePresence>
                {showAvatarMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <label className="flex items-center space-x-2 px-4 py-3 hover:bg-white/10 cursor-pointer">
                      <Camera size={16} className="text-white" />
                      <span className="text-white text-sm">Change Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {avatar && (
                      <button
                        onClick={removeAvatar}
                        className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-white/10 text-red-500"
                      >
                        <Trash2 size={16} />
                        <span className="text-sm">Remove Photo</span>
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div>
              <motion.h1 
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                John Doe
              </motion.h1>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Premium Member
              </motion.p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {Object.entries({ Workouts: userStats.workouts, Calories: userStats.calories }).map(([label, value], index) => (
              <motion.div
                key={label}
                className="bg-red-600/20 p-4 rounded-lg backdrop-blur-sm hover:bg-red-600/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-white font-semibold mb-1">{label}</h3>
                <p className="text-2xl text-white font-bold">{value}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Achievements */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Settings Menu */}
          <div className="space-y-4">
            {[
              { icon: <Settings className="text-red-500" />, label: 'Settings' },
              { icon: <Bell className="text-red-500" />, label: 'Notifications' },
              { icon: <LogOut className="text-red-500" />, label: 'Logout' }
            ].map((item, index) => (
              <motion.button
                key={index}
                className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <span className="text-white">{item.label}</span>
                </div>
                <ChevronRight className="text-gray-400" />
              </motion.button>
            ))}
          </div>
        </main>

        {/* Navigation Bar */}
        <nav className="bg-black/90 backdrop-blur-sm border-t border-white/10 p-4 relative z-10">
          <div className="flex justify-around items-center">
            {[
              { icon: Home, path: '/dashboard' },
              { icon: Dumbbell, path: '/workouts' },
              { icon: LayoutGrid, path: '/categories' },
              { icon: User, path: '/profile', active: true }
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => navigate(item.path)}
                className={item.active ? 'text-red-500' : 'text-white/60 hover:text-red-500'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon size={24} />
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Profile;
