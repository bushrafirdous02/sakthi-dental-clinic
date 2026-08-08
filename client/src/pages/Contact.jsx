import { useState } from 'react'
import {
  CheckCircle,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: '',
    }))

    setSubmitted(false)
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    }

    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
              Contact Sakthi Dental Clinic
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              We would love to{' '}
              <span className="text-purple-700">
                hear from you
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have a question, need dental care, or want to get in touch
              with our team? Send us a message or use the contact details
              below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Form */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple-600">
                  Send a Message
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                  We would love to hear from you
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Fill in your details and our team can get back to you.
                </p>
              </div>

              {submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">
                      Message submitted successfully.
                    </p>

                    <p className="mt-1">
                      Thank you for contacting Sakthi Dental Clinic.
                    </p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${
                      errors.name
                        ? 'border-red-400'
                        : 'border-gray-200 focus:border-purple-500'
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${
                      errors.email
                        ? 'border-red-400'
                        : 'border-gray-200 focus:border-purple-500'
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-purple-200 ${
                      errors.phone
                        ? 'border-red-400'
                        : 'border-gray-200 focus:border-purple-500'
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Your Message{' '}
                    <span className="font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  <Send size={17} />
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="rounded-3xl bg-purple-700 p-6 text-white shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple-200">
                Get in Touch
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Reach us
              </h2>

              <p className="mt-4 text-sm leading-7 text-purple-100">
                Visit our clinic or contact our team for questions,
                appointments, and dental care information.
              </p>

              <div className="mt-8 space-y-6">

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-purple-100">
                      B2/8, SBM Layout, Anthivadi,
                      <br />
                      Hosur, Tamil Nadu 635109,
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={21} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Email
                    </p>

                    <a
                      href="mailto:info@sakthidentalclinic.in"
                      className="mt-1 block text-sm text-purple-100 transition hover:text-white"
                    >
                      info@sakthidentalclinic.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Phone
                    </p>

                    <div className="mt-1 space-y-1 text-sm text-purple-100">
                      <a
                        href="tel:+919862890897"
                        className="block hover:text-white"
                      >
                        +91 9862890897
                      </a>

                      <a
                        href="tel:+919363298118"
                        className="block hover:text-white"
                      >
                        +91 9363298118
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Timings
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Sunday to Saturday: 9am to 7pm
                    </p>
                  </div>
                </div>

              </div>

              {/* Map Placeholder */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                <div className="flex min-h-48 flex-col items-center justify-center p-6 text-center">
                  <MapPin size={32} />

                  <p className="mt-3 font-semibold">
                    Sakthi Dental Clinic
                  </p>

                  <p className="mt-1 text-sm text-purple-100">
                    Hosur, Tamil Nadu
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=B2%2F8%2C%20SBM%20Layout%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-purple-700 transition hover:bg-purple-50"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact