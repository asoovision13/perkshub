import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Circle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion'
function GameCard({ game }:any) {
  const totalStars = 5;
  const filledStars = game.rating;

  return (
    <motion.div
     className='w-56 max-sm:w-36 p-5 m-2 flex flex-col rounded-md shadow-xl shadow-gray-200 border-card'
     initial={{ y: 0 }}
      whileHover={{ y: -10 }} // Slide up by 10px on hover
      exit={{ y: 0, opacity: 0 }} // Slide back down and fade out when exiting
      transition={{ type: "spring", stiffness: 300 }}
     >
        <div className='flex items-center space-x-2'>
          <Circle className='text-green-400 fill-current' size={10} />
          <h4 className='text-sm text-muted-foreground'>UPDATED</h4>
        </div>

      <Link href={`/tool/${game.shortcut}`} >
      
        <div className='flex justify-center items-center flex-col space-y-3 mt-4'>
          <div className="relative w-32 h-32  max-sm:w-16 max-sm:h-16 rounded-full overflow-hidden">
            <Image
              src={game.logo}
              alt={game.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h4 className='text-primary font-bold text-center'>{game.name}</h4>
        </div>
        </Link>

        <div className="flex space-x-1 mt-2 justify-center">
          {[...Array(totalStars)].map((_, index) => (
            <Star
              key={index}
              className={`text-yellow-400 ${index < filledStars ? 'fill-current' : 'opacity-50'}`}
              size={18}
            />
          ))}
        </div>
    
    </motion.div>

  );
}

export default GameCard;
