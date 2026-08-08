import { MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
]

const keyTreatments = [
  'Root Canal Therapy',
  'Dental Implants',
  'Orthodontic Braces',
  'Clear Aligners',
  'Teeth Whitening',
]

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600">
                <span className="text-lg font-bold">S</span>
              </div>

              <div>
                <p className="font-bold">
                  Sakthi Dental
                </p>

                <p className="text-xs tracking-wide text-purple-300">
                  CLINIC
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Compassionate, expert-led dental care for women, children,
              and families in a modern and welcoming environment.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

  <a
    href="#"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition hover:bg-purple-600"
  >
    IG
  </a>

  <a
    href="#"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition hover:bg-purple-600"
  >
    FB
  </a>

  <a
    href="#"
    aria-label="YouTube"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition hover:bg-purple-600"
  >
    YT
  </a>

</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-semibold">
              Key Treatments
            </h3>

            <ul className="mt-5 space-y-3">
              {keyTreatments.map((treatment) => (
                <li key={treatment}>
                  <Link
                    to="/treatments"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Reach Us
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-purple-400"
                />

                <p className="text-sm leading-6 text-gray-400">
                  B2/8, SBM Layout, Anthivadi,
                  Hosur, Tamil Nadu 635109, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={19}
                  className="mt-0.5 shrink-0 text-purple-400"
                />

                <p className="text-sm text-gray-400">
                  +91 9862890897
                  <br />
                  +91 9363298118
                </p>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer