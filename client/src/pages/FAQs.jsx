import { useState } from 'react'
import { HelpCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import FAQItem from '../components/FAQItem'
import { faqs } from '../data/faqs'

function FAQs() {
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId((currentId) =>
      currentId === id ? null : id
    )
  }

  return (
    <div>

      {/* Hero */}
      <section className="bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
              <HelpCircle size={28} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
              Frequently Asked Questions
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Answers to Your{' '}
              <span className="text-purple-700">
                Dental Questions
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about dental treatments,
              oral hygiene, braces, wisdom teeth, and more.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="space-y-4">

            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => handleToggle(faq.id)}
              />
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-700">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Still have questions?
              </h2>

              <p className="mt-2 text-sm text-purple-100 sm:text-base">
                Our dental team is happy to help you with your concerns.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              <Phone size={18} />
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </div>
  )
}

export default FAQs