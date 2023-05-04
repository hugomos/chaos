"use client";

import React from 'react';
import Link from 'next/link';

import { House, ChartLine, GearSix } from '@phosphor-icons/react'

export const SidebarMenu: React.FC = () => {
  return (
    <aside className="w-72 bg-zinc-900 p-6">
      <div>
        <nav className="space-y-5">
          <Link href="/" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition duration-100">
            <House size={24} />
            Home
          </Link>
          <Link href="/statistics" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition duration-100">
            <ChartLine size={24} />
            Statistics
          </Link>
          <Link href="#" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition duration-100">
            <GearSix size={24} />
            Config
          </Link>
        </nav>
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
          <Link href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Financial</Link>
          <Link href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Budget</Link>
          <Link href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Accounting</Link>
          <Link href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Investments</Link>
          <Link href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>Oversight</Link>
        </nav>
      </div>
      <div className='bg-slate-600'>
        <Link href="#" className="w-8 h-8 rounded-full bg-red-400 text-slate-200 flex items-center justify-center hover:bg-red-500 transition duration-100">
          V
        </Link>
      </div>
    </aside>
  );
}
