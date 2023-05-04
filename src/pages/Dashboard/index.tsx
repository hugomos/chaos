import { Header } from '@/src/components/Header';
import React from 'react';


const Dashboard: React.FC = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <div>
        <div className='w-full'>
          <h2 className='text-2xl font-medium'>Welcome back, Vitor Hugo</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;