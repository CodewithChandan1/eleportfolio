import React from 'react'
import type { Testimonial } from "../types";
const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Exceptional service! The solar panel installation was smooth and professional. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'Outstanding work on our office renovation. The team was professional and completed the project ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content: 'Reliable, professional, and always available for emergencies. The best electrical contractor we\'ve worked with.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];
export default function Testimonials() {
  return (
   <>
      <section
             id="testimonials"
             className="py-12 md:py-24 bg-white dark:bg-gray-800"
           >
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                 Client Testimonials
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {testimonials.map((testimonial) => (
                   <div
                     key={testimonial.name}
                     className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                   >
                     <div className="flex items-center mb-4">
                       <img
                         src={testimonial.image}
                         alt={testimonial.name}
                         className="w-12 h-12 rounded-full mr-4"
                       />
                       <div>
                         <h3 className="font-semibold">{testimonial.name}</h3>
                         <p className="text-gray-600 dark:text-gray-400">
                           {testimonial.role}
                         </p>
                       </div>
                     </div>
                     <p className="text-gray-600 dark:text-gray-400">
                       {testimonial.content}
                     </p>
                   </div>
                 ))}
               </div>
             </div>
           </section>
   </>
  )
}
