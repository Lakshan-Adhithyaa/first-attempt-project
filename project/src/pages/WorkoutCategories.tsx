import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Dumbbell, LayoutGrid, User, Clock, 
  Flame, Target, ChevronRight, Play, Heart,
  Calendar, Trophy
} from 'lucide-react';

function WorkoutCategories() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      title: 'Strength Training',
      description: 'Build muscle and get stronger',
      icon: <Dumbbell className="w-6 h-6" />,
      difficulty: 'Intermediate',
      duration: '45-60 min',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80',
      workouts: [
        {
          title: 'Full Body Power',
          duration: '45 min',
          calories: '400',
          exercises: 12,
          level: 'Intermediate'
        },
        {
          title: 'Upper Body Focus',
          duration: '30 min',
          calories: '300',
          exercises: 8,
          level: 'Beginner'
        },
        {
          title: 'Lower Body Blast',
          duration: '40 min',
          calories: '350',
          exercises: 10,
          level: 'Advanced'
        }
      ]
    },
    {
      title: 'HIIT Cardio',
      description: 'Intense cardio workouts',
      icon: <Flame className="w-6 h-6" />,
      difficulty: 'Advanced',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
      workouts: [
        {
          title: 'Tabata Challenge',
          duration: '25 min',
          calories: '300',
          exercises: 8,
          level: 'Advanced'
        },
        {
          title: 'Fat Burn Express',
          duration: '20 min',
          calories: '250',
          exercises: 6,
          level: 'Intermediate'
        }
      ]
    },
    {
      title: 'Flexibility',
      description: 'Improve mobility and flexibility',
      icon: <Target className="w-6 h-6" />,
      difficulty: 'Beginner',
      duration: '20-30 min',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
      workouts: [
        {
          title: 'Morning Yoga Flow',
          duration: '30 min',
          calories: '150',
          exercises: 10,
          level: 'Beginner'
        },
        {
          title: 'Dynamic Stretching',
          duration: '20 min',
          calories: '100',
          exercises: 8,
          level: 'Beginner'
        }
      ]
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Workout Categories</h1>
              <p className="text-gray-400">Choose your workout type</p>
            </div>
            <motion.div
              className="bg-red-600/20 p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Calendar className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-black/60 gradient-overlay" />
                
                <motion.div 
                  className="relative p-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className="bg-red-600 p-3 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
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
                      <Target className="w-4 h-4 mr- 1" />
                      {category.difficulty}
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 space-y-4"
                      >
                        {category.workouts.map((workout, wIndex) => (
                          <motion.div
                            key={wIndex}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: wIndex * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="text-white font-semibold mb-2">{workout.title}</h4>
                                <div className="flex space-x-4 text-sm text-gray-300">
                                  <span className="flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {workout.duration}
                                  </span>
                                  <span className="flex items-center">
                                    <Flame className="w-3 h-3 mr-1" />
                                    {workout.calories} cal
                                  </span>
                                  <span className="flex items-center">
                                    <Trophy className="w-3 h-3 mr-1" />
                                    {workout.level}
                                  </span>
                                </div>
                              </div>
                              <motion.button
                                className="bg-red-600 p-2 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Play className="w-4 h-4 text-white" />
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </main>

        <nav className="bg-black/90 backdrop-blur-sm border-t border-white/10 p-4 relative z-10">
          <div className="flex justify-around items-center">
            {[
              { icon: Home, path: '/dashboard', active: false },
              { icon: Dumbbell, path: '/workouts', active: false },
              { icon: LayoutGrid, path: '/categories', active: true },
              { icon: User, path: '/profile', active: false }
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

export default WorkoutCategories;
