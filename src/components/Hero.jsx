function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow">Las Vegas Fire & Rescue</h1>
          <p className="mt-4 text-lg text-red-50">Protecting life, property, and the environment through prevention, education, and emergency response.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#units" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-red-700 font-semibold hover:bg-red-50 transition">View Units</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-red-800/40 ring-1 ring-white/30 hover:bg-red-800/60 transition">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
