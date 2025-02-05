import ProductPage from "@/pages/product-page";
import { games } from "../../../../public/data/games";

// Static paths generation - only runs server-side
export async function generateStaticParams() {
  // Extract all possible productIds from your games data
  const productIds = games.map((game) => game.shortcut);
  return productIds.map((id) => ({ productId: id }));
}


export default function Product({ params }: any) {
  const { productId } = params || {};
  const game = games.find((game) => game.shortcut === productId);

  if (!game) {
    return <p className='text-center mt-4'>Game not found: {productId}</p>;
  }

  // Your existing client-side logic (the forms, progress bars, etc.)
  return (
    <ProductPage game={game} />
  );
}