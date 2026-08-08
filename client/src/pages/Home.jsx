import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  MapPin,
  Car,
  Clock3,
  Accessibility,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import TreatmentCard from '../components/TreatmentCard'
import TestimonialCard from '../components/TestimonialCard'
import { featuredTreatments } from '../data/treatments'
import { testimonials } from '../data/testimonials'
import cityCenterIcon from '../assets/Icon-city-center.png'
import doctorsIcon from '../assets/Icon-doctors.png'
import parkingIcon from '../assets/Icon-parking.png'
import pickupIcon from '../assets/Icon-pickup.png'
import wheelchairIcon from '../assets/Icon-wheel-chair.png'

function Home() {

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial((current) =>
      (current + 1) % testimonials.length
    )
  }, 4000)

  return () => clearInterval(interval)
}, [])
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* Hero Content */}
          <div className="max-w-2xl">

            {/* Small trust label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
              <ShieldCheck size={17} />
              Compassionate & Expert Dental Care
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Specialized Dental Care for{' '}
              <span className="text-purple-700">
                Women, Children & Families
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Experience compassionate, expert-led dental services tailored
              to your needs, all in a modern and welcoming environment.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-purple-800 hover:shadow-lg"
              >
                <Calendar size={18} />
                Fix an Appointment
              </button>

              <Link
  to="/treatments"
  className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
>
  Explore Treatments
  <ArrowRight size={18} />
</Link>
            </div>
            {/* Trust indicators */}
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-purple-100 pt-6 sm:grid-cols-3">

              <div>
                <p className="text-2xl font-bold text-gray-900">20+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Years of Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Dental Treatments
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">Daily</p>
                <p className="mt-1 text-sm text-gray-500">
                  Patient Care
                </p>
              </div>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-purple-100 shadow-xl">

              {/* Temporary visual placeholder */}
              <div className="flex h-full items-center justify-center bg-linear-to-br from-purple-200 via-purple-100 to-pink-100">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="text-4xl font-bold text-purple-700">
                      S
                    </span>
                  </div>

                  <p className="mt-5 text-lg font-semibold text-purple-900">
                    Sakthi Dental Clinic
                  </p>

                  <p className="mt-1 text-sm text-purple-700">
                    Modern • Caring • Professional
                  </p>
                </div>
              </div>

            </div>

            {/* Floating information card */}
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <ShieldCheck className="text-green-600" size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    You are in safe hands
                  </p>
                  <p className="text-xs text-gray-500">
                    Patient-first dental care
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Assurance Banner */}
<section className="bg-purple-700">
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      
      <div>
        <p className="text-xl font-semibold text-white sm:text-2xl">
          You are always in safe hands.
        </p>

        <p className="mt-1 text-sm text-purple-100 sm:text-base">
          We are ready to help, anytime.
        </p>
      </div>

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
        <ShieldCheck className="text-white" size={25} />
      </div>

    </div>
  </div>
</section>

