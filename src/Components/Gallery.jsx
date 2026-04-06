const placeholders = [
  { color: 'from-violet-500 to-purple-600', label: '1' },
  { color: 'from-sky-500 to-cyan-600', label: '2' },
  { color: 'from-amber-500 to-orange-600', label: '3' },
  { color: 'from-rose-500 to-pink-600', label: '4' },
  { color: 'from-emerald-500 to-teal-600', label: '5' },
  { color: 'from-indigo-500 to-blue-600', label: '6' },
  { color: 'from-fuchsia-500 to-pink-600', label: '7' },
]

const Gallery = () => {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Curated Vibes
        </h2>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {placeholders.map((item) => (
            <div
              key={item.label}
              className={`mb-4 break-inside-avoid overflow-hidden rounded-xl bg-gradient-to-br ${item.color} flex aspect-square items-center justify-center transition-transform hover:scale-[1.02]`}
              style={{
                aspectRatio: item.label === '1' || item.label === '5' ? '3/4' : item.label === '3' ? '4/3' : '1',
              }}
            >
              <span className="text-3xl font-bold text-white/30">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Replace these gradients with your own images
        </p>
      </div>
    </section>
  )
}

export default Gallery
