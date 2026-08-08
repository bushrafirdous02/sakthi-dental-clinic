import { ChevronDown } from 'lucide-react'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-purple-50"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
          {question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown size={19} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? 'grid-rows-[1fr]'
            : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-100 px-6 pb-6 pt-5">
            <p className="text-sm leading-7 text-gray-600">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQItem