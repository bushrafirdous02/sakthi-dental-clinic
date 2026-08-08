import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'
import DoctorCard from '../components/DoctorCard'
import { doctors } from '../data/doctors'

function About() {
  return (
    <div>

      {/* About Hero */}
      <section className="bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
              About Sakthi Dental Clinic
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get to Know{' '}
              <span className="text-purple-700">
                Dr. Anupriya
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your Trusted Partner in Dental Care
            </p>
          </div>

        </div>
      </section>

      {/* Dr. Anupriya */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Profile Visual */}
            <div className="relative">
              <div className="aspect-4/5 overflow-hidden rounded-4xl bg-linear-to-br from-purple-100 via-purple-50 to-pink-100 shadow-xl">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white text-5xl font-bold text-purple-700 shadow-lg">
                      A
                    </div>

                    <p className="mt-6 text-xl font-bold text-purple-900">
                      Dr. Anupriya
                    </p>

                    <p className="mt-2 text-sm text-purple-700">
                      Founder, Sakthi Dental Clinic
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white p-5 shadow-xl sm:right-6">
                <p className="text-2xl font-bold text-purple-700">
                  20+
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Years of expertise
                </p>
              </div>
            </div>

            {/* Profile Content */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
                Your Trusted Partner
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A passion for exceptional dental care
              </h2>

              <div className="mt-6 space-y-5 text-base leading-7 text-gray-600">

                <p>
                  Bringing over 20 years of expertise, Dr. Anupriya stands
                  as a leading figure in modern dentistry at Hosur. She began
                  her professional journey after graduating in 2000. Her
                  passion for delivering exceptional dental care was further
                  nurtured during six impactful years at Mathura Clinic,
                  where she refined her clinical skills and deepened her
                  commitment to patient wellbeing.
                </p>

                <p>
                  In 2004, Dr. Anupriya established Sakthi Dental Clinic in
                  Hosur with a clear vision to make high-quality dental care
                  accessible to all. Her dedication extends beyond private
                  practice, reflected in her long-standing service with the
                  Primary Health Center at Chandara Hospital, where she has
                  been a trusted dental consultant for over a decade.
                </p>

                <p>
                  At Sakthi Dental Clinic, we believe that a healthy smile is
                  a gateway to confidence and wellbeing. Our clinic blends
                  advanced dental technology with a warm, patient-friendly
                  environment to ensure every visit is comfortable and
                  stress-free.
                </p>

                <p>
                  Whether you're looking for preventive care, cosmetic
                  enhancements, or restorative solutions, Dr. Anupriya and
                  her team are committed to delivering excellence at every
                  step.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Purpose"
            title="Our Vision & Mission"
            description="Our approach combines compassionate care, advanced technology, continuous learning, and a commitment to long-lasting oral health."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* Mission */}
            <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                <HeartHandshake size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-600">
                At Sakthi Dental Clinic, our mission is to redefine oral
                healthcare by delivering personalized, compassionate, and
                advanced dental services. We are committed to creating a
                welcoming environment where patients feel comfortable and
                confident in taking charge of their dental health.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600">
                By integrating state-of-the-art technology with
                patient-centric care, we ensure that every treatment enhances
                not only your smile but also your overall well-being.
                Continuous learning and innovation drive us to provide
                comprehensive solutions, from preventive care to complex
                dental procedures.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-purple-100 bg-purple-700 p-8 text-white shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Lightbulb size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-5 text-base leading-8 text-purple-100">
                Our vision is to be a leading force in modern dentistry,
                known for setting new standards in patient care, innovation,
                and community engagement.
              </p>

              <p className="mt-4 text-base leading-8 text-purple-100">
                We aspire to not only deliver exceptional dental outcomes but
                also to contribute positively to the community through
                awareness initiatives and outreach programs.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm font-medium">
                <Sparkles size={18} />
                Confidence, health, and happiness
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-purple-50 p-6">
              <ShieldCheck className="text-purple-700" size={25} />

              <h3 className="mt-4 font-semibold text-gray-900">
                Patient Trust
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Building trust through comfort, transparency, and
                patient-centered care.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6">
              <Sparkles className="text-purple-700" size={25} />

              <h3 className="mt-4 font-semibold text-gray-900">
                Continuous Innovation
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Embracing learning and technology to improve dental care.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6">
              <HeartHandshake className="text-purple-700" size={25} />

              <h3 className="mt-4 font-semibold text-gray-900">
                Community Care
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Supporting awareness and outreach while delivering quality
                dental services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Doctors */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Doctors"
            description="A team of dental professionals with expertise across different areas of modern dentistry."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                name={doctor.name}
                role={doctor.role}
                featured={doctor.featured}
              />
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}

export default About