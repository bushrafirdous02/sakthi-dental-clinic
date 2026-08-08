import { Quote, Star } from 'lucide-react'

function TestimonialCard({ name, text }) {
  return (
    <article className="relative rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="absolute right-6 top-6 text-purple-100">
        <Quote size={42} />
      </div>

      <div className="flex gap-1 text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={17}
            fill="currentColor"
          />
        ))}
      </div>

      <p className="relative mt-6 text-sm leading-7 text-gray-600">
        "{text}"
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-700">
          {name.charAt(0)}
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            {name}
          </p>

          <p className="text-xs text-gray-500">
            Verified Patient
          </p>
        </div>
      </div>

    </article>
  )
}

export default TestimonialCard