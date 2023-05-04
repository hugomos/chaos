import { Header } from '@/src/components/Header';
import React from 'react';


const Statistcs: React.FC = () => {
  return (
    <div>
      <Header title="Statistcs" />
      <div>
        <div className='w-full'>
          <h2 className='text-2xl font-medium'>View last week's report</h2>
          <div className='my-6 grid grid-cols-4 gap-4 max-xl:grid-cols-2'>
            <div className='w-full min-w-max p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg opacity-50 text-zinc-500 font-semibold'>Sampled</h3>
                <span className='text-3xl font-medium'>3456</span>
              </div>
              <div className='h-32 flex gap-3 items-end'>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-4/5 rounded-xl bg-gradient-to-b from-sky-600 to-indigo-500'></div>
                  <span className='text-xs text-zinc-500'>seg</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-3/5 rounded-xl bg-gradient-to-b from-sky-600 to-indigo-500'></div>
                  <span className='text-xs text-zinc-500'>ter</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-2/5 rounded-xl bg-gradient-to-b from-sky-600 to-indigo-500'></div>
                  <span className='text-xs text-zinc-500'>qua</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-4/5 rounded-xl bg-gradient-to-b from-sky-600 to-indigo-500'></div>
                  <span className='text-xs text-zinc-500'>qui</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-full rounded-xl bg-gradient-to-b from-sky-600 to-indigo-500'></div>
                  <span className='text-xs text-zinc-500'>sex</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-3/5 rounded-xl bg-gradient-to-b from-sky-600 to-indigo-500'></div>
                  <span className='text-xs text-zinc-500'>sab</span>
                </div>
              </div>
            </div>
            <div className='w-full min-w-max p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg opacity-50 text-zinc-500 font-semibold'>Valid</h3>
                <span className='text-3xl font-medium'>2600</span>
              </div>
              <div className='h-32 flex gap-3 items-end'>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-3/5 rounded-xl bg-gradient-to-b from-green-400 to-emerald-600'></div>
                  <span className='text-xs text-zinc-500'>seg</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-2/5 rounded-xl bg-gradient-to-b from-green-400 to-emerald-600'></div>
                  <span className='text-xs text-zinc-500'>ter</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-full rounded-xl bg-gradient-to-b from-green-400 to-emerald-600'></div>
                  <span className='text-xs text-zinc-500'>qua</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-4/5 rounded-xl bg-gradient-to-b from-green-400 to-emerald-600'></div>
                  <span className='text-xs text-zinc-500'>qui</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-full rounded-xl bg-gradient-to-b from-green-400 to-emerald-600'></div>
                  <span className='text-xs text-zinc-500'>sex</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-4/5 rounded-xl bg-gradient-to-b from-green-400 to-emerald-600'></div>
                  <span className='text-xs text-zinc-500'>sab</span>
                </div>
              </div>
            </div>
            <div className='w-full min-w-max p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg opacity-50 text-zinc-500 font-semibold'>Invalid</h3>
                <span className='text-3xl font-medium'>856</span>
              </div>
              <div className='h-32 flex gap-3 items-end'>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-2/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>seg</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-3/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>ter</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-0 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>qua</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-1/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>qui</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-1/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>sex</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-1/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>sab</span>
                </div>
              </div>
            </div>
            <div className='w-full min-w-max p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg opacity-50 text-zinc-500 font-semibold'>Invalid</h3>
                <span className='text-3xl font-medium'>856</span>
              </div>
              <div className='h-32 flex gap-3 items-end'>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-2/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>seg</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-3/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>ter</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-0 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>qua</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-1/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>qui</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-1/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>sex</span>
                </div>
                <div className='flex flex-col gap-1 h-full justify-end'>
                  <div className='w-4 h-1/5 rounded-xl bg-gradient-to-b from-red-600 to-pink-800'></div>
                  <span className='text-xs text-zinc-500'>sab</span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-max p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col gap-8'>
            <h3 className='text-lg opacity-50 text-zinc-500 font-semibold'>
              Total Points Sampled Per Employee
            </h3>
            <div className='flex-1 overflow-auto'>
              <table className='w-full min-w-[600px] border-collapse'>
                <thead>
                  <tr>
                    <th className='p-4 text-left text-sm leading-rela2ed text-zinc-300 first:rounded-tl-md bg-zinc-800'>Employee</th>
                    <th className='p-4 text-left text-sm leading-rela2ed text-zinc-300 first:rounded-tl-md first:rounded-tr-md bg-zinc-800'>Points</th>
                    <th className='p-4 text-left text-sm leading-rela2ed text-zinc-300 first:rounded-tl-md last:rounded-tr-md bg-zinc-800'>Interval</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">Allan Lima dos Santos</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">787</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">01-04-2023 - 08-04-2023</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">Luciando Gualdi</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">685</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">01-04-2023 - 08-04-2023</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">Carlos Henrique de Oliveira</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">234</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">01-04-2023 - 08-04-2023</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">Luan Barros</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">245</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">01-04-2023 - 08-04-2023</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">Elielton Linhares</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">123</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">01-04-2023 - 08-04-2023</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">Derlom Cardoso</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">278</td>
                    <td className="p-4 text-sm leading-relaxed border-t-2 border-zinc-800 text-zinc-300">01-04-2023 - 08-04-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistcs;