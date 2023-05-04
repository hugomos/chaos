"use client";
import React from 'react';

import { Atom, Bell } from '@phosphor-icons/react'
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className='flex justify-between pb-8'>
      <h1 className='text-4xl font-semibold'>{title}</h1>
      <div className='flex items-center justify-center gap-4 group'>
        <a href="#" className='relative w-fit h-fit'>
          <Bell size={24} className='text-slate-100 group-hover:animate-shake' />
          <span className='bg-sky-600 text-slate-100 rounded-full flex items-center justify-center absolute -top-1.5 -right-1 text-xs w-4 h-4'>3</span>
        </a>
      </div>
    </header>
  );
}
