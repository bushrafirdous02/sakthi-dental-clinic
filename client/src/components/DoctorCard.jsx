import { Award } from 'lucide-react'

function DoctorCard({ name, role, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? 'border-purple-200'
          : 'border-gray-100'
      }`}
    >
      {/* Doctor image placeholder */}
      <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-purple-100 via-purple-50 to-pink-50">
        <div className="flex h-full items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-purple-700 shadow-md">
            {name
              .replace('Dr. ', '')
              .charAt(0)}
          </div>
        </div>

        {featured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-purple-700 px-3 py-1.5 text-xs font-semibold text-white">
            <Award size={14} />
            Founder
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>

        <p className="mt-2 text-sm font-medium text-purple-700">
          {role}
        </p>
      </div>
    </article>
  )
}

export default DoctorCard