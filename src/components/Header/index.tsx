"use client";
import React from 'react';

import { Atom, Bell } from '@phosphor-icons/react'
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className='bg-zinc-800 border-b border-zinc-700 px-8 py-4 flex justify-between'>
      <Atom size={32} />
      <div className='flex items-center justify-center gap-4'>
        <a href="#" className='relative w-fit h-fit'>
          <Bell size={24} className='text-slate-100' />
          <span className='bg-sky-600 text-slate-100 rounded-full flex items-center justify-center absolute -top-1.5 -right-1 text-xs w-4 h-4'>3</span>
        </a>
      </div>
    </header>
  );
}
