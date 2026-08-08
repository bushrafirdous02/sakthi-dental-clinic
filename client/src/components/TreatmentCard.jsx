import { ArrowUpRight, Sparkles } from 'lucide-react'

function TreatmentCard({ title, description, image }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Treatment Image */}
      <div className="h-52 w-full overflow-hidden bg-purple-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">

        {/* Icon + Arrow */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
            <Sparkles size={22} />
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition group-hover:bg-purple-50 group-hover:text-purple-700">
            <ArrowUpRight size={18} />
          </div>

        </div>

        {/* Treatment Name */}
        <h2 className="mt-6 text-xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-100 pt-4">
          <span className="text-sm font-semibold text-purple-700">
            Sakthi Dental Clinic
          </span>
        </div>

      </div>

    </article>
  )
}

export default TreatmentCard