import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const googleUrl =
    "https://www.google.com/maps/place/1+Wyndcliff+Road+Lorentzville,+Johannesburg+2094,+South+Africa/@-26.1870795,28.066495,3a,75y,193.78h,90t/data=!3m4!1e1!3m2!1sn5HagvxiYS34seWsuvFicA!2e0!4m2!3m1!1s0x1e950dd345934575:0xdffeeddbd663ca4?sa=X&ved=1t:3780&ictx=111";
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold">
                B
              </div>
              <span className="font-bold text-xl">BUGUMA SOUTH AFRICA</span>
            </div>
            <p className="text-gray-300 text-sm">
              Buguma South Africa is registered as NPO with registration number
              168-178 in terms of Non-profit organization Act 1997, registered
              with south Africa revenue Services (SARS) with Tax number
              9918906182 and as Public benefit organization (PBO)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary-400 transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-primary-400 transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:bugumasouthafrica1@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  bugumasouthafrica1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+27813756297"
                  className="hover:text-primary-400 transition-colors"
                >
                  +27 81 375 6297
                </a>
              </li>
              <li className="text-gray-400 text-xs">
                <a href={googleUrl} target="_blank" rel="noopener noreferrer">
                  1 Wyndcliff Road
                  <br />
                  Lorentzville, Johannesburg
                  <br />
                  2094, South Africa
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/Buguma-South-Africa-100057553282763/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@bugumasouthafrica4163"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2s-.2-1.7-.9-2.5c-.8-.9-1.7-.9-2.1-1C16.8 2.3 12 2.3 12 2.3h-.1s-4.8 0-8.5.4c-.4 0-1.3 0-2.1 1-.7.8-.9 2.5-.9 2.5S0 8.2 0 10.2v1.6c0 2 .1 4 .1 4s.2 1.7.9 2.5c.8.9 1.8.9 2.3 1 1.7.2 7.2.4 8.7.4h.3c1.5 0 7-.2 8.7-.4.4 0 1.5 0 2.3-1 .7-.8.9-2.5.9-2.5s.1-2 .1-4v-1.6c0-2-.1-4-.1-4zM9.6 14.7V7.3l6.2 3.7-6.2 3.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} BUGUMA South Africa. All rights reserved. | Built
            with compassion for refugees.
          </p>
        </div>
      </div>
    </footer>
  );
}
