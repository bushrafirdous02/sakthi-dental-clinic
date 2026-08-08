import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Calendar } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
            <span className="text-lg font-bold text-purple-700">
              S
            </span>
          </div>

          <div>
            <p className="text-lg font-bold leading-tight text-gray-900">
              Sakthi Dental
            </p>

            <p className="text-xs font-medium tracking-wide text-purple-600">
              CLINIC
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-purple-700'
                    : 'text-gray-600 hover:text-purple-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Appointment CTA */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-purple-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800 hover:shadow-md"
          >
            <Calendar size={17} />
            Fix an Appointment
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
            >
              <Calendar size={17} />
              Fix an Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar