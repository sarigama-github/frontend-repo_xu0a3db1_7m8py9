import { useEffect, useState } from 'react'

function UnitCard({ unit }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">{unit.unit_type}</div>
          <div className="text-lg font-semibold text-slate-900">{unit.name}</div>
          {unit.station && (
            <div className="text-sm text-slate-600">{unit.station}</div>
          )}
        </div>
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
          unit.status === 'Available' ? 'bg-green-100 text-green-700' : unit.status === 'Out of Service' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
        }`}>
          {unit.status}
        </span>
      </div>
    </div>
  )
}

function Units() {
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/units`)
        const data = await res.json()
        setUnits(Array.isArray(data) ? data : [])
      } catch (e) {
        setUnits([])
      } finally {
        setLoading(false)
      }
    }
    fetchUnits()
  }, [])

  return (
    <section id="units" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Active Units</h2>
            <p className="text-slate-600">Frontline resources serving the City of Las Vegas</p>
          </div>
        </div>

        {loading ? (
          <p className="text-slate-600">Loading units...</p>
        ) : units.length === 0 ? (
          <p className="text-slate-600">No units found yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {units.map((u) => (
              <UnitCard key={u.id || u.name} unit={u} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Units
