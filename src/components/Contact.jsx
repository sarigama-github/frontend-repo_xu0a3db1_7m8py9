import { useEffect, useState } from 'react'

function Contact() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/contact`)
        const data = await res.json()
        setInfo(data)
      } catch (e) {
        setInfo(null)
      }
    }
    fetchInfo()
  }, [])

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Contact & Public Information</h2>
          <p className="text-slate-600">Reach out for non-emergency services and information</p>
        </div>

        {info ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white p-6 border border-slate-200">
              <div className="text-sm text-slate-500">Emergency</div>
              <div className="text-2xl font-bold text-slate-900">{info.emergency || '911'}</div>
              <p className="text-slate-600 mt-2">Call immediately for life-threatening emergencies.</p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-slate-200">
              <div className="text-sm text-slate-500">Non-Emergency</div>
              <div className="text-xl font-semibold text-slate-900">{info.non_emergency || '(702) 229-2000'}</div>
              {info.address && <p className="text-slate-600 mt-2">HQ: {info.address}</p>}
            </div>

            <div className="rounded-xl bg-white p-6 border border-slate-200">
              <div className="text-sm text-slate-500">Online</div>
              {info.website && (
                <a href={info.website} target="_blank" className="block text-red-700 hover:underline font-semibold">Official Website</a>
              )}
              {info.email && (
                <a href={`mailto:${info.email}`} className="block text-slate-700 hover:underline mt-1">{info.email}</a>
              )}
              {Array.isArray(info.social) && info.social.length > 0 && (
                <div className="mt-2 space-y-1">
                  {info.social.map((s) => (
                    <a key={s} href={s} target="_blank" className="block text-slate-700 hover:underline break-all">{s}</a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-slate-600">Loading contact information...</p>
        )}
      </div>
    </section>
  )
}

export default Contact
