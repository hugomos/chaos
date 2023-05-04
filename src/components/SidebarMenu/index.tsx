"use client";

import React from 'react';
import Link from 'next/link';

import { House, ChartLine, GearSix, Atom, SignOut, SquaresFour } from '@phosphor-icons/react'

export const SidebarMenu: React.FC = () => {
  return (
    <aside className="w-72 h-full bg-zinc-900 p-6 fixed left-0 flex flex-col justify-between">
      <div>
        <header className='flex items-center gap-4 px-2 mb-12'>
          <Atom size={32} />
          <h1 className='text-lg font-semibold'>Chaos.finance</h1>
        </header>
        <nav className="space-y-5">
          <Link href="/" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition duration-100">
            <SquaresFour size={24} />
            Dashboard
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
          <Link href="#" className='text-zinc-400 text-sm px-2 hover:text-zinc-100'>Financial</Link>
          <Link href="#" className='text-zinc-400 text-sm px-2 hover:text-zinc-100'>Budget</Link>
          <Link href="#" className='text-zinc-400 text-sm px-2 hover:text-zinc-100'>Accounting</Link>
          <Link href="#" className='text-zinc-400 text-sm px-2 hover:text-zinc-100'>Investments</Link>
          <Link href="#" className='text-zinc-400 text-sm px-2 hover:text-zinc-100'>Oversight</Link>
        </nav>
      </div>
      <div className='flex items-center justify-between'>
        <Link href="#" className='flex items-center gap-2 group cursor-pointer'>
          <div className="w-8 h-8 rounded-full bg-red-400 text-slate-200 flex items-center justify-center group-hover:bg-red-500 transition duration-100">
            V
          </div>
          <p className='text-sm font-semibold'>Vitor Hugo Martins</p>
        </Link>
        <SignOut size={24} weight="fill" className='justify-self-end hover:fill-red-500 transition duration-50 cursor-pointer' />
      </div>
    </aside>
  );
}