{/* Why Choose Us */}
<section className="bg-white py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <SectionHeading
      eyebrow="Why Sakthi Dental Clinic"
      title="Dental Care You Can Trust"
      description="From everyday dental needs to specialized treatments, our focus is on providing comfortable, transparent, and patient-centered care."
    />

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 */}
      <div className="rounded-2xl border border-purple-100 bg-purple-50/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
          <ShieldCheck size={24} />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-gray-900">
          All-in-One Care
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          General dentistry through specialized treatments under one roof.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border border-purple-100 bg-purple-50/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
          <ShieldCheck size={24} />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-gray-900">
          Experienced Doctors
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Professionally trained dentists delivering personalized care.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl border border-purple-100 bg-purple-50/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
          <ShieldCheck size={24} />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-gray-900">
          Patient-Centric Approach
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Your comfort, safety, and transparency remain our priority.
        </p>
      </div>

      {/* Card 4 */}
      <div className="rounded-2xl border border-purple-100 bg-purple-50/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
          <ShieldCheck size={24} />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-gray-900">
          Technology-Driven Services
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Modern tools and equipment designed for precision and safety.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Clinic Facilities */}
<section className="mt-24">
  <SectionHeading
    eyebrow="Clinic Highlights"
    title="Clinic Facilities"
    description="Convenient facilities designed to make every visit comfortable, accessible, and stress-free."
  />

  <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

    {/* Central Location */}
    <div className="rounded-2xl border border-purple-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
        <img
          src={cityCenterIcon}
          alt="Central location"
          className="h-10 w-10 object-contain"
        />
      </div>

      <h3 className="mt-5 font-semibold text-gray-900">
        Convenient Central Location
      </h3>
    </div>

    {/* Parking */}
    <div className="rounded-2xl border border-purple-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
        <img
          src={parkingIcon}
          alt="Parking"
          className="h-10 w-10 object-contain"
        />
      </div>

      <h3 className="mt-5 font-semibold text-gray-900">
        Hassle-Free Parking
      </h3>
    </div>

    {/* Doctors */}
    <div className="rounded-2xl border border-purple-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
        <img
          src={doctorsIcon}
          alt="Doctors available daily"
          className="h-10 w-10 object-contain"
        />
      </div>

      <h3 className="mt-5 font-semibold text-gray-900">
        Doctors Available Daily
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        9 AM - 9 PM
      </p>
    </div>

    {/* Pickup */}
    <div className="rounded-2xl border border-purple-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
        <img
          src={pickupIcon}
          alt="Pickup and drop-off support"
          className="h-10 w-10 object-contain"
        />
      </div>

      <h3 className="mt-5 font-semibold text-gray-900">
        Pickup & Drop-Off Support
      </h3>
    </div>

    {/* Wheelchair */}
    <div className="rounded-2xl border border-purple-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
        <img
          src={wheelchairIcon}
          alt="Wheelchair access"
          className="h-10 w-10 object-contain"
        />
      </div>

      <h3 className="mt-5 font-semibold text-gray-900">
        Wheelchair Access
      </h3>
    </div>

  </div>
</section>

{/* Core Treatments */}
<section
  id="treatments"
  className="bg-gray-50 py-20 sm:py-24"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <SectionHeading
      eyebrow="Our Treatments"
      title="Explore Our Services"
      description="Comprehensive dental care designed around your comfort, health, and individual needs."
    />

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {featuredTreatments.map((treatment) => (
        <TreatmentCard
  key={treatment.id}
  title={treatment.title}
  description={treatment.description}
  image={treatment.image}
/>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Link
        to="/treatments"
        className="inline-flex items-center rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
      >
        View Full List of Treatments
      </Link>
    </div>

  </div>
</section>

{/* Testimonials */}
<section className="bg-white py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <SectionHeading
      eyebrow="Patient Stories"
      title="What Our Patients Say"
      description="Hear from patients and families who have experienced our care."
    />

   <div className="mx-auto mt-12 max-w-3xl">

  <div className="relative rounded-3xl border border-purple-100 bg-white p-8 shadow-lg sm:p-10">

    <TestimonialCard
      key={testimonials[currentTestimonial].id}
      name={testimonials[currentTestimonial].name}
      text={testimonials[currentTestimonial].text}
    />

    {/* Navigation buttons */}
    <div className="mt-8 flex items-center justify-center gap-4">

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() =>
          setCurrentTestimonial(
            (current) =>
              (current - 1 + testimonials.length) %
              testimonials.length
          )
        }
        className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 text-purple-700 transition hover:bg-purple-50"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => setCurrentTestimonial(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentTestimonial
                ? 'w-7 bg-purple-700'
                : 'w-2.5 bg-purple-200'
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() =>
          setCurrentTestimonial(
            (current) =>
              (current + 1) % testimonials.length
          )
        }
        className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 text-purple-700 transition hover:bg-purple-50"
      >
        <ChevronRight size={20} />
      </button>

    </div>

  </div>

</div>
  </div>
</section>
    </div>
  )
}

export default Home