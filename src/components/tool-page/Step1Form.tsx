import { User, Search, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Step1FormProps {
  username: string;
  setUsername: (username: string) => void;
  error: string | null;
  isCheckingUsername: boolean;
  usernameFound: boolean;
  handleUsernameSubmit: () => void;
}

export const Step1Form = ({
  username,
  setUsername,
  error,
  isCheckingUsername,
  usernameFound,
  handleUsernameSubmit,
}: Step1FormProps) => {
  return (
    <div className="mt-5">
      {!isCheckingUsername && !usernameFound && (
        <div>
          <h4 className="text-lg font-semibold mb-4">Enter User ID</h4>
          <div className="relative">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username / ID"
              className="w-full pl-10 pr-3 py-4 h-24 px-14 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <Button
            onClick={handleUsernameSubmit}
            className="w-2/3 h-16 bg-gradient-to-r from-gray-600 to-gray-400 text-white py-2 px-4 mt-4 rounded-md hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-400 text-lg"
          >
            Continue
          </Button>
        </div>
      )}

      {isCheckingUsername && (
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-2xl text-muted-foreground font-light">SEARCHING...</h1>
          <motion.div
            className="absolute"
            animate={{
              x: [10, 25, -20, 30, -25],
              y: [10, -20, 25, -30, 20],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Search className="text-gray-400" size={34} />
          </motion.div>
          <h4 className="text-2xl font-bold">@{username}</h4>
        </div>
      )}

      {usernameFound && (
        <div className="flex items-center justify-center mt-4 text-green-500">
          <CheckCircle size={28} className="mr-2" />
          <span className="text-sm font-bold">Username found successfully!</span>
        </div>
      )}
    </div>
  );
};