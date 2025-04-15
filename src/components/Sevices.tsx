import React from 'react'
import {
  Battery,
  Lightbulb,
  Home,
  Factory,
  SunMedium,
  Wrench,
  Shield,
  Cpu,
  Wifi,
  Zap,

} from "lucide-react";
import type { Service } from "../types";
const services: Service[] = [
  {
    title: 'Residential Wiring',
    description: 'Complete home electrical solutions including new installations, upgrades, and repairs.',
    icon: 'Home'
  },
  {
    title: 'Commercial Systems',
    description: 'Comprehensive electrical systems for businesses, offices, and industrial facilities.',
    icon: 'Factory'
  },
  {
    title: 'Solar Installation',
    description: 'Expert solar panel installation and integration with existing electrical systems.',
    icon: 'SunMedium'
  },
  {
    title: 'Maintenance & Repair',
    description: '24/7 emergency repairs and regular maintenance to keep your electrical systems running safely.',
    icon: 'Wrench'
  },
  {
    title: 'Energy Solutions',
    description: 'Energy-efficient lighting solutions and smart home electrical installations.',
    icon: 'Lightbulb'
  },
  {
    title: 'Backup Systems',
    description: 'Installation and maintenance of backup power systems and generators.',
    icon: 'Battery'
  },
  {
    title: 'Security Systems',
    description: 'Installation of advanced security and surveillance systems for homes and businesses.',
    icon: 'Shield'
  },
  {
    title: 'Smart Home',
    description: 'Complete smart home automation and integration services.',
    icon: 'Cpu'
  },
  {
    title: 'Network Installation',
    description: 'Structured cabling and network infrastructure setup for homes and offices.',
    icon: 'Wifi'
  }
];

const IconComponent: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Home,
  Factory,
  SunMedium,
  Wrench,
  Lightbulb,
  Battery,
  Shield,
  Cpu,
  Wifi,
  Zap,
};

export default function Sevices() {
  return (
    <>
      <section
        id="services"
        className="py-12 md:py-24 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = IconComponent[service.icon];
              return (
                <div
                  key={service.title}
                  className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
