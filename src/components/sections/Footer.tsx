'use client';

import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#06206A] pt-10 md:pt-12 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10 mb-8">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md">
            <div className="mb-4 inline-block bg-white p-3.5 rounded-xl">
              <div className="flex items-center gap-4">
                <img
                  src="https://d3liyurciwi0wb.cloudfront.net/logo/PanIIT%20Logo%20(1)%20(1).jpeg"
                  alt="PanIIT Alumni India"
                  className="h-16 md:h-20 object-contain mix-blend-multiply"
                />
                <div className="w-px h-12 bg-[#06206A]/20" />
                <img
                  src="https://d3liyurciwi0wb.cloudfront.net/logo/PanIIT%20AP%20Logo%20(1)%20(1).jpeg"
                  alt="PanIIT AP Summit"
                  className="h-16 md:h-20 object-contain mix-blend-multiply"
                />
              </div>
            </div>
            <p className="font-serif text-white/85 text-base font-medium mb-4">
              Andhra's Resilient DeepTech Decade: Anchored by PanIIT
            </p>
            <a href="mailto:secretariat@paniit.org" className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors font-semibold">
              <Mail size={16} className="text-[#C4A35A] shrink-0" />
              secretariat@paniit.org
            </a>
            <p className="inline-flex items-start gap-2 text-sm text-white/80 font-medium mt-2">
              <MapPin size={16} className="text-[#C4A35A] shrink-0 mt-0.5" />
              <span>Dr. B. R. Ambedkar Kala Vedika, Buckingham Peta, Vijayawada</span>
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold">
            {[
              { name: 'About', href: '#about' },
              { name: 'Initiatives', href: '#initiatives' },
              { name: 'Speakers', href: '#speakers' },
              { name: 'Schedule', href: '#schedule' },
              { name: 'Team', href: '#committee' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            id="register"
            href="https://www.paniit.org/events/21873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 rounded-md bg-[#DD1D21] hover:bg-red-500 text-white font-semibold tracking-wide text-sm transition-colors"
          >
            Register Now <ArrowRight size={16} />
          </a>
        </div>

        <div className="pt-5 border-t border-[#C4A35A]/25 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70 font-medium text-center md:text-left">
          <div>
            &copy; 2026 PanIIT Alumni India. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
