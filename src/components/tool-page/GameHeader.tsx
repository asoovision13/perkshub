import Image from 'next/image';

interface GameHeaderProps {
  logo: string;
  name: string;
  description: string;
}

export const GameHeader = ({ logo, name, description }: GameHeaderProps) => {
  return (
    <div className="flex flex-col items-center w-full bg-white pb-10">
      <div className="relative w-40 h-40 mt-4 rounded-2xl overflow-hidden max-sm:w-20 max-sm:h-20">
        <Image src={logo} alt={name} layout="fill" objectFit="cover" />
      </div>
      <p className="text-center mt-4 text-gray-700 max-sm:text-sm w-2/3">
        {description}
      </p>
    </div>
  );
};