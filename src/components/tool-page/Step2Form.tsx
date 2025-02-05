import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ProgressBar } from './ProgressBar';

interface Step2FormProps {
  username: string;
  coinOptions: { amount: string }[];
  selectedAmount: string;
  handleSelectAmount: (amount: string) => void;
  handleselectSubmit: () => void;
  connectingAPI: boolean;
  apiProgress: number;
  coinlogo:string;
}

export const Step2Form = ({
  username,
  coinOptions,
  selectedAmount,
  handleSelectAmount,
  handleselectSubmit,
  connectingAPI,
  apiProgress,
  coinlogo
}: Step2FormProps) => {
  return (
    <motion.div
      className="mt-5 opacity-0 animate-fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {!connectingAPI && <>
      <h4 className="text-lg font-semibold mb-4">
        Connected to <span className="text-primary">@{username}</span>
      </h4>
      <h5 className="text-base mb-2">Select Desired Amount</h5>

      <div className="grid grid-cols-2 gap-4">
        {coinOptions.map((coin) => (
          <Card
            key={coin.amount}
            className={`p-4 flex flex-col items-center space-y-3 ${
              selectedAmount === coin.amount ? 'border-2 border-primary' : ''
            }`}
            onClick={() => handleSelectAmount(coin.amount)}
          >
            <div className="relative w-16 h-16">
              <Image 
                src={coinlogo} // Replace with actual coin logo path
                alt="Coin Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-bold">{coin.amount} Coins</p>
            <p className="text-xs text-gray-500">Coins & Diamonds</p>
          </Card>
        ))}
      </div>

      <Button onClick={handleselectSubmit} className="w-full mt-4">
        Continue ({selectedAmount} Coins)
      </Button>
      </>
      }
      {connectingAPI && (
        <>
          <p className="text-lg text-gray-700 mt-4">Connecting to API...</p>
          <ProgressBar progress={apiProgress} />
        </>
      )}
    </motion.div>
  );
};