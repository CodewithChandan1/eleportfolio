import React from 'react'
import type { Product } from "../types";
const products: Product[] = [
  {
    name: 'Smart LED Bulb Pack',
    price: 49.99,
    description: 'Pack of 4 WiFi-enabled LED bulbs with color changing capabilities',
    image: 'https://images.unsplash.com/photo-1550985543-49bee3167284'
  },
  {
    name: 'Smart Thermostat',
    price: 199.99,
    description: 'Energy-efficient smart thermostat with mobile app control',
    image: 'https://images.unsplash.com/photo-1567769541715-8c71fe49fd43'
  },
  {
    name: 'Security Camera System',
    price: 299.99,
    description: 'HD wireless security camera system with night vision',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb'
  },
  {
    name: 'Surge Protector',
    price: 79.99,
    description: 'Advanced surge protection for sensitive electronics',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5'
  }
];
export default function Shop() {
  return (
   <>
    <section id="shop" className="py-12 md:py-24">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                 Shop
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {products.map((product) => (
                   <div
                     key={product.name}
                     className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                   >
                     <img
                       src={product.image}
                       alt={product.name}
                       className="w-full h-48 object-cover"
                     />
                     <div className="p-6">
                       <h3 className="text-xl font-semibold mb-2">
                         {product.name}
                       </h3>
                       <p className="text-gray-600 dark:text-gray-400 mb-4">
                         {product.description}
                       </p>
                       <div className="flex justify-between items-center">
                         <span className="text-2xl font-bold text-blue-600">
                           ${product.price}
                         </span>
                         {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                           Add to Cart
                         </button> */}
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </section>
   </>
  )
}
