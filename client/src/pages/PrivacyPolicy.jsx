import {
  Cookie,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'

function PrivacyPolicy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
              <ShieldCheck size={28} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
              Legal Information
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Privacy{' '}
              <span className="text-purple-700">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              At Sakthi Dental Clinic, we are committed to protecting your
              privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">

            {/* Introduction */}
            <div className="border-b border-gray-100 pb-8">
              <p className="text-base leading-8 text-gray-600">
                At Sakthi Dental Clinic, we are committed to protecting your
                privacy. This Privacy Policy outlines how we collect, use,
                store, and disclose information from visitors and users of
                our website.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <section className="border-b border-gray-100 py-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <FileText size={21} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    1. Information We Collect
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    We may collect personal identification information from
                    users in several ways, including when users:
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                    <li>Visit our website</li>
                    <li>
                      Fill out forms (e.g contact or appointment requests)
                    </li>
                    <li>
                      Engage with features, services, or resources on our
                      site
                    </li>
                  </ul>

                  <h3 className="mt-7 font-semibold text-gray-900">
                    Types of information we may collect include:
                  </h3>

                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                  </ul>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    Users can visit our site anonymously. We only collect
                    personal data when it is voluntarily submitted by users.
                    Refusing to provide certain personal information may
                    limit access to some site features or services.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    We may also gather{' '}
                    <strong>non-personal identification information</strong>,
                    such as:
                  </p>

                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                    <li>Browser type</li>
                    <li>Device details</li>
                    <li>Operating system</li>
                    <li>Internet service provider</li>
                    <li>
                      Technical data related to user interaction with the
                      site
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Cookies */}
            <section className="border-b border-gray-100 py-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Cookie size={21} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    2. Cookies
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    Our website may use “cookies” to enhance the user
                    experience. Cookies are small files stored on a user’s
                    device for record-keeping purposes and to track
                    preferences or site activity.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    Users can set their browser to refuse cookies or alert
                    them when cookies are being used. Please note that
                    disabling cookies may affect some site functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="border-b border-gray-100 py-10">
              <h2 className="text-xl font-bold text-gray-900">
                3. How We Use Your Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Collected information may be used for the following purposes:
              </p>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    To operate and manage the website
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    Ensuring content displays properly and services run
                    smoothly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    To improve customer service
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    Helping us respond to inquiries more efficiently.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    To enhance the website experience
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    Feedback provided may help us improve content, usability,
                    and performance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    To communicate via email
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    We may use the email address to respond to inquiries,
                    appointments, or service updates.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Data Security */}
            <section className="border-b border-gray-100 py-10">
              <h2 className="text-xl font-bold text-gray-900">
                4. Data Security
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We implement appropriate security measures for data
                collection, storage, and processing to safeguard your
                personal information from unauthorized access, alteration,
                or destruction.
              </p>
            </section>

            {/* 5. Information Sharing */}
            <section className="border-b border-gray-100 py-10">
              <h2 className="text-xl font-bold text-gray-900">
                5. Information Sharing
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We <strong>do not sell, trade, or rent</strong> personal
                identification information to third parties.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                We may share general demographic data (not linked to any
                personal information) with trusted partners or affiliates to
                improve service delivery and site performance.
              </p>
            </section>

            {/* 6. Children's Privacy */}
            <section className="border-b border-gray-100 py-10">
              <h2 className="text-xl font-bold text-gray-900">
                6. Children’s Privacy
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                In compliance with the Children’s Online Privacy Protection
                Act (COPPA), we do not knowingly collect any personal
                information from children under the age of 13. Our site is
                not intended to attract users below this age group.
              </p>
            </section>

            {/* 7. Changes */}
            <section className="border-b border-gray-100 py-10">
              <h2 className="text-xl font-bold text-gray-900">
                7. Changes to This Policy
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Sakthi Dental Clinic may update this Privacy Policy from
                time to time. We encourage users to review this page
                periodically to stay informed about how we protect your
                information.
              </p>
            </section>

            {/* 8. Acceptance */}
            <section className="border-b border-gray-100 py-10">
              <h2 className="text-xl font-bold text-gray-900">
                8. Acceptance of Terms
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                By using this website, you agree to this policy. If you do
                not accept our Privacy Policy, please do not use our website.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                Continued use of the site following any updates will be
                deemed as your acceptance of the revised policy.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section className="pt-10">
              <h2 className="text-xl font-bold text-gray-900">
                9. Contact Us
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                If you have any questions about this Privacy Policy or your
                interactions with our site, please contact us:
              </p>

              <div className="mt-6 space-y-5">

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      B2/8, SBM Layout, Anthivadi, Hosur,
                      <br />
                      Tamil Nadu 635109, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Email
                    </p>

                    <a
                      href="mailto:info@sakthidentalclinic.in"
                      className="mt-1 block text-sm text-purple-700 hover:underline"
                    >
                      info@sakthidentalclinic.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Phone
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      +91 9862890897
                      <br />
                      +91 9363298118
                    </p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy