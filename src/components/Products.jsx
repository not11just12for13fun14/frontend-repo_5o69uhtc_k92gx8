import React from 'react'

const products = [
  {
    name: 'Pulse',
    tagline: 'AI status dashboards that actually explain the why.',
    url: '#',
    tags: ['AI', 'Analytics']
  },
  {
    name: 'Forge',
    tagline: 'Agentic tooling for builders—runbooks that run themselves.',
    url: '#',
    tags: ['Agents', 'Devtools']
  },
  {
    name: 'Relay',
    tagline: 'Multiplayer notes and tasks with structured context.',
    url: '#',
    tags: ['Collab', 'Productivity']
  },
  {
    name: 'Lumen',
    tagline: 'UI components with taste—opinionated and fast.',
    url: '#',
    tags: ['Design', 'Open Source']
  },
]

export default function Products() {
  return (
    <section id="products" className="relative w-full bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Products</h2>
            <p className="mt-3 max-w-2xl text-gray-600">A few of the things we’ve built or are actively iterating.</p>
          </div>
          <a href="#launches" className="text-sm font-semibold text-gray-900 hover:opacity-70">See launches →</a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <a key={p.name} href={p.url} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/20 to-amber-300/20" />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">{p.name}</h3>
                <div className="flex gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
              <p className="mt-1 text-gray-600">{p.tagline}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
