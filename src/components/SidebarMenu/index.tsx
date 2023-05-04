"use client";

import React from 'react';
import Link from 'next/link';

import { ChartLine, GearSix, Atom, SquaresFour, Question, EnvelopeSimple } from '@phosphor-icons/react'

export const SidebarMenu: React.FC = () => {
  return (
    <aside className="w-72 h-full bg-zinc-900 p-6 fixed left-0 flex flex-col justify-between z-10">
      <div>
        <header className='flex items-center gap-2 px-2 mb-6 pb-6 border-b border-zinc-800'>
          <Atom size={32} />
          <h1 className='text-2xl font-semibold'>Chaos</h1>
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

          <Link href="/messages" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition duration-100">
            <EnvelopeSimple size={24} />
            Messages
          </Link>
        </nav>
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
          <Link href="/faq" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition duration-100">
            <Question size={24} />
            FAQ
          </Link>

          <Link href="/settings" className="flex items-center p-2 rounded-md gap-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition duration-100">
            <GearSix size={24} />
            Settings
          </Link>
        </nav>
      </div>
      <div className='flex items-center border-t border-zinc-800 pt-6'>
        <Link href="/account" className='flex items-center gap-3 group cursor-pointer'>
          <div className="w-9 h-9 rounded-full bg-red-400 text-slate-200 flex items-center justify-center group-hover:bg-red-500 transition duration-100">
            V
          </div>
          <div className='flex flex-col'>
            <p className='text-sm font-semibold'>Vitor Hugo Oliveira</p>
            <span className='text-xs'>fake@athenasagricola.com.br</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
