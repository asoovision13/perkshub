'use client';
import { useParams } from 'next/navigation';
import { games } from '../../../../public/data/games';
import { Star, User, Settings, CheckCircle, Search, LoaderCircle, Check } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { LoadingScreen } from '@/components/tool-page/LoadingScreen';
import { GameHeader } from '@/components/tool-page/GameHeader';
import { Step1Form } from '@/components/tool-page/Step1Form';
import { Step2Form } from '@/components/tool-page/Step2Form';
import { Step3Form } from '@/components/tool-page/Step3Form';
import Image from 'next/image';

const usernameSchema = z.string().min(1, { message: "Username cannot be empty" });

export default function ProductPage() {
  const { productId }: any = useParams();
  const game = games.find((game) => game.shortcut === productId);
  const [isChecked, setIsChecked] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<number>(50);
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [apiProgress, setApiProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [step, setSteps] = useState<number>(1);
  const [isCheckingUsername, setIsCheckingUsername] = useState<boolean>(false);
  const [usernameFound, setUsernameFound] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<string>(game?.coinOptions[0].amount ?? '2k');
  const [connectingAPI, setConnectingAPI] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(150);
  const [coinLogo, setcoinLogo] = useState<string>(game?.coinlogo ?? '');

  useEffect(() => {
    if (connectingAPI) {
      const progressInterval = setInterval(() => {
        setApiProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setConnectingAPI(false);
            setSteps(3);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }
  }, [connectingAPI]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(50 + Math.floor(Math.random() * 71));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowContent(true);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
  }, []);

  useEffect(() => {
    if (step === 3 && timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [step, timer]);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSelectAmount = (amount: string) => {
    setSelectedAmount(amount);
  };

  const handleselectSubmit = () => {
    setConnectingAPI(true);
  };

  const handleUsernameSubmit = () => {
    try {
      usernameSchema.parse(username);
      setError(null);
      setIsCheckingUsername(true);

      setTimeout(() => {
        setIsCheckingUsername(false);
        setUsernameFound(true);
        setTimeout(() => setSteps(2), 1500);
      }, 3000);
    } catch (e: any) {
      setError(e.errors[0].message);
    }
  };

  if (!game) {
    return <p className='text-center mt-4'>Game not found: {productId}</p>;
  }

  return (
    <div className="flex flex-col items-center relative w-full min-h-screen bg-cover pb-5" style={{ backgroundImage: `url(${game.backgroundImage})` }}>
      <AnimatePresence>
        {!showContent && <LoadingScreen progress={progress} />}
      </AnimatePresence>

      {showContent && (
        <>
          <GameHeader logo={game.logo} name={game.name} description="Latest updated online tool for DLS 25 Free Coins & Diamonds, tested and working on 4 February, 2025." />

          <div className="relative w-full h-full">
            <div className="z-10 absolute w-screen h-60 pt-4 -top-1 max-sm:h-64">
              <Image src="/download.svg" alt={game.name} layout="fill" objectFit="cover" />
            </div>

            <div className="flex justify-center items-center w-full h-full">
              <Card className="z-20 p-4 w-96 text-center">
                <div className="relative -top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-500 via-black to-gray-400 p-[5px]">
                  <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
                    <h4 className="text-xl font-bold">{step}</h4>
                  </div>
                </div>

                {step === 1 && (
                  <Step1Form
                    username={username}
                    setUsername={setUsername}
                    error={error}
                    isCheckingUsername={isCheckingUsername}
                    usernameFound={usernameFound}
                    handleUsernameSubmit={handleUsernameSubmit}
                  />
                )}

                {step === 2 && (
                  <Step2Form
                    username={username}
                    coinOptions={game.coinOptions}
                    selectedAmount={selectedAmount}
                    handleSelectAmount={handleSelectAmount}
                    handleselectSubmit={handleselectSubmit}
                    connectingAPI={connectingAPI}
                    apiProgress={apiProgress}
                    coinlogo={coinLogo}
                  />
                )}

                {step === 3 && (
                  <Step3Form
                    username={username}
                    timer={timer}
                    isChecked={isChecked}
                    handleCheckboxToggle={handleCheckboxToggle}
                  />
                )}
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
}