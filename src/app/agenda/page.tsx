'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, FileText, Calendar } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function AgendaPage() {
  useEffect(() => {
    document.title = 'PanIIT Andhra Pradesh Summit 2026: Complete Agenda Unveiled';
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 selection:bg-blue-500/20 selection:text-[#06206A]">
      <Navbar />

      <main className="flex-1 pt-36 sm:pt-44 md:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link prefetch={false} 
              href="/#schedule" 
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#06206A] transition-colors group px-3 py-1.5 rounded-lg hover:bg-white border border-transparent hover:border-gray-200"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#DD1D21]" />
              <span>Go Back</span>
            </Link>
          </div>

          {/* Page Heading & Subtitle */}
          <div className="mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F0FA] border border-[#C6E1F8] text-[#06206A] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>3rd October, 2026 • Vijayawada</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#06206A] tracking-tight leading-tight">
              PanIIT Andhra Pradesh Summit 2026: Complete Agenda Unveiled
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Step into a day filled with visionary thinking, deep industry insights, collaborative experiences and meaningful conversations — all coming together to create an ecosystem where ideas turn into action.
            </p>
          </div>

          {/* Hero Banner Creative */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white mb-10">
            <img 
              src="https://wabflow.b-cdn.net/paniit/landing/image_2026-09-15_120838444.png"
              alt="PanIIT Andhra Pradesh Summit 2026 Official Agenda Banner"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* PDF Download Bar (Matching Bangalore Summit Reference) */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3.5 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-[#DD1D21]" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm sm:text-base">
                  PanIIT AP Summit 2026.pdf
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Official Document • 3.5 MB
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href="/PanIIT_AP_Summit_2026_Agenda.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 font-bold text-xs sm:text-sm transition-all"
              >
                <ExternalLink className="w-4 h-4 text-gray-500" />
                <span>Open in Tab</span>
              </a>

              <a
                href="/PanIIT_AP_Summit_2026_Agenda.pdf"
                download="PanIIT_AP_Summit_2026_Agenda.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#06206A] hover:bg-[#082a8a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download File</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF Iframe Viewer */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xl bg-white">
            <div className="bg-gray-100 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between text-xs text-gray-600 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Document Preview
              </span>
              <span className="hidden sm:inline">Use mouse or touch to scroll through the full document</span>
            </div>

            <iframe 
              src="/PanIIT_AP_Summit_2026_Agenda.pdf#view=FitH&toolbar=1" 
              className="w-full h-[650px] sm:h-[850px] lg:h-[1050px] border-none"
              title="PanIIT Andhra Pradesh Summit 2026 Agenda Document"
            />
          </div>

          {/* Mobile Reader Helper Note */}
          <div className="mt-4 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-gray-600 text-center">
            Viewing on a mobile device? For the best reading experience with pinch-to-zoom, you can also{' '}
            <a 
              href="/PanIIT_AP_Summit_2026_Agenda.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#06206A] font-bold underline hover:text-[#DD1D21]"
            >
              open the agenda directly in your browser
            </a>{' '}
            or download it.
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
