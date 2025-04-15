import React from 'react'
import type {
  Package,
} from "../types";
  const packages: Package[] = [
    {
      name: "Basic Home Safety",
      price: "$299",
      features: [
        "Electrical safety inspection",
        "Circuit testing",
        "Outlet replacement (up to 3)",
        "Basic surge protection",
        "Safety recommendations report",
      ],
    },
    {
      name: "Smart Home Starter",
      price: "$799",
      popular: true,
      features: [
        "Smart thermostat installation",
        "WiFi-enabled lighting system",
        "Smart doorbell installation",
        "Mobile app setup and training",
        "One year of technical support",
      ],
    },
    {
      name: "Complete Home Upgrade",
      price: "$1,499",
      features: [
        "Full electrical system audit",
        "Panel upgrade",
        "Whole-house surge protection",
        "Smart home integration",
        "Backup generator installation",
        "2 years of maintenance",
      ],
    },
  ];
export default function Pricing() {
  
  return (
   <>
     <section id="pricing" className="py-12 md:py-24">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                 Service Packages
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {packages.map((pkg) => (
                   <div
                     key={pkg.name}
                     className={`relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg ${
                       pkg.popular ? "border-2 border-blue-500" : ""
                     }`}
                   >
                     {pkg.popular && (
                       <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                         Most Popular
                       </div>
                     )}
                     <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                     <p className="text-4xl font-bold mb-6">{pkg.price}</p>
                     <ul className="space-y-3 mb-8">
                       {pkg.features.map((feature) => (
                         <li key={feature} className="flex items-start">
                           <span className="text-green-500 mr-2">✓</span>
                           {feature}
                         </li>
                       ))}
                     </ul>
                     <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                       Choose Plan
                     </button>
                   </div>
                 ))}
               </div>
             </div>
           </section>
   </>
  )
}
