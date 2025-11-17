import React from 'react'

const launches = [
  {
    title: 'Speedrun UI Kit',
    date: 'Aug 2024',
    blurb: 'A minimal design system tuned for velocity.',
    url: '#'
  },
  {
    title: 'Agent Runbooks v0',
    date: 'Nov 2024',
    blurb: 'Executable SOPs for your ops stack.',
    url: '#'
  },
  {
    title: 'Pulse Alpha',
    date: 'Feb 2025',
    blurb: 'Narrated dashboards with causal insight.',
    url: '#'
  }
]

export default function Launches() {
  return (
    <section id="launches" className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Launches</h2>
          <p className="mt-3 max-w-2xl text-gray-600">Changelogs and drops from our workbench.</p>
        </div>
        <div className="grid gap-4">
          {launches.map((l) => (
            <a key={l.title} href={l.url} className="group flex items-start justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">{l.title}</h3>
                <p className="mt-1 text-gray-600">{l.blurb}</p>
              </div>
              <span className="text-sm text-gray-500">{l.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
