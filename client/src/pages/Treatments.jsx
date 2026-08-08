import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import SectionHeading from '../components/SectionHeading'
import TreatmentCard from '../components/TreatmentCard'
import { treatments } from '../data/treatments'

function Treatments() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
              <ShieldCheck size={17} />
              Comprehensive Dental Care
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Our{' '}
              <span className="text-purple-700">
                Treatments
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our range of dental treatments designed to support
              healthy teeth, confident smiles, and long-term oral health.
            </p>

          </div>

        </div>
      </section>

      {/* Treatments */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Explore Our Services"
            title="Dental Care for Every Need"
            description="From preventive care and restorative treatments to orthodontic and specialized dental procedures."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {treatments.map((treatment) => (
  <TreatmentCard
    key={treatment.id}
    title={treatment.title}
    description={treatment.description}
    image={treatment.image}
  />
))}

          </div>

        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-purple-700">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                Ready to take care of your smile?
              </p>

              <p className="mt-2 text-sm text-purple-100 sm:text-base">
                Our team is here to help you find the right dental care.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-sm transition hover:bg-purple-50"
            >
              <Calendar size={18} />
              Fix an Appointment
              <ArrowRight size={17} />
            </button>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Treatments