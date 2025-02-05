import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

interface LoadingScreenProps {
  progress: number;
}

export const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen w-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex justify-center items-center mb-4"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <Settings size={90} className="text-gray-300" />
      </motion.div>
      <div className="w-1/2 bg-gray-200 rounded-full h-4">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-00 h-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};