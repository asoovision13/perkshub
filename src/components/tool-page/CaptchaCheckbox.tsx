import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface CaptchaCheckboxProps {
  isChecked: boolean;
  handleCheckboxToggle: () => void;
}

export const CaptchaCheckbox = ({ isChecked, handleCheckboxToggle }: CaptchaCheckboxProps) => {
  return (
    <motion.div
      className="bg-white border border-gray-300 rounded-lg px-6 shadow-lg flex justify-between items-center space-x-2 py-2 mt-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        <motion.label
          className={`cursor-pointer w-6 h-6 border-2 ${
            isChecked ? "border-green-500" : "border-gray-400"
          } rounded-none flex justify-center items-center`}
          whileHover={{ scale: 1.1 }}
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxToggle}
            className="hidden"
          />
          {isChecked && (
            <motion.div
              className="text-green-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Check size={16} />
            </motion.div>
          )}
        </motion.label>
      </div>

      <div >
        <p className="font-semibold text-gray-800 text-xs">I'm not a robot</p>
      </div>

      <div className=" text-center flex flex-col justify-center items-center">
        <Image
        src="https://i.imgur.com/zmlMQDE.png"
        width={4}
        height={4}
        alt="Captcha logo"
        className="w-7"
        />
        <p className="text-xxs text-gray-500">reCAPTCHA</p>
        <small className="text-gray-400 text-xxs">Privacy - Terms</small>
      </div>
    </motion.div>
  );
};