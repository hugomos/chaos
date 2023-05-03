"use client";

import React from 'react';
import Link from 'next/link';

import { House, ChartLine, GearSix } from '@phosphor-icons/react'

export const SidebarMenu: React.FC = () => {
  return (
    <aside className="w-72 bg-zinc-900 p-6">
      <nav className="space-y-5">
        <a href="#" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800">
          <House size={24} />
          Home
        </a>
        <a href="#" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800">
          <ChartLine size={24} />
          Statistics
        </a>
        <a href="#" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800">
          <GearSix size={24} />
          Config
        </a>
      </nav>
      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
        <a href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Financial</a>
        <a href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Budget</a>
        <a href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Accounting</a>
        <a href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Investments</a>
        <a href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Oversight</a>
      </nav>
    </aside>
  );
}
