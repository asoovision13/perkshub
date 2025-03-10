'use client'
import React, { useState } from 'react';
import GameCard from './game-card';
import { games as allGames } from '../../../public/data/games';
import { Input } from '../ui/input';

function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter games based on search term
  const filteredGames = allGames.filter((game:any) => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='mb-10 min-h-screen'>
      {/* Header Section */}
      <div className="flex justify-center">
        <div className="items-center w-2/3 p-4 text-center">
          <h4 className='text-muted-foreground text-lg max-sm:text-sm font-extralight'>
            Unlock premium features, boost your progress, and elevate your experience effortlessly. AppBloop is your go-to tool for endless possibilities.
          </h4>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="flex justify-center my-4">
        <Input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search games..." 
          className="p-2 max-sm:w-2/3 border rounded-md w-1/3"
        />
      </div>

      {/* Game Cards Section */}
      <div className='flex flex-wrap justify-center'>
        {filteredGames.length > 0 ? (
          filteredGames.map((game, index) => (
            <GameCard key={index} game={game} />
          ))
        ) : (
          <p>No games found</p>
        )}
      </div>
    </div>
  );
}

export default Main;
