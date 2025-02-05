import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { LoaderCircle } from 'lucide-react';
import { CaptchaCheckbox } from './CaptchaCheckbox';

interface Step3FormProps {
  username: string;
  timer: number;
  isChecked: boolean;
  handleCheckboxToggle: () => void;
}

export const Step3Form = ({
  username,
  timer,
  isChecked,
  handleCheckboxToggle,
}: Step3FormProps) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <motion.div
      className="mt-5 opacity-0 animate-fade-in flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h4 className="text-lg font-semibold mb-4">API CONNECTED!</h4>
      <h5 className="text-xs mb-2 text-muted-foreground">
        You have successfully connected your account to the Server API using this online tool!
        Click the CAPTCHA button below to complete a simple one-time verification process.
      </h5>
      <Card className='w-1/2 py-4 my-3'>
        <h1>User Connected :</h1>
        <p className='font-bold'>@{username}</p>
      </Card>
      <h5 className="text-xs mb-2 text-muted-foreground">
        The final step of verification is required for your Coins and Spins to be added to your account!
      </h5>

      <motion.div
        className="text-3xl font-bold mt-2 text-muted-foreground"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <LoaderCircle />
      </motion.div>

      <motion.div
        className="text-2xl font-bold mt-2 text-blue-400"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {formatTime(timer)}
      </motion.div>

      <CaptchaCheckbox isChecked={isChecked} handleCheckboxToggle={handleCheckboxToggle} />
    </motion.div>
  );
};