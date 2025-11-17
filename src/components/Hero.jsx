import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Building at SoHo speed
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 drop-shadow-sm sm:text-6xl">
          SoHo Labs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          We craft ambitious, fast-moving products across AI, developer tools, and new consumer interfaces.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#products" className="group inline-flex items-center justify-center rounded-lg border border-gray-900 bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] hover:shadow-lg">
            Explore Products
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </a>
          <a href="#launches" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50">
            Recent Launches
          </a>
        </div>
      </div>
    </section>
  )
}
