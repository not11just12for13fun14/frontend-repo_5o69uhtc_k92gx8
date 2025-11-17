import React from 'react'

const bullets = [
  {
    title: 'Speedrun mindset',
    desc: 'Ship in days, learn in hours. Ruthless scope discipline and constant iteration.',
  },
  {
    title: 'Full-stack autonomy',
    desc: 'Design, code, deploy, repeat. Small teams that own the whole loop.',
  },
  {
    title: 'AI-first surfaces',
    desc: 'Agents, copilots, and new interaction models that feel native—not bolted on.',
  },
  {
    title: 'Opinionated craft',
    desc: 'Tasteful defaults, sharp edges removed. Power without the tax.',
  },
]

export default function Thesis() {
  return (
    <section id="thesis" className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Thesis</h2>
          <p className="mt-3 max-w-2xl text-gray-600">A focused way we build: fast, practical, and user-obsessed.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {bullets.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-90 transition group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-1 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
