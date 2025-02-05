import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-300 h-4 rounded-full mt-4">
      <motion.div
        className="bg-gradient-to-r from-green-400 to-blue-600 h-4 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};