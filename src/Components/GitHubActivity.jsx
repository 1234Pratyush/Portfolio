// import { useMemo } from 'react'

// const GitHubActivity = () => {
//   const weeks = useMemo(() => {
//     const data = []
//     for (let w = 0; w < 52; w++) {
//       const days = []
//       for (let d = 0; d < 7; d++) {
//         days.push(Math.floor(Math.random() * 5))
//       }
//       data.push(days)
//     }
//     return data
//   }, [])

//   const levelColor = (level) => {
//     const colors = [
//       'bg-gray-100 dark:bg-gray-800',
//       'bg-green-200 dark:bg-green-900',
//       'bg-green-400 dark:bg-green-700',
//       'bg-green-500 dark:bg-green-600',
//       'bg-green-700 dark:bg-green-500',
//     ]
//     return colors[level]
//   }

//   return (
//     <section className="px-4 py-24 sm:px-6">
//       <div className="mx-auto max-w-5xl">
//         <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//           GitHub Activity
//         </h2>

//         <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
//           <div className="overflow-x-auto">
//             <div className="flex gap-[3px]">
//               {weeks.map((week, wi) => (
//                 <div key={wi} className="flex flex-col gap-[3px]">
//                   {week.map((level, di) => (
//                     <div
//                       key={di}
//                       className={`h-[13px] w-[13px] rounded-sm ${levelColor(level)}`}
//                     />
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-4 flex items-center justify-end gap-1.5 text-xs text-gray-500 dark:text-gray-400">
//             <span>Less</span>
//             {[0, 1, 2, 3, 4].map((level) => (
//               <div
//                 key={level}
//                 className={`h-[13px] w-[13px] rounded-sm ${levelColor(level)}`}
//               />
//             ))}
//             <span>More</span>
//           </div>

//           <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
//             Replace this with your real GitHub data using{' '}
//             <a
//               href="https://www.npmjs.com/package/react-github-calendar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
//             >
//               react-github-calendar
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GitHubActivity
