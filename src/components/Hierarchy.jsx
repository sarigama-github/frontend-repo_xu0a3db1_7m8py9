import { useEffect, useState } from 'react'

function MemberItem({ m }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="text-sm text-slate-500">{m.rank}</div>
      <div className="text-lg font-semibold text-slate-900">{m.name}</div>
      {m.division && <div className="text-sm text-slate-600">{m.division}</div>}
    </div>
  )
}

function Hierarchy() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/hierarchy`)
        const data = await res.json()
        setMembers(Array.isArray(data) ? data : [])
      } catch (e) {
        setMembers([])
      } finally {
        setLoading(false)
      }
    }
    fetchMembers()
  }, [])

  const chiefs = members.filter(m => /chief/i.test(m.rank))
  const others = members.filter(m => !/chief/i.test(m.rank))

  return (
    <section id="hierarchy" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Department Leadership & Structure</h2>
          <p className="text-slate-600">Organizational overview</p>
        </div>

        {loading ? (
          <p className="text-slate-600">Loading hierarchy...</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-3">
              <h3 className="text-sm font-semibold text-slate-700">Chiefs</h3>
              {chiefs.length === 0 ? (
                <p className="text-slate-600">No chiefs listed yet.</p>
              ) : (
                chiefs.map((m) => <MemberItem key={m.id || m.name} m={m} />)
              )}
            </div>
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-semibold text-slate-700">Staff & Operations</h3>
              {others.length === 0 ? (
                <p className="text-slate-600">No staff listed yet.</p>
              ) : (
                others.map((m) => <MemberItem key={m.id || m.name} m={m} />)
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hierarchy
